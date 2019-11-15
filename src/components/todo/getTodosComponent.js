import React from 'react';
import '../todo/todo.scss';

const GetToDosComponent = ({ data, deleteHandler}) => {
 return data.length == 0?'There are no tasks yet':( data.map((i)=>(
    <div className="form-group">
    <form role="form">
    <p>{i.name}</p>
    </form>&nbsp;
    <button type="button" className="btn btn btn-danger" onClick={()=>deleteHandler(i.id)}>X</button>
</div>
)))
}


  export default GetToDosComponent;
