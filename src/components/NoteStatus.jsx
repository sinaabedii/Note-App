import { useNotes } from "../context/NotesContext";
import Message from "./Message";

function NoteStatus() {
  const notes= useNotes()
  // dervied state :
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const unCompletedNotes = allNotes - completedNotes;

  if (!allNotes)
    return (
      <Message>
        <span className="">
          No Notes has already been added.
        </span>
      </Message>
    );

  return (
    <ul className="mx-4 items-center flex justify-between ">
      <li>
        All : <span>{allNotes}</span>
      </li>
      <li>
        Completed : <span>{completedNotes}</span>
      </li>
      <li>
        Open : <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
