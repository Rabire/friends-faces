import { useCallback, useState } from "react";
import "./App.css";
import { shuffleArray } from "./utils";
import data from "./config.json";

import Button from "./Button/Button";

const friends = shuffleArray(data.friends);
const colors = shuffleArray(data.colors);

function App() {
  const [currentFriendIndex, setCurrentFriendIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const currentColor = colors[currentColorIndex];
  const nextColorIndex =
    currentColorIndex === colors.length - 1 ? 0 : currentColorIndex + 1;

  const currentFriend = friends[currentFriendIndex];
  const nextFriendIndex =
    currentFriendIndex === friends.length - 1 ? 0 : currentFriendIndex + 1;
  const nextFriend = friends[nextFriendIndex];

  const iconsPath = require.context("./assets/", true);

  const img1 = iconsPath("./" + currentFriend + "-1.png").default;
  const img3 = iconsPath("./" + currentFriend + "-3.png").default;
  const img4 = iconsPath("./" + currentFriend + "-4.png").default;

  const skip = useCallback(() => {
    setCurrentFriendIndex(nextFriendIndex);
    setCurrentColorIndex(nextColorIndex);
  }, [nextFriendIndex, nextColorIndex]);

  return (
    <div
      id="snow"
      style={{
        backgroundColor: currentColor,
        backgroundImage: `url(${img1}), url(${img3}), url(${img4})`,
      }}
    >
      <Button nextFriend={nextFriend} skip={skip} />
    </div>
  );
}

export default App;
