import {useState} from "react";

function OrderForm(){
    const[form,setForm]= useState({
        name:"",
        phone:"",
        area:"",
    } );
    
    function handleChange(e){
        const{name, value}=e.target;

        setForm({
            ...form,
            [name]:value,
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(form);
        
        alert("Order Submitted");

        setForm({
            name:"",
            phone: "",
            area:"",
        })
    }

    const valid= /^(?:\+251|0)9\d{8}$/.test(form.phone);

    return(
        <form onSubmit={handleSubmit}>
            <h3>Delivery Info</h3>
            
            <label htmlFor="name">Name</label>
            <input 
            id="name"
            name="name" 
            value={form.name} 
            onChange={handleChange} />


            <label htmlFor="phone">Phone</label>
            <input 
            id="phone"
            name="phone" 
            value={form.phone} 
            onChange={handleChange} />

            <label htmlFor="area">Area</label>
            <input 
            id="area"
            name="area" 
            value={form.area} 
            onChange={handleChange} />

            {form.phone && !valid && (
             <p className="err">Use 09... or +2519...</p>
            )}

            <button type="submit" disabled={!valid}>Pay with Teebirr</button>

        </form>
    )

}

export default OrderForm;