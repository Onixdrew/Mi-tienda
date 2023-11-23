import React from "react";
import ReactPlayer from "react-player";
import '../App.css'

const VideoPlay = () => {

  return (
    <div className='player-wrapper carvideo'>
      <ReactPlayer url={require('../videos/y2mate.com - MEGA BLACK FRIDAY_1080p.mp4')}
      muted
      loop
      width='100%'
      height='500px'
      playing
      />
    </div>
  );
};

export default VideoPlay;
