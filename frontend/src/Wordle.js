import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NestedGrid from "./Components/GameGrid";
import Keyboard from "./Components/Keyboard/Keyboard";
import axios from "axios";

function Worlde() {
  // let word = "MANGO";
  const word = localStorage.getItem("keyword")

  const [input, setInput] = useState("");
  const [row, setRow] = useState(0);
  const [wordList, setWordList] = useState(["", "", "", "", "", ""]);
  const[count, setCount] = useState(0)
  const namename = localStorage.getItem("email")

  console.log(input)
  console.log(row)
  console.log(wordList)
  let handleSubmit1 =() => {
    const namename = localStorage.getItem("email")
   console.log(namename)
    let Tracking= async () => {
      let formField = new FormData();
      formField.append("email", namename);
      formField.append("action", "tracking");
      await axios({
        method: "POST",
        url: "/api/user/tracking/",
        data: formField,
      }).then((response) => {console.log(response.data)
          let aa= response.data
          let length = aa.length
          console.log(length)
          console.log(aa)       
      });
    };  
    Tracking();
  }
  let Clear =() => {
    const namename = localStorage.getItem("email")
    let clearData= async () => {
      let formField = new FormData();
      formField.append("email", namename);
      formField.append("action", "clear");
      await axios({
        method: "POST",
        url: "/api/user/clear/",
        data: formField,
      }).then((response) => {console.log(response.data)
      });
    };
    clearData();
  }
  function updateInput(replace) {
    setInput(replace);
    
  }

  function updateRow(value) {
    setRow(value);
   
  }

  function updateWordList(newArray) {
    setWordList(newArray); 
    setCount(count+1)
    console.log("KhoaPhamDang")
    console.log(count)
    console.log("DANG")
    if (count ==0){
    let Word1= async () => {
      let formField = new FormData();
      let tempword = newArray[count]
      formField.append("value", tempword);
      formField.append("email", namename);
      formField.append("action", "word1");
      await axios({
        method: "POST",
        url: "/api/user/getdata/",
        data: formField,
      }).then((response) => {console.log(response.data)});
     
    }
    Word1();
    } 
    else if(count ==1){
      let Word2= async () => {
        let formField = new FormData();
        let tempword = newArray[count]
        formField.append("value", tempword);
        formField.append("email", namename);
        formField.append("action", "word2");
        await axios({
          method: "POST",
          url: "/api/user/getdata/",
          data: formField,
        }).then((response) => {console.log(response.data)});
       
      }
      Word2();
    }
    else if(count ==2){
      let Word3= async () => {
        let formField = new FormData();
        let tempword = newArray[count]
        formField.append("value", tempword);
        formField.append("email", namename);
        formField.append("action", "word3");
        await axios({
          method: "POST",
          url: "/api/user/getdata/",
          data: formField,
        }).then((response) => {console.log(response.data)});       
      }
      Word3();
    }
    else if(count ==3){
      let Word4= async () => {
        let formField = new FormData();
        let tempword = newArray[count]
        formField.append("value", tempword);
        formField.append("email", namename);
        formField.append("action", "word4");
        await axios({
          method: "POST",
          url: "/api/user/getdata/",
          data: formField,
        }).then((response) => {console.log(response.data)});
       
      }
      Word4();

    }
    else if(count ==4){
      let Word5= async () => {
        let formField = new FormData();
        let tempword = newArray[count]
        formField.append("value", tempword);
        formField.append("email", namename);
        formField.append("action", "word5");
        await axios({
          method: "POST",
          url: "/api/user/getdata/",
          data: formField,
        }).then((response) => {console.log(response.data)});      
      }
      Word5();
    }
  }
  return (
    <div className="app-style">
      <button onClick={handleSubmit1}>Tracking</button>
      <button onClick={Clear}>Clear</button>
      {/* <Header /> */}
      <NestedGrid input={input} wordList={wordList} row={row} />
      <Keyboard
        input={input}
        updateInput={updateInput}
        row={row}
        updateRow={updateRow}
        wordList={wordList}
        updateWordList={updateWordList}
        word={word}
      />
    </div>
  );
}
export default Worlde