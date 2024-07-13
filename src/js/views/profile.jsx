import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCharacterById } from "../store/appContext";
import { Card, Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await getCharacterById(id);
        setCharacter(res);
        console.log(res);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };
    console.log(id);
    console.log(character);
    fetchCharacter();
  }, [id]);

  return (
    <>
      {character ? (
        <Container className="d-flex justify-content-center align-items-center">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Card className="shadow">
                <Row noGutters>
                  <Col xs={12} md={6} className="text-center">
                    <Card.Img
                      variant="top"
                      src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                      alt={character.name}
                      className="img-fluid"
                      style={{ width: "60%", height: "auto" }} // Ajuste del tamaño de la imagen
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Card.Body>
                      <Card.Title className="text-center mb-4">
                        {character.name}
                      </Card.Title>
                      <Card.Text>
                        <p>
                          Lorem ipsum dolor sit amet. Est omnis maxime ex quia
                          ullam ut provident dolores ab dolorum accusantium eum
                          aliquid reiciendis vel odio ratione At aperiam
                          quisquam! Aut adipisci magni et velit ullam sed
                          similique vitae ut omnis minus. Ut dignissimos
                          voluptatibus ut similique porro in voluptatem
                          exercitationem ea velit asperiores. Sit modi
                          repellendus est rerum blanditiis ut voluptatem nulla
                          et culpa nostrum sed labore reprehenderit.
                        </p>
                      </Card.Text>
                      <Row className="mt-3">
                        <Col xs={12}>
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
                        </Col>
                      </Row>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div>Loading...</div>
        </div>
      )}
    </>
  );
};

export default Profile;
