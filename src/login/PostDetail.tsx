import { useSelector, useDispatch } from "react-redux";
import { PageState } from "../store";
import { useState, useRef } from "react";

import {
  FiEdit3,
  FiHeart,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./css/PostDetail.css";

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
    <>
      {pageState.loginState && pageState.actionState === "homePostDetail" ? (
        <>
          <div className="opacitybackground"></div>
          <div id="postDetail" className="postDetailContainer">
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
              <div className="userProfile">
                <div className="userImg"></div>
                <div className="block" />
                <div className="userName">user</div>
              </div>
              <div className="Comment">
                <div className="CommentUserProfile">
                  <div className="userImg"></div>
                  <div className="block" />
                  <div className="userName">user</div>
                  <div className="block" />
                  Last Comment Content
                </div>
              </div>
              <div className="userState">
                <FiHeart /> <FiEdit3 />
              </div>
              <input className="writeComment" placeholder="댓글 달기..." />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default PostDetail;
