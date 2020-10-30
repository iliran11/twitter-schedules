import Icon from "../Icon/Icon";
import breakpoints from "../../breakpoints";

const Hero: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="hero">
      <div className="icon-container">
        <Icon.WomanAvatar />
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          justify-content: center;
          background-color: #18bc9c;
          padding: 50px 0px;
        }
        .icon-container {
          max-width: 180px;
        }
        @media only screen and (min-width: ${breakpoints.large}px) {
          .icon-container {
            max-width: 380px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
