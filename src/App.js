import './App.css';
import './Rwd.css';

import {useState} from 'react';
// import Header from './component/Header';
// import Greeting from './component/Greeting';

function App() {
  const [centimeter, setCentimeter] = useState("0");
  const [inch, setInch] = useState("0");
  const [status, setStatus] = useState(true);
  const handleCentimeter = (e) => {
    setCentimeter(e.target.value); 
  }
  const handleInch= (e) => {
    setInch(e.target.value); 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setInch(centimeter / 2.54);
  }
  const resetInput = () => {
    setCentimeter("값을 입력하세요");
    setInch("인치로 환산됩니다.")
  } 
  const switchInput = () => {
    setStatus(!status);
  }
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState('홍길동');

  // function countPlus() {
  //   setCount(count+1);
  //   alert(`${name}님, 반갑습니다.`);
  // }
  // // function changeName(e) {
  // //   // console.log(e);
  // //   // setName(e.target.value);
  // // }
  // function countMinus() {
  //   setCount(count-1);
  // }
  return (
    <div className="App"> 

      { /* <Header />
      <Greeting />
      <div className="Count">
        <p>count: {count}</p>
        <input type="text" value={name} onChange={e=>{setName(e.target.value)}} placeholder="사용자명"/>
        <button onClick={countPlus}>+</button>
        <button onClick={countMinus}>-</button>
      // </div> */ }

      <h1 class="title-text text-center text-white my-0 py-1">단위 환산</h1>
      <p class="info py-1 my-0">cm를 inch로 환산하는 앱</p>
      <div className="form-wrap my-1">
        <form onSubmit={handleSubmit}>
          <div class="input-wrap">
            <label ><input type="number" value={centimeter} onChange={handleCentimeter} placeholder="센티미터(cm)를 입력하세요." disabled={!status}/> cm</label>
            <label><input type="number" value={inch} onChange={handleInch} placeholder="인치(inch)로 환산됩니다." disabled={status}/> inch</label>
            <input type="submit" value="환산하기"/>
            <input type="reset" onClick={resetInput} value="초기화" />
            <input type="reset" onClick={switchInput} value="입력 반전" />
          </div>
        </form>
      </div>
      <p className="owner text-center fixed bottom0 py-1 w100">&copy;hanul</p>
    </div>
    

  );
}

export default App;
