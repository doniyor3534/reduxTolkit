import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add , delll} from './redux/reducer2';
import { incriment,decriment,anmountincr,anmoundecr } from './redux/reduser';


function App() {
  //////////////////////////////////////////////////////
  const {count} = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  console.log(count);
  ///////////////////////////////////////////////
  const {data} = useSelector(state=>state.reducer)
  console.log(data);
  const [input,setInput]=useState('')
  const inputfun=(e)=>{
      setInput(e.target.value)
  }
  const send=(e)=>{
    e.preventDefault()
    dispatch(add(input))
    setInput('')
  }
  const del =(val)=>{
    dispatch(delll(val))
  }
  return (
    <div className="App">
         <h1>{count}</h1>
         <div className="btns">
            <button onClick={()=>dispatch(incriment())}>+</button>
            <button onClick={()=>dispatch(anmountincr(10))}>anmountincr</button>
            <button onClick={()=>dispatch(anmoundecr(10))}>Anmoundecr</button>
            <button onClick={()=>dispatch(decriment())}>-</button>
         </div>
         {/* /////////////////////////////////////////////////////////////////////////////// */}
         <form onSubmit={send}>
            <input type="text" onChange={inputfun} value={input} />
            <button>send</button>
         </form>
         {
          data.map((val)=>(
            <div className="card">
               <p>{val}</p>
               <button onClick={()=>del(val)}>del</button>
            </div>
          ))
         }
    </div>
  );
}

export default App;
