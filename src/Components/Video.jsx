import React from 'react'

const Video = () => {
    return (
      <video controls width="100%">
        <source src="../images/2.mp4" type="video/mp4"/>
        Sorry, your browser doesn't support videos.
      </video>
    );
  };
  
  export default Video;
