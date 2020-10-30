import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import breakpoints from "../../breakpoints";

const Hero: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="hero">
      <div className="icon-container">
        <Icon.WomanAvatar />
      </div>
      <h1 className="title">When They tweet</h1>
      <div className="seperator" />
      <h2 className="sub-text">
        Check your favorite persona tweeting schedule
      </h2>
      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #18bc9c;
        }
        .sub-text {
          color: white;
          font-size: 14px;
          text-align: center;
          margin-bottom: 50px;
        }
        .icon-container {
          max-width: 180px;
          margin-top: 50px;
        }
        .title {
          margin: 20px 0px;
          color: white;
          font-size: 24px;
          font-weight: 700;
        }
        .seperator {
          height: 3px;
          background-color: white;
          width: 130px;
          margin-bottom: 20px;
        }
        @media only screen and (min-width: ${breakpoints.large}px) {
          .icon-container {
            max-width: 380px;
            margin-bottom: 60px;
            margin-top:55px;
          }
          h1.title {
            font-size: 70px;
            margin-bottom:52px;
          }
          .seperator {
            margin-bottom: 52px
          }
          .sub-text {
            font-size: 25px;
            margin-bottom:55px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
