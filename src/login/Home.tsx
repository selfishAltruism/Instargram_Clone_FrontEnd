import { useSelector, useDispatch } from "react-redux";
import { PageState } from "../App";
import LeftMenu from "./LeftMenu";
import Post from "./Post";
import User from "./User";
import UserSearch from "./UserSearch";

import "./css/Home.css";

function Home() {
  const dispatch = useDispatch();
  const pageState: PageState = useSelector((state: PageState) => state);

  return (
    <>
      <LeftMenu />
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
