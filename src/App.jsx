import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const list = [
    {
      id: 1,
      question: "Rolex là công ty về gì?",
      answers: [
        {
          text: "Điện thoại",
          correct: false,
        },
        {
          text: "Đồng hồ",
          correct: true,
        },
        {
          text: "Đồ ăn",
          correct: false,
        },
        {
          text: "Ô tô",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Facebook có từ khi nào?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Ai là diễn viên trong phim Harry-porter?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Ai là quả bóng vàng Việt Nam 2021?",
      answers: [
        {
          text: "Quang Hải",
          correct: false,
        },
        {
          text: "Tiến Linh",
          correct: false,
        },
        {
          text: "Thành Lương",
          correct: false,
        },
        {
          text: "Hoàng Đức",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "1+1=?",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "2",
          correct: true,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "'Em của ngày hôm qua' là bài hát của ai?",
      answers: [
        {
          text: "Sơn Tùng",
          correct: true,
        },
        {
          text: "Noo Phước Thịnh",
          correct: false,
        },
        {
          text: "Hương Ly",
          correct: false,
        },
        {
          text: "Đàm Vĩnh Hưng",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "2*2=?",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Tỉnh nào thuộc miền trung?",
      answers: [
        {
          text: "Hải Phòng",
          correct: false,
        },
        {
          text: "Bến Tre",
          correct: false,
        },
        {
          text: "Nghệ An",
          correct: true,
        },
        {
          text: "Hà Nội",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Đâu là môn thể thao vua?",
      answers: [
        {
          text: "Bóng bàn",
          correct: false,
        },
        {
          text: "Bóng chuyền",
          correct: false,
        },
        {
          text: "Bóng rổ",
          correct: false,
        },
        {
          text: "Bóng đá",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Ai giàu nhất việt nam?",
      answers: [
        {
          text: "Phạm Nhật Vượng",
          correct: false,
        },
        {
          text: "Hoài Linh",
          correct: false,
        },
        {
          text: "Đức Tài",
          correct: true,
        },
        {
          text: "Shark Hưng",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "1+4=",
      answers: [
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
        {
          text: "5",
          correct: true,
        },
        {
          text: "6",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Game gì hay nhất?",
      answers: [
        {
          text: "LOL",
          correct: false,
        },
        {
          text: "FO4",
          correct: true,
        },
        {
          text: "Free Fire",
          correct: false,
        },
        {
          text: "Đại ca ra tù",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Nóng thì bật gì?",
      answers: [
        {
          text: "Quạt",
          correct: true,
        },
        {
          text: "Laptop",
          correct: false,
        },
        {
          text: "TV",
          correct: false,
        },
        {
          text: "Máy sưởi",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Người yêu tôi tên là?",
      answers: [
        {
          text: "Hằng",
          correct: false,
        },
        {
          text: "Thư",
          correct: false,
        },
        {
          text: "Ánh",
          correct: false,
        },
        {
          text: "Có ny đâu",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Ai là cầu thủ hay nhất thế giới?",
      answers: [
        {
          text: "Ronaldo",
          correct: false,
        },
        {
          text: "Messi",
          correct: false,
        },
        {
          text: "Lewandowski",
          correct: false,
        },
        {
          text: "Đức Tài",
          correct: true,
        },
      ],
    },
    {
      id: 16,
      question: "Ai đẹp trai nhất thế giới?",
      answers: [
        {
          text: "Tài",
          correct: true,
        },
        {
          text: "Beckham",
          correct: false,
        },
        {
          text: "Sơn Tùng",
          correct: false,
        },
        {
          text: "Justin berererere",
          correct: true,
        },
      ],
    },
  ];
  const data = shuffle(list);
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <>
                <h1 className="endText">
                  {username} earned: {earned}
                </h1>
                <button
                  className="startAgain"
                  onClick={() => window.location.reload(false)}
                >
                  Play again
                </button>
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
