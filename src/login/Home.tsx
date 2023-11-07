import LeftMenu from "./LeftMenu";
import Post from "./Post";
import User from "./User";

import "./css/Home.css";

function Home() {
  return (
    <>
      <LeftMenu selectButton="home" />
      <Post />
      <Post />
      <Post />
      <User
        userId=""
        style={{ position: "fixed", top: "30px", right: "15%" }}
      />
    </>
  );
}

export default Home;
