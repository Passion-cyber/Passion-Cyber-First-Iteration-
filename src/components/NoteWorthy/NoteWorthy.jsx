import { NoteWorthyCard, Heading, notes } from "../../components";
import "./NoteWorthy.css";
const NoteWorthy = () => {
  return (
    <section id="Noteworthy" className="noteworthy-container">
      <Heading number={"03"} text={"Selected Projects "} />
      <div className="noteworthy-inner">
        {notes.map((note, index) => (
          <NoteWorthyCard key={index} note={note} />
        ))}
      </div>
    </section>
  );
};

export default NoteWorthy;
