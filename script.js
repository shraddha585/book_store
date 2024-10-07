const apiUrl = 'http://localhost:3000/book';

// Function to handle form submission (create a new book)
async function create(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const price = document.getElementById('price').value;
    const brief = document.getElementById('brief').value;

    const newBook = {
        title,
        author,
        genre,
        price: Number(price), // Ensure price is a number
        brief
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook),
        });
        
        const result = await response.json();
        if (response.ok) {
            alert('Book created successfully');
            console.log('Created:', result);
        } else {
            alert('Error occurred while creating book');
            console.error('Error:', result);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to edit a book
async function editBook() {
  const bookId = prompt('Enter Book ID to edit:'); // Ask user for Book ID
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const genre = document.getElementById('genre').value;
  const price = document.getElementById('price').value;
  const brief = document.getElementById('brief').value;

  const updatedBook = {
      title,
      author,
      genre,
      price: Number(price),
      brief
  };

  try {
      const response = await fetch(`${apiUrl}/${bookId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedBook),
      });

      const result = await response.json();
      if (response.ok) {
          alert('Book updated successfully');
          console.log('Updated:', result);
      } else {
          alert('Error occurred while updating book');
          console.error('Error:', result);
      }
  } catch (error) {
      console.error('Error:', error);
  }
}


// Function to delete a book
async function del() {
    const bookId = prompt('Enter Book ID to delete:'); // Ask user for Book ID

    try {
        const response = await fetch(`${apiUrl}/${bookId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            alert('Book deleted successfully');
            console.log('Deleted book ID:', bookId);
        } else {
            alert('Error occurred while deleting book');
            console.error('Error:', await response.json());
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
