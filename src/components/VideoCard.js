import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-96 p-2 m-2 ">
      <img
        className="rounded-lg w-96"
        alt={title}
        src={thumbnails.medium.url}
      />
      <div className="p-1">
        <p className="font-semibold">{title}</p>
        <p>{channelTitle}</p>
        <p>{statistics.viewCount / 1000}K views</p>
      </div>
    </div>
  );
};

export default VideoCard;
