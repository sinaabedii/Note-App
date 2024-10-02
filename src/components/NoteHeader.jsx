import { BiSolidNotepad } from "react-icons/bi";
import { useNotes } from "../context/NotesContext";

function NoteHeader() {
  const notes = useNotes();
  return (
    <div className="bg-red-200 px-2 py-3">
      <span className="flex justify-between">
        <h1 className="font-semibold text-xl">Note App</h1>
        <span className="text-center text-zinc-800 rounded-lg p-1 relative">
          <BiSolidNotepad className="w-7 h-7" />
          {!!notes.length && (
            <span className="text-sm w-5 h-5 bg-white border font-bold text-black rounded-full absolute -top-2 -right-1">
              {notes.length}
            </span>
          )}
        </span>
      </span>
    </div>
  );
}

export default NoteHeader;
