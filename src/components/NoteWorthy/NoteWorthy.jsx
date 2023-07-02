import { NoteWorthyCard, Heading } from "../../components";
import "./NoteWorthy.css";

const NoteWorthy = () => {
  return (
    <section id="Noteworthy" className="noteworthy-container">
      <Heading number={"04"} text={"Other Noteworthy Projects "} />
      <div className="noteworthy-inner">
        <NoteWorthyCard />
        <NoteWorthyCard />
        <NoteWorthyCard />
      </div>
    </section>
  );
};

export default NoteWorthy;
