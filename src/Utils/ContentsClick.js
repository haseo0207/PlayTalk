export const handleContentsClick = (data) => {
    console.log(data);
    sendInfo(data);
}

const sendInfo = (data) =>{
    console.log(data);
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content_id: data.id,    
        name: data.name,    
        title : data.title, 
        // contents: data.contents,    
        writedate : data.time, 
        view : data.view,
        user_id: data.usrid,
      })
    })
    .then(response => {
      if (!response.ok) {
        // 상태코드가 2xx가 아니라면 에러 처리
        throw new Error("정보전송 실패패! 서버 응답 코드: " + response.status);
      }
      // 200 OK 
      alert("정보전송송 성공!");
    })
    .catch(error => {
      console.error(error);
      alert("게시글 정보 전송 실패");
    });
    
  }