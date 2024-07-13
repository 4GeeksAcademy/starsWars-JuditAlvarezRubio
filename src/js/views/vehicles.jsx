import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getVehicles } from "../store/appContext";
import { Card, Container, Row, Col } from 'react-bootstrap';

const Vehicles = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const res = await getVehicles(id);
        setVehicle(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching vehicle:', error);
      }
    };
    fetchVehicle();
  }, [id]);

  return (
    <>
    {vehicle?
       <Container className="d-flex justify-content-center align-items-center vh-100">
       <Row className="justify-content-center">
         <Col xs={12} md={8} lg={6}>
           <Card className="shadow-lg p-3 mb-5 bg-white rounded">
             <Card.Img
               variant="top"
               src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
               alt={vehicle.name}
               className="img-fluid"
               style={{ width: '60%', height: 'auto' }} // Tamaño ajustado
             />
             <Card.Body>
               <Card.Title className="text-center mb-4">{vehicle.name}</Card.Title>
               <Card.Text>
                 <p>
                   Lorem ipsum dolor sit amet. Est omnis maxime ex quia ullam ut provident
                   dolores ab dolorum accusantium eum aliquid reiciendis vel odio ratione 
                   At aperiam quisquam! Aut adipisci magni et velit ullam sed similique vitae
                   ut omnis minus. Ut dignissimos voluptatibus ut similique porro in 
                   voluptatem exercitationem ea velit asperiores. Sit modi repellendus est
                   rerum blanditiis ut voluptatem nulla et culpa nostrum sed labore
                   reprehenderit.
                 </p>
               </Card.Text>
               <Row className="mt-3">
                 <Col xs={12}>
                   <Card.Text className="text-end">
                     <strong>Model:</strong> {vehicle.model}
                   </Card.Text>
                   <Card.Text className="text-end">
                     <strong>Manufacturer:</strong> {vehicle.manufacturer}
                   </Card.Text>
                   <Card.Text className="text-end">
                     <strong>Length:</strong> {vehicle.length}
                   </Card.Text>
                   <Card.Text className="text-end">
                     <strong>Passengers:</strong> {vehicle.passengers}
                   </Card.Text>
                 </Col>
               </Row>
             </Card.Body>
           </Card>
         </Col>
       </Row>
     </Container>
 
    :
    <div>loading</div>}
    </>
  );
};

export default Vehicles;
