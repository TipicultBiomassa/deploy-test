import React, { useState, useEffect } from 'react';
const App = ()=>{
  const rootStyle = {
    height: '3000px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
  const experience = {
    height: "500px",
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const fixedElement = {
    width: '150px', height: "100px",
    position: "fixed",backgroundColor:'#e2e2e2',
    color:'red', top:'50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px'
  }
  const [scrollValue, changeScroll] = useState(0); 
  useEffect(()=>{
    document.addEventListener('scroll',(e)=>{
      // console.log(window.scrollY);
      changeScroll(window.scrollY);
    })
  },[]);

  const условиеДляОтрисовки = ()=>{
    const myArr = [1,2,3,4,5,6,7,8];
    if (scrollValue > 1000){
      return myArr.map((e,i)=>{
        return <a href='sdasd' key={i} style={fixedElement}>test</a>
      })
        
    }
    return (<></>)
  }
  return (
    <>
      <div style={rootStyle}>
        <div style={experience}>Я работал Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque laudantium fuga facere nam soluta provident iste! Quis voluptate dolorum dolor error magni fugit commodi dignissimos? A impedit nesciunt rem?</div>
        <div style={experience}>Я работал Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque laudantium fuga facere nam soluta provident iste! Quis voluptate dolorum dolor error magni fugit commodi dignissimos? A impedit nesciunt rem?</div>
        <div style={experience}>Я работал Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque laudantium fuga facere nam soluta provident iste! Quis voluptate dolorum dolor error magni fugit commodi dignissimos? A impedit nesciunt rem?</div>
        <div style={experience}>Я работал Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque laudantium fuga facere nam soluta provident iste! Quis voluptate dolorum dolor error magni fugit commodi dignissimos? A impedit nesciunt rem?</div>
        <div style={experience}>Я работал Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque laudantium fuga facere nam soluta provident iste! Quis voluptate dolorum dolor error magni fugit commodi dignissimos? A impedit nesciunt rem?</div>
        <div style={experience}>Я работал Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque laudantium fuga facere nam soluta provident iste! Quis voluptate dolorum dolor error magni fugit commodi dignissimos? A impedit nesciunt rem?</div>


      </div>
      <div style={fixedElement}>
        {условиеДляОтрисовки()}
      </div>
    </>
  );
}

export default App;
