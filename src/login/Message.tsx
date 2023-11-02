import { useSelector, useDispatch } from "react-redux";
import { PageState } from "../App";
import LeftMenu from "./LeftMenu";
import User from "./User";

import "./css/Message.css";

function Message() {
  const dispatch = useDispatch();
  const pageState: PageState = useSelector((state: PageState) => state);

  return (
    <>
      <LeftMenu selectButton="message" />
      <div className="messageContainer">
        <div className="messageTargerUserContainer"></div>
        <div className="messageContentContainer"></div>
      </div>
    </>
  );
}

export default Message;
