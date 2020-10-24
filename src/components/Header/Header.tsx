import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Icon from "../Icon/Icon";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>When they tweet?</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Button>
          <div className="social-content">
            <Icon.GithubIcon size={20} />
            <span>Twitter</span>
          </div>
        </Button>
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
