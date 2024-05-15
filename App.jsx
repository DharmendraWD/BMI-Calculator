import React, { useState } from 'react'

// Bro I want you to fix one problem in this web app
// whenever click on "clear" option, the height and weight value should be empty
// height and weight ko value empty hunu paryo jaba "clear" button ma click hunxa 
// let's see you can do it or not


function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);
  const [warning, setWarning] = useState("");
  const [buttonValue, setbuttonValue] = useState("Calculate");
  
  let style = {
    warning:{
      background:"#970000",
      width:"fit-content", 
      margin:"0 auto",
      padding:"2px 20px",
      borderRadius:"12px"
    },
    inputHeight:{
      margin:"0 12px"
    },
    mainDiv:{
      width:"100vw", 
      textAlign:"center"
    },
    buttonParent:{
      display:"flex",
       justifyContent:"space-evenly",
        margin:"20px 0"
    }
  }


  const setHeightAndWeight =(e)=>{
    let userInputValue = e.target.value;
    checkAlphabet(userInputValue)   //this function checks if user has entered any alphabets, special character etc
    
    if(e.target.id === "weight"){ //set Weight value if weight changed
      setWeight(e.target.value)
}
else{   //set height value if height changed
  setHeight(e.target.value) 
}
}

 //this function checks if user has entered any alphabet or special character then show alert
 function checkAlphabet (userInputValue){
   const regex = /[a-zA-Z!@#$%^&()_+\-=\[\]{};':"\\|,<>\/?]$/
   if(regex.test(userInputValue) ==true){
    //  alert("input appropriate values!")
     showWarnings("Letters and special character are prohbited")
    }
  }


 //This function Calculates BMI
  const calBmi = (e) => {
    const regex = /[a-zA-Z!@#$%^&()_+\-=\[\]{};':"\\|,<>\/?]$/
    // IF USER ENTERS doesn't enter any value  or value contain alpabet or special characters and click on submit then show alert
    if (weight === 0 || weight === "0" || weight === "" || height === 0 || height === "0" || height === "" || regex.test(height) ==true || regex.test(weight) ==true) {
      showWarnings("Value can't be empty or 0")
    } 
    else {
      if(e.target.innerText==="Calculate"){
        let result = weight / ((height / 100) ** 2); //convert height to meters
        setResult(result.toFixed(1));
        setbuttonValue("Clear")
      } 
      else {
        setbuttonValue("Calculate")
        setResult(0)
      }   
    } 
  };

  // SHOWS WARNING AND AUTOMATICALLY GET HIDDEN AFTER 6 SECS 
function showWarnings(value){
  setWarning(value)
  setTimeout(() => {
    setWarning("")
  }, 6000);
}
console.log(result.length);

  return (
    <div style={style.mainDiv}>
      <h1>BMI Calculator</h1>
      <div>


<div className="getHeightWeight">
  <input onChange={setHeightAndWeight}   id='height'  placeholder='Height in cm  eg: 170' style={style.inputHeight} />
  <input onChange={setHeightAndWeight}  id='weight' placeholder='Weight in kg eg: 50 '/>
</div>

<div className="btn" style={style.buttonParent}>
<button onClick={calBmi}> {buttonValue}</button>
</div>
        <div style={{height:"50px"}}>
      {result !=""? <p>Your BMI is: {result}</p> : null}
   {warning != ""?  <p style={style.warning}>{warning}</p>:null }  {/* //if warning value is null then don't print this line  */}
          <h2>{setResult}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;