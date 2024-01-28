import { useState } from "react";

function EmiForm(){
    const [amount, setAmount]=useState(2000);
    const [years, setYears]=useState(1);
    const [rates, setRates]=useState(10);
    const [EMI, setEMI] = useState(0);

    function handelAmount(e){
        setAmount(e.target.value)
    }
     function handelYears(e){
        setYears(e.target.value)
    }
     function handelRates(e){
        setRates(e.target.value)
    }
    function calculateEMI(){
        var p=amount;
        // console.log("p=",p);
        var r= rates/12/100;
        //  console.log("r=",r);
        var n = years/12;
        //  console.log("n=",n);
        //   console.log("pow=",Math.pow(1+r,n));
        //   console.log("pow1=",Math.pow(1+r,n)-1);
        //   console.log("pow2=",Math.pow(1+r,n)/(Math.pow(1+r,n)-1));
          

        var EMI= p * r * Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
        setEMI(EMI)

    }



return (
<div className="container-fluid bg-dark text-white">
<div className=" m-4 p-4">
    <h2 className="">Personal Loan EMI Calculator</h2>
<div className="p-2 bg-light text-dark">
    <div className="row m-2">
        <div className="col">
            Amount you need <input type="text" value={amount} size="10"/>
        </div>
        <div className="col">
            for <input type="text" size="4" value={years}/> Years
        </div>
        <div className="col">
            Interest Rate <input type="text"   size="4" value ={rates}/> %
        </div>
    </div>

    <div className="row mt-4">
        <div className="col">
            1000 <input type="range" min="1000" max="100000" value={amount} onChange={handelAmount}/> 100000
        </div>
        <div className="col">
            1 <input type="range" min="1" max="5" value={years} onChange={handelYears}/> 5
        </div>
        <div className="col">
            10.0% <input type="range" min="10" max="18.5" step="0.01" value={rates} onChange={handelRates}/> 18.5%
        </div>
    </div>
    <div className="row  mt-4">
        <div className="col text-end"><button className="btn btn-primary" onClick={calculateEMI}>Calculate</button></div>
    </div>
    <div className="row mt-4">
        <div className="col">
            Your monthly installment is <b>{Math.round(EMI).toLocaleString('en-in',{style:'currency', currency:'INR'})}</b> for {years} years.
        </div>
    </div>

</div>
</div>
</div>
)}

export default EmiForm;