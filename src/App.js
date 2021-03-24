import { useCallback, useState } from "react";
import "./App.css";
import pastelColors from "./colors";

const randomColor =
  pastelColors[Math.floor(Math.random() * pastelColors.length)];

const friends = ["noam", "yann", "leo"].sort(() => Math.random() - 0.5);

function App() {
  const [currentFriend, setCurrentFriend] = useState(friends[0]);

  const iconsPath = require.context("./assets/", true);

  const img1 = iconsPath("./" + currentFriend + "-1.png").default;
  const img3 = iconsPath("./" + currentFriend + "-3.png").default;
  const img4 = iconsPath("./" + currentFriend + "-4.png").default;

  const nextFriend = useCallback(() => setCurrentFriend(friends[1]), []);

  return (
    <div
      id="snow"
      style={{
        backgroundColor: randomColor,
        backgroundImage: `url(${img1}), url(${img3}), url(${img4})`,
      }}
    >
      <h1 onClick={nextFriend}>NEXT</h1>
    </div>
  );
}

export default App;
