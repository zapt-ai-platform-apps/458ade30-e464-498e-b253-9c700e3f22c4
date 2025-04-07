import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlphabetHome from '@/modules/alphabet/AlphabetHome';
import LetterDetail from '@/modules/alphabet/LetterDetail';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ZaptBadge from '@/components/ZaptBadge';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-purple-50 text-gray-800">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AlphabetHome />} />
            <Route path="/letter/:letter" element={<LetterDetail />} />
          </Routes>
        </main>
        <ZaptBadge />
        <Footer />
      </div>
    </BrowserRouter>
  );
}