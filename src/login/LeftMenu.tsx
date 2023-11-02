import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { PageState } from "../App";
import {
  FiHome,
  FiSearch,
  FiNavigation,
  FiHeart,
  FiPlusSquare,
  FiUser,
} from "react-icons/fi";

import "./css/LeftMenu.css";
import UserSearch from "./UserSearch";
import { SearchButtonHandler } from "./left_menu_handler";

function LeftMenu() {
  const dispatch = useDispatch();
  const pageState: PageState = useSelector((state: PageState) => state);

  const [userSearchOn, SetUserSearchOn] = useState(true);

  return (
    <>
      {userSearchOn ? <UserSearch /> : null}
      <span className="HomeTitle">Instargram Clone</span>
      <div className="LeftMenuContainer">
        <button className="LeftMenuSelectButton">
          <FiHome />홈
        </button>
        <button
          id="searchButton"
          className="LeftMenuButton"
          style={{ fontWeight: userSearchOn ? "bold" : "normal" }}
          onClick={() => SearchButtonHandler(userSearchOn, SetUserSearchOn)}
        >
          <FiSearch />
          검색
        </button>
        <button className="LeftMenuButton">
          <FiNavigation />
          메시지
        </button>
        <button className="LeftMenuButton">
          <FiHeart />
          알림
        </button>
        <button className="LeftMenuButton">
          <FiPlusSquare />
          만들기
        </button>
        <button className="LeftMenuButton">
          <FiUser />
          프로필
        </button>
      </div>
    </>
  );
}

export default LeftMenu;
