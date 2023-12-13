import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDS_API } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDS_API);
    const json = await data.json();
    console.log(json);
  };
  useEffect(() => {
    getYoutubeVideos();
  }, []);
  return <div>VideoContainer</div>;
};

export default VideoContainer;
