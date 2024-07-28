import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Pagination from "./Pagination";
import "./App.css";  // Import global styles if needed

const generateNotes = () => {
  const notes = [
    { title: "Meeting with Alice", content: "Discuss the new marketing strategies." },
    { title: "Buy Groceries", content: "Purchase fruits, vegetables, and snacks." },
    { title: "Morning Run", content: "Go for a 5km run in the park." },
    { title: "Read a Novel", content: "Start reading 'To Kill a Mockingbird' by Harper Lee." },
    { title: "Call John", content: "Catch up with John and discuss the upcoming trip." },
    { title: "Submit Assignment", content: "Submit the research paper by Wednesday." },
    { title: "Doctor Appointment", content: "Visit Dr. Brown for a routine checkup at 11 AM." },
    { title: "Lunch with Sarah", content: "Meet Sarah at the new cafe at noon." },
    { title: "Learn Redux", content: "Complete the Redux tutorial on the official website." },
    { title: "Plan Road Trip", content: "Plan the route and itinerary for the road trip." },
    { title: "Team Meeting", content: "Discuss the project updates with the team." },
    { title: "Car Service", content: "Take the car for an oil change and maintenance." },
    { title: "Yoga Session", content: "Attend the evening yoga session." },
    { title: "Check Emails", content: "Respond to all pending emails." },
    { title: "Buy Birthday Gift", content: "Get a gift for Emma's birthday." },
    { title: "Watch Movie", content: "Watch the latest sci-fi movie." },
    { title: "Guitar Practice", content: "Practice the new song on the guitar." },
    { title: "Plant Care", content: "Water the plants and check for pests." },
    { title: "Write Blog Post", content: "Write a new post for the travel blog." },
    { title: "Organize Files", content: "Sort and organize all digital files." },
    { title: "Meditation", content: "Spend 20 minutes meditating." },
    { title: "Tech Conference", content: "Attend the virtual tech conference." },
    { title: "Bake Cookies", content: "Bake a batch of chocolate chip cookies." },
    { title: "Volunteer Work", content: "Participate in the community cleanup drive." },
    { title: "Financial Planning", content: "Review and update the financial plan." },
    { title: "Visit Library", content: "Return the borrowed books to the library." },
    { title: "Gardening", content: "Plant new flowers in the garden." },
    { title: "Study Session", content: "Review notes and study for the upcoming exam." },
    { title: "Photography", content: "Go out and take landscape photos." },
    { title: "Call Grandma", content: "Check in with grandma and chat for a while." },
    { title: "Update Resume", content: "Update the resume with recent experience." },
    { title: "Clean Garage", content: "Organize and clean the garage." },
    { title: "Networking Event", content: "Attend the online networking event." },
    { title: "Exercise Routine", content: "Follow the new exercise routine at home." }
  ];
  return notes;
};

function App() {
  const initialNotes = generateNotes();
  const [notes, setNotes] = useState(initialNotes);
  const [currentPage, setCurrentPage] = useState(1);
  const [notesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current notes
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((noteItem, index) => index !== id));
  }

  function editNote(id, newTitle, newContent) {
    setNotes((prevNotes) =>
      prevNotes.map((noteItem, index) =>
        index === id ? { title: newTitle, content: newContent } : noteItem
      )
    );
  }

  return (
    <div className="app-container">
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <CreateArea onAdd={addNote} />
      <div className="notes-container">
        {currentNotes.map((noteItem, index) => (
          <Note
            key={indexOfFirstNote + index}
            id={indexOfFirstNote + index}
            title={noteItem.title}
            content={noteItem.content}
            timestamp={noteItem.timestamp}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        ))}
      </div>
      <Pagination
        notesPerPage={notesPerPage}
        totalNotes={filteredNotes.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
}

export default App;