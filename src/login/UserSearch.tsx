import { useState } from "react";
import User from "./User";

import "./css/UserSearch.css";

function UserSearch() {
  const [lastSearchUserIdList, SetLastSaerchUserIdList] = useState<string[]>(
    []
  );

  return (
    <div id="userSearch" className="userSearchContainer">
      <div className="userSearchInputDiv">
        <span className="title">검색</span>
        <input className="userSearchInput" placeholder="검색" />
      </div>
      <div className="lastSearchUserDiv">
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
        <User userId="" style={{ marginTop: "10px" }} />
      </div>
    </div>
  );
}

export default UserSearch;
