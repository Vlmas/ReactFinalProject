import { useContext } from "react";
import { MyContext } from '../../App';

function Test() {
  let { state, setState } = useContext(MyContext);
  console.log(state);

  return (
    <div>
      <h2>{state}</h2>

      <button onClick={() => setState('new state')}>change state</button>
    </div>
  );
}

export default Test;