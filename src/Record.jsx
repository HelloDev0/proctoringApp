import React, { useRef } from 'react'
import VideoRecorder from "react-video-recorder";
import './App.css'

const Record = () => {

  const webcamRef = useRef(null)
  const videoConstraints = {
    //     width: 400,
    //     height: 400,
    // facingMode: "user"
  };
  return (
    <>
      <h4 className='text-center py-3'>Please record your video</h4>

      <div className='row m-5'>
        <div className="col-md-8 ">
          <VideoRecorder
          className="videoPage"
            style={{ width: "80%", maxWidth: 480, height: 800 }}
            isFlipped={false}
            // isOnInitially
            countdownTime={0}
            mimeType="video/mp4;codecs=vp8,opus"
            constraints={{
              audio: true,
              video: {
                width: { exact: 480, ideal: 480 },
                height: { exact: 640, ideal: 640 },
                aspectRatio: { exact: 0.7500000001, ideal: 0.7500000001 },
                resizeMode: "crop-and-scale"
              }
            }}
            onRecordingComplete={(videoBlob) => {
              // Do something with the video...
              console.log("videoBlob", videoBlob);
              // push("/videoPreview", { videoBlob });
            }}

          ></VideoRecorder>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <button className='btn btn-primary mt-20'>clear</button>
        </div>



      </div>
    </>
  )
}

export default Record
