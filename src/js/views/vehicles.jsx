import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../../styles/vehicles.css";
import { Context } from "../store/appContext";

const Vehicles = () => {
  const { id } = useParams();
  const { actions } = useContext(Context);
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        setLoading(true); 
        const data = await actions.getVehicleById(id);
        setVehicle(data);
      } catch (error) {
        console.error("Error fetching vehicle:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchVehicle();
  }, [id, actions]);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : vehicle ? (
        <Container fluid className="full-width-container d-flex justify-content-center align-items-center vh-100">
          <Row className="w-100 no-gutters">
            <Col xs={12}>
              <Card className="shadow-star border-0 mx-auto">
                <Row className="no-gutters">
                  <Col xs={12} md={6} className="p-0">
                    <Card.Img
                      variant="top"
                      src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
                      alt={vehicle.name}
                      className="img-fluid large-card-img"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Card.Body>
                      <Card.Title className="text-title text-center mb-4">
                        {vehicle.name}
                      </Card.Title>
                      <Card.Text>
                        <p>
                          {vehicle.description || "Lorem ipsum dolor sit amet..."}
                        </p>
                      </Card.Text>
                      <div className="details-card">
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
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <p>Vehicle not found</p>
        </div>
      )}
    </>
  );
};

export default Vehicles;
