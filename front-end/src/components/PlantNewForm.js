import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function NewPlant(){
    let navigate = useNavigate();
    const[plant,setPlant]= useState({
        name: '',
        price: 0 ,
        botanicalName: '',
        image: ''
    });

    const addPlant =()=>{
        axios.post(`${API}/plants`,plant)
        .then(
            ()=>{
                navigate(`/plants`)
            },
            (error)=>console.log(error)
        )
        .catch((c)=>{console.warn('catch',c)})
    }

    const handleTextChange =(event)=>{
        setPlant({...plant, [event.target.id]: event.target.value})
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        addPlant();
    }

    return(
        <div className='new'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                    <input
                    id='name'
                    value={plant.name}
                    type='text'
                    onChange={handleTextChange}
                    placeholder=''
                />
                
                <label htmlFor='price'>Price:</label>
                    <input
                    id='price'
                    value={plant.price}
                    type='number'
                    onChange={handleTextChange}
                    placeholder=''
                />

                <label htmlFor='botanicalName'></label>
                    <input
                    id='botanicalName'
                    value={plant.botanicalName}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='botanicalName'
                />

                <label htmlFor='image'>Image:</label>
                    <input
                    id='image'
                    value={plant.image}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='http://'
                    pattern='http[s]*://.+'
                />

                <input type = 'submit' />
     
            </form>
        </div>
    )
}

export default NewPlant;