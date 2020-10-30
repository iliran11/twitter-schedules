import Button from "react-bootstrap/Button";
import Icon from "../Icon/Icon";

interface SocialLinkProps {
  platform: "github" | "twitter";
}
const SocialLink = (props: SocialLinkProps) => (
  <a
    rel="noreferrer"
    target="_blank"
    href={
      props.platform === "github"
        ? "https://github.com/iliran11"
        : "https://twitter.com/LaptopCouch"
    }
  >
    <Button>
      <div className="social-content">
        {props.platform === "github" && <Icon.GithubIcon size={20} />}
        {props.platform === "twitter" && <Icon.TwitterIcon size={20} />}
        <span>{props.platform === "github" ? "Github" : "Twitter"}</span>
      </div>
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
    </Button>
  </a>
);

export default SocialLink;
