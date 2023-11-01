import { useSelector, useDispatch } from "react-redux";
import { PageState } from "../App";
import { useState, useRef } from "react";
import { CommentHandler } from "./home_handler";
import PostDetail from "./PostDetail";

import {
  FiEdit3,
  FiHeart,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./css/Post.css";
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
    <>
      <div className="postContainer">
        <div className="userProfile">
          <div className="userImg"></div>
          <div className="block"></div>
          <div className="userName">user</div>
        </div>
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
            <FiHeart />
            <FiEdit3
              onClick={() => {
                CommentHandler(dispatch);
              }}
            />
          </div>
          <div className="heartState">좋아요 {3}개</div>
          <div className="lastComment">
            <span className="lastCommentUser">User </span>
            Last Comment Content
          </div>
          <div className="moreComment">더보기</div>
          <input className="writeComment" placeholder="댓글 달기..." />
        </div>
      </div>

      <PostDetail />
    </>
  );
}

export default Post;
