import "/home/gambi/P4/Gari-Zetu-Evolution/front-end/src/index.css";
import video1 from "front-end/src/assets/video1.mp4";
import image1 from "front-end/src/assets/image1.jpg";
import image2 from "front-end/src/assets/image2.jpg";
import image3 from "front-end/src/assets/image3.jpg";

const Background = (playStatus, heroCount) => {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } 
  else if (heroCount === 0)
  {
    return <img src={image1} className="background" alt="image1" />;
}
else if (heroCount === 1)
{
  return <img src={image2} className="background" alt="image1" />;
}
else if (heroCount === 2)
{
  return <img src={image3} className="background" alt="image1" />;
}
;
}

export default Background;
