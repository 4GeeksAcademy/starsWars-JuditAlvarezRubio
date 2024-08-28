import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../../styles/planets.css";
import { Context } from "../store/appContext"; 

export const Planets = () => {
  const { id } = useParams();
  const { actions } = useContext(Context);
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        setLoading(true); 
        const data = await actions.getPlanetsById(id);
        setPlanet(data);
      } catch (error) {
        console.error("Error fetching planet:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchPlanet();
  }, [id, actions]);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : planet ? (
        <Container fluid className="full-width-container d-flex justify-content-center align-items-center">
          <Row className="w-100 no-gutters">
            <Col xs={12}>
              <Card className="shadow-star border-0 mx-auto">
                <Row className="no-gutters">
                  <Col xs={12} md={6} className="p-0">
                    <Card.Img
                      variant="top"
                      src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                      alt={planet.name}
                      className="img-fluid large-card-img"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Card.Body>
                      <Card.Title className="text-title text-center mb-4">
                        {planet.name}
                      </Card.Title>
                      <Card.Text>
                        <p>
                          {planet.description || "Lorem ipsum dolor sit amet..."}
                        </p>
                      </Card.Text>
                      <div className="details-card">
                        <Card.Text className="text-end">
                          <strong>Rotation Period:</strong> {planet.rotation_period}
                        </Card.Text>
                        <Card.Text className="text-end">
                          <strong>Orbital Period:</strong> {planet.orbital_period}
                        </Card.Text>
                        <Card.Text className="text-end">
                          <strong>Climate:</strong> {planet.climate}
                        </Card.Text>
                        <Card.Text className="text-end">
                          <strong>Population:</strong> {planet.population}
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
          <p>Planet not found</p>
        </div>
      )}
    </>
  );
};

export default Planets;
