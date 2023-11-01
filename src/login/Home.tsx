import { useSelector, useDispatch } from "react-redux";
import { PageState } from "../App";
import LeftMenu from "./LeftMenu";
import Post from "./Post";

import "./css/Home.css";

function Home() {
  const dispatch = useDispatch();
  const pageState: PageState = useSelector((state: PageState) => state);

  return (
    <>
      <div
        className={
          pageState.actionState === "homePostDetail" ? "homeOpacity" : "home"
        }
      ></div>
      <LeftMenu />
      <Post />
      <div className="HomeUserProfile">
        <div className="userImg"></div>
        <div className="block"></div>
        <div className="userName">
          <div>user</div>
          <div className="userRealName">user name</div>
        </div>
      </div>
    </>
  );
}

export default Home;
