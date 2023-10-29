import { useSelector, useDispatch } from "react-redux";
import { PageState } from "../App";
import LeftMenu from "./LeftMenu";

function Home() {
  const dispatch = useDispatch();
  const pageState: PageState = useSelector((state: PageState) => state);

  return (
    <>
      <LeftMenu />
    </>
  );
}

export default Home;
