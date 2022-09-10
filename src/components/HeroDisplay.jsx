import { useParams } from "react-router-dom";

const HeroDisplay = () => {
    const params = useParams();

    return(
        <fieldset>
            <legend>HeroDisplay</legend>
            <h2>HeroDisplay</h2>
            <h3>Viewing hero ID: {params.id} </h3>
        </fieldset> 
    )
}

export default HeroDisplay;