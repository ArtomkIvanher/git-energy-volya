import "./CompContent.css";
import redVideo from "../../video/volya-red-video.mp4";
import yellowVideo from "../../video/volya-yellow-video.mp4";
import greenVideo from "../../video/volya-green-video.mp4";
import pinkVideo from "../../video/volya-pink-video.mp4";

export default function CompContentVideo({ children }) {
  const video = { redVideo, greenVideo, yellowVideo, pinkVideo };

  return (
    <video
      autoPlay
      muted
      loop
      className="bg__video"
      src={video[children + "Video"]}
    ></video>
  );
}
