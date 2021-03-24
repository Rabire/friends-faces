import "./App.css";
import pastelColors from "./colors";

import img from "./assets/yann-1.png";
import img3 from "./assets/yann-3.png";
import img4 from "./assets/yann-4.png";

const randomColor =
  pastelColors[Math.floor(Math.random() * pastelColors.length)];

const friends = ["noam", "yann"];
const randomFriend = friends[Math.floor(Math.random() * friends.length)];
console.log({ randomFriend });

function App() {
  return (
    <div
      id="snow"
      style={{
        backgroundColor: randomColor,
        backgroundImage: `url(${img}), url(${img3}), url(${img4})`,
      }}
    ></div>
  );
}

export default App;
