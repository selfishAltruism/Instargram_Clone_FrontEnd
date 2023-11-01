import { useSelector, useDispatch } from "react-redux";
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

function LeftMenu() {
  const dispatch = useDispatch();
  const pageState: PageState = useSelector((state: PageState) => state);

  return (
    <>
      <span className="HomeTitle">Instargram Clone</span>
      <div className="LeftMenuContainer">
        <button className="LeftMenuSelectButton">
          <FiHome />홈
        </button>
        <button className="LeftMenuButton">
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
