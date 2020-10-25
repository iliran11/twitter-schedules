import Navbar from "react-bootstrap/Navbar";
import SocialLink from "./SocialLink";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  const socialPlatforms: ("github" | "twitter")[] = ["github", "twitter"];
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>When they tweet?</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className="main-content">
            <Row>
              {socialPlatforms.map((platform) => (
                <>
                  <Col sm={12} lg={6}>
                    <div className="mt-lg-0 mt-1 social-link-wrapper">
                      <SocialLink platform={platform} />
                    </div>
                  </Col>
                </>
              ))}
            </Row>
          </div>
        </Navbar.Collapse>
        <style jsx>
          {`
            .main-content {
              margin-left: auto;
            }
            .social-link-wrapper {
              display: flex;
              justify-content: center;
            }
          `}
        </style>
      </Container>
    </Navbar>
  );
};

export default Header;
