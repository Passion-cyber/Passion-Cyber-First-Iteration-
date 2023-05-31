import React from "react";
import NoteWorthyCards from "./NoteWorthyCards";
import "../stylesheets/NoteWorthy.css";
import Heading from "./Heading";

const NoteWorthy = () => {
  return (
    <section className="noteworthy-container">
      <Heading number={"04"} text={"Other Noteworthy Projects "} />
      <div className="noteworthy-inner">
        <NoteWorthyCards />
        <NoteWorthyCards />
        <NoteWorthyCards />
        <NoteWorthyCards />
        <NoteWorthyCards />
        <NoteWorthyCards />
        <NoteWorthyCards />
      </div>
    </section>
  );
};

export default NoteWorthy;
