import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../component/ToDo";

const Home = ({toDos,addToDo}) => {
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("")
  }
  return(
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  )
}

function mapStateToProps (state) {
  return {toDos : state}
}

function mapDispatchToProps (dispatch) {
  return {
    addToDo : (text) => dispatch(actionCreators.addToDo(text))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/* connect : components들을 store에 연결시킴
  2개의 argument를 가진다. state , dispatch. 필요없으면 null

  mapStateToProps : function (state, ownProps)
  return {toDos : state} >> Redux state로부터 home(component)에 prop으로써 전달함

  function을 만들어서 props로 전달
*/

