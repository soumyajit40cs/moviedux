import React from "react";
import "../styles.css";
import { useParams } from "react-router-dom";

export default function Moviedetails() {
    const { mId } = useParams();
  return (
    <div>
      <h3>Movie Details Page</h3>
    </div>
  );
}
