import React from "react";

const Box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) { // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
      //Is the card a computer card? && Is the result a tie? && Is there a value in props.result?
    result = props.result === "win" ? "lose" : "win";
  } else {// 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다. If it's not the case above, use the result passed as props as it is.
    result = props.result;
  }
  if (props.title === "Computer") {
    console.log("computer", result);
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2 data-testid="item-name">{props.item && props.item.name}</h2>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
