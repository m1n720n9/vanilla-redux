import React from "react";
import { connect } from "react-redux";

const Detail = ({toDo})=>{
  console.log({toDo})
  return(
    <>
      <h1>{toDo?.text}</h1>
      <h5>Create at : {toDo?.id}</h5>
    </>
  );
};

function mapStateToProps(state, ownProps){
  console.log(state,ownProps)
  const {
    match : {
      params: {id}
    }
  } = ownProps;
  console.log(id)
  return { toDo : state.find(toDo => toDo.id === parseInt(id))};
}

export default connect(mapStateToProps)(Detail);