import { useNotes, useNotesDispatch } from "../context/NotesContext";

function NoteList({ sortBy, onSort }) {
  const notes = useNotes();

  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    ); // a -b  => a > b ? 1 : -1

  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ); // b -a  => a > b ? -1 : 1

  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div className="">
      <select value={sortBy} onChange={onSort} className="mx-2 rounded">
        <option value="latest">Sort based on latest notes</option>
        <option value="earliest">Sort based on earliest notes</option>
        <option value="completed">Sort based on completed notes</option>
      </select>
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note }) {
  const dispatch = useNotesDispatch();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`${note.completed ? "line-through" : "flex gap-3 mx-3 justify-between"}`}>
      <div className="flex gap-3 justify-between w-full">
        <div className="flex gap-3 ">
          
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <p >
          {new Date(note.createdAt).toLocaleDateString("en-US", options)}
        </p>
        <div >
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            checked={note.completed}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "complete", payload: noteId });
            }}
          />
        </div>
      </div>
        <button onClick={() => dispatch({ type: "delete", payload: note.id })}>
          ❌
        </button>
    </div>
  );
}
