import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. Two boxes (title, picture, result)
// 2. There are rock-paper-scissors buttons.
// 3. When a button is clicked, the clicked value is displayed in the box.
// 4. The computer randomly selects an item.
// 5. The winner is determined based on the results of steps 3 and 4.
// 6. The border color changes according to the result (green for win, red for lose, black for draw).

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmog_u1RmIqnUEGiuteGejNZ-6L5adICzb5w&usqp=CAU",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvYGUqgKpKMEsqTKfrfQR4MgV4whaqQX2hLHkGbytDqZFp-soFR_2btJV1JSqrhCsLb4&usqp=CAU",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value", randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  };
  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

// user == computer                       tie
// user == rock, computer == scissors     user wins
// user == rock, computer == paper        user loses
// user == scissors, computer == paper    user wins
// user == scissors, computer == rock     user loses
// user == paper, computer == rock        user wins
// user == paper, computer == scissors    user loses

    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>Scissors</button>
        <button onClick={() => play("rock")}>Rock</button>
        <button onClick={() => play("paper")}>Paper</button>
      </div>
    </div>
  );
}

export default App;