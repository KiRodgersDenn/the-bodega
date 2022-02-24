import {Link} from "react-router-dom";

function Plant({plant}){
    return(
        <div>
            <img src={plant.image} alt={plant.name}/>
            <Link to = {`/plants/${plant.id}`}/>
            <h2>{plant.name}</h2>
        </div>
    )
}

export default Plant;