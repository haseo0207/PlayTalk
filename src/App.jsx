import { useState } from "react";
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login/Login';
import Join_Member from './Components/Join_Member/Join_Member';
const App = () => {
  const [info, setInfo] = useState({id : null, pw : null, nickname : null, ph : null, email : null});
  
  const handleChange = (e) => {
    const{name,value} = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo, [name]: value,  
    }));
  }

  const sendInfo = () =>{
    console.log(info);
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: info.nickname,
        userId: info.id,
        pwd: info.pw,
        email: info.email,
        phone: info.ph,
        gender: "1"
      })
    })
    .then(response => {
      if (!response.ok) {
        // 상태코드가 2xx가 아니라면 에러 처리
        throw new Error("회원가입 실패! 서버 응답 코드: " + response.status);
      }
      // 200 OK 
      alert("회원가입 성공!");
    })
    .catch(error => {
      console.error(error);
      alert("회원가입 중 오류가 발생했습니다.");
    });
    
  }
  return (
    <>
    <Header /> 
    <main className="main-container">
    {/* <Login /> */}
    <Join_Member 
      handleChange={handleChange}
      sendInfo = {sendInfo}
    />
    </main>
    </>  
  )
}

export default App;
