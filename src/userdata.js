import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { users: state.userrootReducer.users };
};
const ConnectedusersList = ({ users }) => (    
  <ul className="list-group list-group-flush">
    {users.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);
const userdataList = connect(mapStateToProps)(ConnectedusersList);
export default userdataList;

