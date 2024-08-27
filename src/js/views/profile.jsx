import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../../styles/characters.css";

const Profile = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  return (

    <>
      {character ? (
        <Container fluid className="full-width-container d-flex justify-content-center align-items-center">
          <Row className="w-100">
            <Col xs={12}>
              <Card className="shadow-star border-0 mx-auto">
                <Row noGutters>
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
                          {character.description || "Lorem ipsum dolor sit amet. Est omnis maxime ex quia ullam ut provident dolores ab dolorum accusantium eum aliquid reiciendis vel odio ratione At aperiam quisquam! Aut adipisci magni et velit ullam sed similique vitae ut omnis minus. Ut dignissimos voluptatibus ut similique porro in voluptatem exercitationem ea velit asperiores. Sit modi repellendus est rerum blanditiis ut voluptatem nulla et culpa nostrum sed labore reprehenderit."}
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
