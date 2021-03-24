import { useCallback, useState } from "react";
import "./App.css";
import colors from "./colors";

import Button from "./Button/Button";

const friends = ["noam", "yann", "leo", "clem", "simon"].sort(
  () => Math.random() - 0.5
);

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
