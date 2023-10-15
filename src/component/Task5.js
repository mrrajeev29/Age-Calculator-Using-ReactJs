export const Task5=()=>
{
    return (
        <div style={{textAlign:"center"}}>
            <form>
            <h2 style={{marginTop:150}}>Age Calculator</h2><br/>
            <h6>Enter your date of birth</h6>
            <input type="date" id="i1" style={{borderBlockColor:"#f2f2f2",width:275,height:35,borderRadius:6}} required/>
            <br/><br/>
            <button type="button" onClick={Age} className="btn btn-primary">Calculate Age</button>
            <br/><br/>
            <h4 id="i2"></h4>
            </form>
        </div>
    )
}

const Age=()=>
{
    var y=document.getElementById("i1").value;
    if(y=="")
    {
        alert("Enter the Date of Birth.");
    }
    else{
    var year=parseInt(y.slice(0,4));
    var mon=parseInt(y.slice(5,7));
    var day=parseInt(y.slice(8,10));
    var date=new Date();
    var Cyear=date.getFullYear();
    var Cmon=date.getMonth()+1;
    var Cday=date.getDate();
    var ans=0;
    var age=Cyear-year;
    if (Cmon>mon)
    {
        ans=age;
    }
    else if(Cmon<mon)
    {
        ans=age-1;
    }
    else
    {
        if(Cday>=day)
        {
            ans=age;
        }
        else
        {
            ans=age-1;
        }
    }
    document.getElementById("i2").innerHTML="You are "+ans+" years old."
}
}