import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import SocialLink from "./SocialLink";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>When they tweet?</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <SocialLink platform="github" />
        <SocialLink platform="twitter" />
      </Navbar.Collapse>
      <style jsx>
        {`
          .social-content {
            display: flex;
            align-items: center;
          }
          .social-content span {
            margin-left: 10px;s
          }
        `}
      </style>
    </Navbar>
  );
};

export default Header;
