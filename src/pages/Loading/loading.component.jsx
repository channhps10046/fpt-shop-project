import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./loading.styles.scss";

export default function Loading() {
  return (
    <div className='loading'>
      <ClipLoader size={60} color="olive"/>
    </div>
  )
}
