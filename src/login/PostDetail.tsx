import { useSelector, useDispatch } from "react-redux";
import { PageState } from "../App";
import { useState, useRef } from "react";

import {
  FiEdit3,
  FiHeart,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./PostDetail.css";

type Comment = {
  time: Date;
  userId: string;
  explanation: string;
};

function PostDetail() {
  const dispatch = useDispatch();
  const pageState: PageState = useSelector((state: PageState) => state);

  const [userHeartState, SetUserHeartState] = useState<boolean>();

  const [commentState, SetCommentState] = useState<Comment[]>();

  return (
    <div className="postDetailContainer">
      <div className="postImgDiv">
        <div className="postImg"></div>
        <button className="postImgLeftButton">
          <FiChevronLeft />
        </button>
        <button className="postImgRightButton">
          <FiChevronRight />
        </button>
      </div>
      <div className="postContentDiv">
        <div className="userState">
          <FiHeart /> <FiEdit3 />
        </div>
        <div className="heartState">좋아요 {3}개</div>
        <div className="Comment">
          <span className="CommentUser">User </span>
          Last Comment Content
        </div>
        <div className="moreComment">더보기</div>
        <input className="writeComment" placeholder="댓글 달기..." />
      </div>
    </div>
  );
}

export default PostDetail;
