import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import IndividualPage from './components/pages/IndividualPage';
import HelpPage from './components/pages/HelpPage';

type PageType = 'individual' | 'help';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('individual');

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'individual' ? <IndividualPage /> : <HelpPage />}
      <Footer />
    </div>
  );
};

export default App;