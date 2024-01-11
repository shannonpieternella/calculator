'use client';  // pragma to mark the module as client code
// pages/Result.jsx
import React from 'react';
import Layout from '../components/Layout';
import ResultContent from '../components/ResultContent';
import ResultContenTwo from '../components/ResultContentTwo';

const Result = ({ answers, currentQuestion }) => {
  return (
    <Layout>
      {answers[14] == 2024 &&
     <ResultContent answers={answers} currentQuestion={currentQuestion} />}
     
      {answers[14] == 2023 &&
     <ResultContenTwo answers={answers} currentQuestion={currentQuestion} />}


    </Layout>
  );
};

export default Result;
