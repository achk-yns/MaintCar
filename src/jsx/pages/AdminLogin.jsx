import { Col, Container, Row } from "react-bootstrap";
import "./AdminLogin.css";
import bg from "./3333.png";
import { Button } from "@mui/material";
import arrow from "./backArrow.png"
function AdminLogin() {
  return (
    <div id="page">
      <Container className="pt-5">
        <Row id="sections">
          <Col sm="5" className="d-flex align-items-center">
            <div className="container">
              <h1 > Administrateur </h1>
              <p>Bienvenue dans votre espace administrateur</p>


              <div className="d-flex justify-content-between ">
                <div>
                    <Button size="small" variant="outlined" id="btn_admin">
                se connecter
                </Button> 
                </div>
                <span>/</span>
                <div>
                    <p>Aller au tableau de bord</p>
                    <div className="text-end">
                        <img src={arrow} alt="#" id="arrow"/>
                    </div>
                </div>
              </div>

              
            </div>
          </Col>
          <Col className="m-3">
            <img src={bg} id="bg-col" alt="#" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminLogin;
