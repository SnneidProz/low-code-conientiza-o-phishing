import React, { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { EducationPage } from './components/EducationPage';
import { UserData, Step } from './types';

export default function App() {
  const [currentStep, setCurrentStep] = useState<Step>(Step.LANDING);
  const [submittedData, setSubmittedData] = useState<UserData | null>(null);
  
  // Initialize click count from localStorage
  const [clickCount, setClickCount] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('proz_phishing_clicks');
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });

  const handleFormSubmit = (data: UserData) => {
    // Increment and save click count (persists only the count, not user data)
    const newCount = clickCount + 1;
    setClickCount(newCount);
    localStorage.setItem('proz_phishing_clicks', newCount.toString());

    setSubmittedData(data);
    setCurrentStep(Step.EDUCATION);
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setCurrentStep(Step.LANDING);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen font-sans antialiased">
      {currentStep === Step.LANDING && (
        <LandingPage onSubmit={handleFormSubmit} />
      )}
      
      {currentStep === Step.EDUCATION && submittedData && (
        <EducationPage 
          data={submittedData} 
          onReset={handleReset} 
          clickCount={clickCount}
        />
      )}
    </div>
  );
}