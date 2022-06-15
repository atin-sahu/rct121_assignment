import { useState,useEffect } from "react"
import axios from "axios";
import { RestaurantDetails } from "./RestaurantDetails";
import "./CreateRestaurant.css"

export const CreateRestaurant = ()=>{
    const [name,setName] = useState("");
    const [review,setReview] = useState(0);
    const [price,setPrice] = useState(0);
    const [country,setCountry] = useState("");
    const [category,setCategory] = useState("");
    const [image,setImage] = useState("");
    const [payment, setPayment] = useState({
        card:false,
        cash:false,
        upi:false
    })

    const [arr,setArr] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await axios.get("http://localhost:8080/data")
        .then((data)=>data.data)
        setArr(data);
        console.log(data);
    }

    const submitForm = async (event) => {
        event.preventDefault();

        const restaurant = {
			name,
            review,
            price,
            country,
			category: category.split(','),
			image,
            payment
		};

        // console.log("atin");
        console.log(restaurant);
        await axios.post("http://localhost:8080/data",restaurant );
        fetchData()
    }

    const deleteres = async (e)=>{
        await axios.delete(`http://localhost:8080/data/${e}`)
        .then(()=>fetchData());
    }

    const sortArr = async (value,name)=>{

        const data = await axios.get(`http://localhost:8080/data?_sort=${name}&_order=${value}`)
        .then((data)=>(data.data));
        setArr(data);
    }

    const filterArr = async (value,name)=>{

        console.log(value,name);

        const data = await axios.get(`http://localhost:8080/data?${name}=${value}`)
        .then((data)=>(data.data));
        setArr(data);
    }


    return (
        <div>
            <div className="">
                <div className="container">
                    <form >
                        <h1>Restaurants</h1>
                        <input 
                            placeholder="enter restaurants name"
                            onChange={(e) => setName(e.target.value)} >
                        </input>
                        <input 
                            placeholder="enter review"
                            onChange={(e) => setReview(e.target.value)} >
                        </input>
                        <input 
                            placeholder="enter price for one"
                            onChange={(e) => setPrice(e.target.value)} >
                        </input>
                        <input 
                            placeholder="enter Country"
                            onChange={(e) => setCountry(e.target.value)} >
                        </input>
                        <input 
                            placeholder="enter , seprated categories"
                            onChange={(e) => setCategory(e.target.value)} >
                        </input>
                        <input 
                            placeholder="enter restaurants image"
                            onChange={(e) => setImage(e.target.value)} >
                        </input>
                        <h3>payment method</h3>
                        <div className="paymentbox">
                            <label htmlFor="card">card</label>
                            <input 
                                type='checkbox'
                                onChange={(e) => setPayment({...payment, card:e.target.checked})} >
                            </input>
                            <label htmlFor="card">cash</label>
                            <input 
                                type='checkbox'
                                onChange={(e) => setPayment({...payment, cash:e.target.checked})} >
                            </input>
                            <label htmlFor="card">upi</label>
                            <input 
                                type='checkbox'
                                onChange={(e) => setPayment({...payment, upi:e.target.checked})} >
                            </input>
                        </div>
                        <div>
                            <button className="submit" type="submit" onClick={(e)=>{submitForm(e)}}>Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div>
                <RestaurantDetails arr={arr} deleteres={deleteres} sortArr={sortArr} filterArr={filterArr} ></RestaurantDetails>
            </div>
        </div>
    )
}