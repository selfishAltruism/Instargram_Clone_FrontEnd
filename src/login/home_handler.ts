export function CommentHandler(dispatch: any) {
  dispatch({ type: "homePostDetail" });

  document.addEventListener("mousedown", DeletePostDetail);
  function DeletePostDetail(event: any) {
    const $postDetail = document.getElementById("postDetail");
    if (event.target !== $postDetail && !$postDetail?.contains(event.target!)) {
      document.removeEventListener("mousedown", DeletePostDetail);
      dispatch({ type: "home" });
    }
  }
}
