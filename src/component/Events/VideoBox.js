import styled from "styled-components";
import video from "../../assets/img/videoplaceholder.png";
import play from "../../assets/svg/play.svg";
import search from "../../assets/svg/searchtube.svg";
import profile from "../../assets/img/profilepic.png";
import document from "../../assets/svg/document.svg";

const VideoBox = () => {
  return (
    <Wrapper>
      <div className="box">
        <span className="image-box">
          <img className="image" src={video} alt="video"></img>
          <img className="play" src={play} alt="play"></img>
          <p className="watch">Watch Video</p>
          <img className="search" src={search} alt="search"></img>
        </span>
        <div className="title-box">
          <img src={profile} alt="thumbnail" />
          <div className="text">
            <span>Hosted By</span>
            <p>Thor Odinson</p>
          </div>
        </div>
      </div>
      <div className="details">
        <span className="title">
          <img src={document} alt="document"></img>
          <h4>Event Description</h4>
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tristique
          nunc lectus eget sagittis, risus mi orci. Nulla cursus sociis
          suspendisse eu nunc blandit sed sed. Pellentesque justo elementum in
          pretium nunc eget dolor. Maecenas nisi, ac consequat sodales id.
          Viverra dignissim justo, aliquam, nunc, eget quam accumsan, viverra
          aenean. Leo, turpis quam diam lacus, commodo magna. Varius proin
          aliquet nisi, nisl. Consequat iaculis commodo non aliquam, cursus
          nisi, diam. Volutpat pellentesque faucibus condimentum leo id.
          Ultrices a senectus adipiscing non. Faucibus nec facilisi fusce urna
          sit turpis. Aliquam tincidunt duis enim habitasse euismod gravida
          cursus tempus. At arcu eu vulputate imperdiet. A varius in elementum
          turpis. Sollicitudin nulla enim dignissim ut et.{" "}
        </p>
      </div>
    </Wrapper>
  );
};

export default VideoBox;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .box {
    .image-box {
      position: relative;
      /* border: 20px solid black; */
      .image {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url(AGBQZF5wuY.jpg);
        border-radius: 20px;
      }
      .play {
        position: absolute;
        top: 70%;
        left: 4%;
      }
      .watch {
        position: absolute;
        top: 75%;
        left: 15%;
        color: white;
      }
      .search {
        position: absolute;
        top: 70%;
        left: 60%;
      }
    }

    .title-box {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-top: 3rem;
      padding: 1rem 0.5rem;
      background: #ffffff;
      /* Shadows */

      box-shadow: 0px 4px 40px rgba(1, 120, 154, 0.08);
      border-radius: 20px;

      span {
        color: rgba(1, 120, 154, 1);
      }
    }
  }

  .details {
    background: #ffffff;
    /* Shadows */

    box-shadow: 0px 4px 40px rgba(1, 120, 154, 0.08);
    border-radius: 20px;
    padding: 1rem;
    .title {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 5rem;
    }
  }
`;
