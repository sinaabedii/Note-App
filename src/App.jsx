import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NotesContext";
import "./styles/App.css";

function App() {
  const [sortBy, setSortBy] = useState("latest");
  return (
    <NotesProvider>
      <div className="w-full h-screen mx-auto bg-neutral-800">
        <NoteHeader />
        <div className="mx-auto">
          <AddNewNote />
          <div className="w-full mx-auto bg-red-200 ">
            <NoteStatus />
            <NoteList
              sortBy={sortBy}
              onSort={(e) => setSortBy(e.target.value)}
            />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
