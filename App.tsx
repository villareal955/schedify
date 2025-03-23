import React from 'react';
import { Toaster } from 'react-hot-toast';
import { CalendarProvider } from './context/CalendarContext';
import Header from './components/Header';
import Calendar from './components/Calendar';

function App() {
  return (
    <CalendarProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <Header />
        <main className="container mx-auto py-8 px-4">
          <Calendar />
        </main>
        <Toaster position="top-right" />
      </div>
    </CalendarProvider>
  );
}

export default App;