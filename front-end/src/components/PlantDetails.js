import { useState , useEffect } from "react";
import {Link ,  useNavigate , useParams} from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function PlantDetails(){
    const [plant, setPlant] = useState({});
    let {index} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get(API + '/plants/' + index)
        .then((res)=>{
            setPlant(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    }, [index]);

    const handleDelete=()=>{
        axios.delete(API + '/plants/' + index)
        .then((res)=>{
            navigate('/plants')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div>
            <div>
                <h3>{plant.name}</h3>
                <img src={plant.image} alt={plant.name}/>
                <h5></h5>
                <h5></h5>
                <h5></h5>
            </div>

            <div className='navigation'>
                <div>
                    <Link to={'/plants'}>
                        <button>BACK</button>
                    </Link>
                </div>

                <div>
                    <Link to={`/plants/${plant.id}/edit`}>
                        <button>EDIT</button>
                    </Link>
                </div>

                <div>
                    <button onClick={handleDelete}>DELETE</button>
                </div>
            </div>
        </div>
    )
}
export default PlantDetails;