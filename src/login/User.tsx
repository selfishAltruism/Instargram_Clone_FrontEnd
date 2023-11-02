import "./css/User.css";

type Prop = {
  userId: string;
  style?: React.CSSProperties;
};

function User(prop: Prop) {
  const { userId, style } = prop;

  //id로 user 정보 찾는 logic 위치//

  return (
    <div className="user" style={{ ...style }}>
      <div className="userImg"></div>
      <div className="block"></div>
      <div className="userName">
        <div>user</div>
        <div className="userRealName">user name</div>
      </div>
    </div>
  );
}

export default User;
