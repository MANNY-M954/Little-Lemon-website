import React from 'react';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Little Lemon Restaurant</h1>
      </header>
      <main>
        <h2>Book a Table</h2>
        <BookingForm />
      </main>
    </div>
  );
}

export default App;
