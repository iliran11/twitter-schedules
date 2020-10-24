import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Github from "./github-logo.svg";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">When they tweet?</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Button>
          <div className="social-content">
            <div className="icon-container">
              <Github />
            </div>
            Twitter
          </div>
        </Button>
      </Navbar.Collapse>
      <style jsx>
        {`
          .social-content {
            display: flex;
            align-items: center;
          }
          .icon-container {
            height: 20px;
            width: 20px;
            display: flex;
          }
          .icon-container :global(svg) {
            width: 100%;
            height: 100%;
          }
          .icon-home3:before {
            content: "\e902";
          }
        `}
      </style>
    </Navbar>
  );
};

export default Header;
