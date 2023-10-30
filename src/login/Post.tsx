import { useSelector, useDispatch } from "react-redux";
import { PageState } from "../App";
import { useState, useRef } from "react";

type Comment = {
  time: Date;
  userId: string;
  explanation: string;
};

function Post() {
  const dispatch = useDispatch();
  const pageState: PageState = useSelector((state: PageState) => state);

  const [userHeartState, SetUserHeartState] = useState<boolean>();

  const [commentState, SetCommentState] = useState<Comment[]>();

  return (
    <div>
      <div className="postImg"></div>
      <div className=""></div>
    </div>
  );
}
