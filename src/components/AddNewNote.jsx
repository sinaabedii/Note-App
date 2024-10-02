import { useState } from "react";
import { useNotesDispatch } from "../context/NotesContext";

function AddNewNote() {
  const dispatch = useNotesDispatch();
  const [title, setTtile] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return null;
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "add", payload: newNote });
    setTtile("");
    setDescription("");
  };

  return (
    <div className="bg-red-200 px-2 mx-auto">
      <h2 className="font-semibold mb-2 text-neutral-700">Add New Note</h2>
      <form className="grid gap-2 mx-auto" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTtile(e.target.value)}
          type="text"
          className=" px-2 py-1 rounded-md outline-none focus:ring ring-neutral-300 placeholder:text-neutral-500"
          placeholder="title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className=" px-2 py-1 rounded-md outline-none focus:ring ring-neutral-300 placeholder:text-neutral-500"
          placeholder="description"
        />
        <button
          type="submit"
          className="bg-red-400 mb-3 rounded w-fit px-3 py-1 font-semibold "
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
