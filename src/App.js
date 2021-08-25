import React, { useState } from "react";
import "./styles.css";


var emojilist = {
  
  "😚": "Kissing face with closed eyes",
  "😝": "Squinting face with tongue",
  "😶": "Face without mouth",
  "😊": "Smiling face",
  "😏": "Smirking face",
  "😖": "Confounded face",
  "😋": "Face savouring food",
  "🥱": "Yawning Face",
  "😨": "Fearful face",
  "🥺": "Pleading face",
  "😀": "Grinning Face",
  "😁": "Beaming Face with Smiling Eyes",
  "😂": "Face with Tears of Joy",
  "🤣": "Rolling on the Floor Laughing",
  "😉": "Winking Face",
  "😆": "Grinning Squinting Face",
  "😋": "Face Savoring Food",
  "🤩": "Star-Struck",
  "🙃": "Upside-Down Face"
};

var ouremojis = Object.keys(emojilist);

export default function App() {

  var [inputemoji, setemoji] = useState("");


  function findemoji (event) {
    var emojientered = event.target.value;
    var inputemoji = emojilist[emojientered];

    if (inputemoji === undefined) {
      inputemoji = "Sorry! We dont have this emoji in our Bucket";
    }

      setemoji(inputemoji);
  }

  function clickemoji (emoji){
    var inputemoji = emojilist[emoji];
    setemoji(inputemoji);
  }

  
  return (
    <div className=" Emoji App">
      <h1>Emoji Finder</h1>
      <h2>Enter your favorite emoji and lets find out its meaning!</h2>
      <input onChange={findemoji}></input>

    <div className="output">{inputemoji}</div>

    <div>
      
    <h3> Emoji's in our bucket</h3>
      {ouremojis.map(function (emoji) {
        return (
          <div
            className="list"
            style={{ cursor: "pointer" }}
            onClick={() => clickemoji(emoji)}
          >
            {" "}
            {emoji}
          </div>
        );
      })}
    </div>
  </div>


  );
}
