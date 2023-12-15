import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    getYoutubeVideos();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
