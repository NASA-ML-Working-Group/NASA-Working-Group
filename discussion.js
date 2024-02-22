// Get the color picker element
const colorPicker = document.getElementById('colorPicker');

// Listen for color changes
colorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    document.querySelector('.sticky').style.backgroundColor = selectedColor;
});


// Add event listener to close button
document.getElementById("note-1").querySelector(".close").addEventListener("click", () => {
  // Remove the note element from the DOM
  document.getElementById("note-1").remove();
});


// Function to create a new sticky note
function createStickyNote() {
  const noteId = "note-" + Math.random().toString(36).substring(2, 7);
  const noteElement = document.createElement("div");
  noteElement.id = noteId;
  noteElement.classList.add("sticky-note");
  // Add content HTML (p, textarea, etc.)
  // Add buttons for functionalities like close, edit, etc.
  return noteElement;
}

// Add event listener to add note button
const addNoteButton = document.getElementById("add-note");
addNoteButton.addEventListener("click", () => {
  const newNote = createStickyNote();
  const container = document.getElementById("sticky-notes-container");
  container.appendChild(newNote);
});
