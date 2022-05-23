import axios from "axios";
import { useEffect, useState } from "react"
import "./RestaurantDetails.css"
export const RestaurantDetails = ({arr,deleteres,sortArr,filterArr})=>{

    // const [arr,setArr] = useState([]);

    // useEffect(()=>{
    //     fetchData();
    // },[]);

    // const fetchData = async()=>{
    //     const data = await axios.get("http://localhost:8080/data")
    //     .then((data)=>data.data)
    //     setArr(data);
    //     console.log(data);
    // }



    return (
        <div className="main">
            <h1>Details of restaurants</h1>
            <div className="sorrtfilt">
                <div className="sort">
                    <h3>sorting</h3>
                    <p>sort bye price</p>
                    <select name="price" onChange={(e)=>{sortArr(e.target.value , e.target.name)}}>
                       <option >select</option>
                       <option  value='asc'>acending</option>
                       <option  value='desc'>decending</option>
                    </select>

                    <p>sort bye review</p>
                    <select name="review" onChange={(e)=>{sortArr(e.target.value , e.target.name)}}>
                       <option>select</option>
                       <option value='asc'>acending</option>
                       <option value='desc'>decending</option>
                    </select>
                </div>
                <div className="filter">
                    <h3>filtring</h3>

                    <p>filter bye location</p>
                    <select name="country" onChange={(e)=>{filterArr(e.target.value , e.target.name)}}>
                       <option >select</option>
                       <option value='india'>india</option>
                       <option value='pakistan'>pakistan</option>
                       <option value='nepal'>nepal</option>
                       <option value='bhootan'>bhootan</option>
                    </select>

                    <p>filter bye review</p>
                    <select name="review" onChange={(e)=>{filterArr(e.target.value , e.target.name)}}>
                       <option >select</option>
                       <option value='1'>1</option>
                       <option value='2'>2</option>
                       <option value='3'>3</option>
                       <option value='4'>4</option>
                       <option value='5'>5</option>
                    </select>
                </div>
            </div>
            {arr.map((e)=>(
                <div key={e.id} className="singleres">
                    <div className="left">
                        <img src={e.image}></img>
                        <button onClick={()=>{deleteres(e)}}>delete</button>
                    </div>
                    <div className="right">
                        <div className="subleft">
                            <h3>Name: {e.name}</h3>
                            <p> categories: {e.category}</p>
                            <h5> Pyment Method are available:</h5>
                            <p>{e.payment.cash ? "cash" : ""}</p>
                            <p>{e.payment.card ? "card" : ""}</p>
                            <p>{e.payment.upi ? "upi" : ""}</p>
                        </div>
                        <div className="subright">                      
                            <p>price for one: {e.price}</p>
                            <p>Country: {e.country}</p>
                            <p>review: {e.review}</p>
                        </div>
                    </div>
                    {/* <ul>
                        <li>{e.payment.cash ? "cash" : ""}</li>
                        <li>{e.payment.card ? "card" : ""}</li>
                        <li>{e.payment.upi ? "upi" : ""}</li>
                    </ul> */}
                </div>         
            ))}
        </div>
    )
}