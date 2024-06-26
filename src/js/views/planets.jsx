import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPlanets } from "./api";



export const Planets = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState({}); 

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const res = await getPlanets(id); 
                setPlanet(res.data);
                console.log(res.data);
            } catch (error) {
                console.error('Error fetching planet:', error);
            }
        };
        fetchPlanet();
    }, [id]); 

    return (
        <>
        {planet?
        <div>
            <h1>{planet.name}</h1>
            <p>Rotation period: {planet.rotation_period}</p>
            <p>Orbital Period: {planet.orbital_period}</p>
            <p>Climate: {planet.climate}</p>
            <p>Population: {planet.population}</p>
            <img
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt={planet.name}
            />
        </div>
        :
        <div>loading</div>}
        </>
    );
};

export default Planets; 
