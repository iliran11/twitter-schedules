import Navbar from "react-bootstrap/Navbar";
import SocialLink from "./SocialLink";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import breakpoints from "../../breakpoints";

const Header = () => {
  const socialPlatforms: ("github" | "twitter")[] = ["github", "twitter"];
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand>
          <span className="logo">When they tweet?</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className="main-content">
            <Row>
              {socialPlatforms.map((platform) => (
                <Col sm={12} lg={6} key={platform}>
                  <div className="social-link-wrapper">
                    <SocialLink platform={platform} />
                  </div>
                </Col>
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
            .social-link-wrapper:first-child {
              margin-bottom: 10px;
            }
            .logo {
              font-weight: bold;
            }
            @media only screen and (min-width: ${breakpoints.large}px) {
              .social-link-wrapper:first-child {
                margin-bottom: 10px;
              }
            }
          `}
        </style>
      </Container>
    </Navbar>
  );
};

export default Header;
