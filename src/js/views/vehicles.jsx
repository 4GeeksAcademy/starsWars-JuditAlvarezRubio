import { useEffect, useState } from "react";
import { useParams } from "react-router";


const Vehicles = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const res = await getVehicleById(id);
        setVehicle(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching vehicle:', error);
      }
    };
    fetchVehicle();
  }, [id]);

  return (
    <div>
      <h1>{vehicle.name}</h1>
      <p>Model: {vehicle.model}</p>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p>Length: {vehicle.length}</p>
      <p>Passengers: {vehicle.passengers}</p>
      <img
        src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
        alt={vehicle.name}
      />
    </div>
  );
};

export default Vehicles;
