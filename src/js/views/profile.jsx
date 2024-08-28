import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../../styles/characters.css";
import { Context } from "../store/appContext"; 

const Profile = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await actions.getCharacterById(id);
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter();
  }, [id, actions]);

  return (
    <>
      {character ? (
        <Container fluid className="full-width-container d-flex justify-content-center align-items-center">
          <Row className="w-100 no-gutters"> 
            <Col xs={12}>
              <Card className="shadow-star border-0 mx-auto">
                <Row className="no-gutters"> 
                  <Col xs={12} md={6} className="p-0">
                    <Card.Img
                      variant="top"
                      src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                      alt={character.name}
                      className="img-fluid large-card-img"
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Card.Body>
                      <Card.Title className="text-title text-center mb-4">
                        {character.name}
                      </Card.Title>
                      <Card.Text>
                        <p>
                          {character.description || "Lorem ipsum dolor sit amet..."}
                        </p>
                      </Card.Text>
                      <div className="details-card">
                        <Card.Text className="text-end">
                          <strong>Height:</strong> {character.height} cm
                        </Card.Text>
                        <Card.Text className="text-end">
                          <strong>Gender:</strong> {character.gender}
                        </Card.Text>
                        <Card.Text className="text-end">
                          <strong>Hair Color:</strong> {character.hair_color}
                        </Card.Text>
                        <Card.Text className="text-end">
                          <strong>Skin Color:</strong> {character.skin_color}
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
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
