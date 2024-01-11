// Importeer de nodige modules
import React, { useState, useEffect } from 'react';
import { useGlobalState } from '../contexts/GlobalStateContext';
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from '@/pages/ui/card';
import { Input } from '@/pages/ui/input';
import { Button } from '@/pages/ui/button';
import Result from '@/pages/Result';

// Definieer de vragen array1
const questionsData = [
  { id: 0, question: 'Wat is je totale vermogen in cryptovaluta? (Het balans van al je cryptocurrency wallets) op 1 Januari.' },
  { id: 1, question: 'Heb je beleggingen aandelen of obligaties?' },
  { id: 2, question: 'Wat is de totale vermogen van je beleggingen, aandelen en obligaties (leningen die worden uitgegeven door bedrijven of overheden) op 1 januari.' },
  { id: 3, question: 'Heb je onroerend goed?' },
  { id: 4, question: 'Wat is de waarde van je onroerend goed, woning voor studerend kind, verhuurde woning(en) op 1 Januari?' },
  { id: 5, question: 'Wat is de waarde van je contant geld en overige bezittingen (waar o.a auto\'s en luxe artikelen) op 1 januari?' },
  { id: 6, question: 'Heb je lopende prive leningen uitgegeven ?' },
  { id: 7, question: 'Wat is de saldo van je uitgeleend geld, (familiebank) en andere vorderingen op 1 januari?' },
  { id: 8, question: 'Hoeveel banktegoeden heb je in bezit? (Hoeveel geld staat er op je betaalrekening) op 1 Januari. (Alleen als je niet in het rood staat).' },
  { id: 9, question: 'Heb je spaargeld op een spaarrekening?' },
  { id: 10, question: 'Hoeveel spaargeld heb je in bezit? (Hoeveel geld staat er op je spaarrekeningen) op 1 januari.' },
  { id: 11, question: 'Heb je schulden?' },
  { id: 12, question: 'Wat is het totaal bedrag van al je lopende schulden? (Zoals geleend geld, schuldeisers en box 3 hypotheken, dus niet de eigen woning hypotheek in box 1) op 1 Januari.' },
  { id: 13, question: 'Heeft u een fiscaal partner?' },
  { id: 14, question: 'Om welk belastingjaar gaat het?' },
  
];

// Component definitie
export default function Formone() {
  // Initialiseer de nodige hooks en states
  const { state, dispatch } = useGlobalState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedYear, setSelectedYear] = useState('');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setAnswers((prevAnswers) => ({ ...prevAnswers, [currentQuestion]: event.target.value }))
  };

  // Handel input veranderingen af en update antwoorden
  const handleInputChange = (e) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [currentQuestion]: e.target.value }));
  };

  // Handel ja/nee knop klik af
  const handleYesNoButtonClick = (value) => {
    // Sla het antwoord op voor de huidige vraag
    // dispatch({
    //   type: 'SAVE_ANSWER_FORM_ONE',
    //   payload: { questionId: currentQuestion + 1, answer: value },
    // });

    // Als het antwoord "ja" is, ga naar de volgende vraag met input
    if (value === 'ja') {
      setAnswers((prevAnswers) => ({ ...prevAnswers, [currentQuestion]: "Ja" }));
      setCurrentQuestion((prev) => prev + 1);
      
    } else {
      // Als het antwoord "nee" is en geen 12, zet de waarde op 0 en ga naar de volgende vraag
      if(currentQuestionData.id != 12 ){
      
        setAnswers((prevAnswers) => ({ ...prevAnswers, [currentQuestion]: 0 }));
        setAnswers((prevAnswers) => ({ ...prevAnswers, [currentQuestion+1]: 0 }))

      }
      if(currentQuestionData.id != 13 ){
        setCurrentQuestion((prev) => prev + 2);

      }else{

        setCurrentQuestion((prev) => prev + 1);
      }
      
     
      
    }
  };

  useEffect(() => {
    // Laad opgeslagen antwoorden wanneer de component mount
    setAnswers(state.savedAnswers || {});
  }, []);

  // Haal de huidige vraag op
  const currentQuestionData = questionsData[currentQuestion];

  // Example: Retrieving answers for specific questions
  const answerForQuestion0 = answers[0];
  const answerForQuestion1 = answers[1];
  const answerForQuestion2 = answers[2];
  const answerForQuestion3 = answers[3];
  const answerForQuestion4 = answers[4];
  const answerForQuestion5 = answers[5];
  const answerForQuestion6 = answers[6];
  const answerForQuestion7 = answers[7];
  const answerForQuestion8 = answers[8];
  const answerForQuestion9 = answers[9];
  const answerForQuestion10 = answers[10];
  const answerForQuestion11 = answers[11];
  const answerForQuestion12 = answers[12];
  const answerForQuestion13 = answers[13];
  const answerForQuestion14 = answers[14];
  const answerForQuestion15 = answers[15];

  // ... and so on

  //You can then use these answers as needed, for example, log them to the console
  console.log('Answer for Question 0:', answerForQuestion0);
  console.log('Answer for Question 1:', answerForQuestion1);
  console.log('Answer for Question 2:', answerForQuestion2);
  console.log('Answer for Question 3:', answerForQuestion3);
  console.log('Answer for Question 4:', answerForQuestion4);
  console.log('Answer for Question 5:', answerForQuestion5);
  console.log('Answer for Question 6:', answerForQuestion6);
  console.log('Answer for Question 7:', answerForQuestion7);
  console.log('Answer for Question 8:', answerForQuestion8);
  console.log('Answer for Question 9:', answerForQuestion9);
  console.log('Answer for Question 10:', answerForQuestion10);
  console.log('Answer for Question 11:', answerForQuestion11);
  console.log('Answer for Question 12:', answerForQuestion12);
  console.log('Answer for Question 13:', answerForQuestion13);
  console.log('Answer for Question 14:', answerForQuestion14);
  console.log('Answer for Question 15:', answerForQuestion15);
  

  console.log("Currentquestion nr " + currentQuestion);


  // Assume this is within a component or function where you want to retrieve the answers
  const answerForCurrentQuestion = answers[currentQuestion];

  // You can then use this answer as needed
  console.log('Answer for Current Question:', answerForCurrentQuestion);

  // Return de JSX voor de component //ALleen currentquestion log maken en id nummer checken per klik en daaorop condition wanneer Result page komt te staan.
  return (
   
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-2 sm:px-4 lg:px-6">
      {currentQuestion < 15 && 
      <Card className="w-full max-w-lg mx-auto">
      
        <CardContent className="flex flex-col items-center">
          {currentQuestionData.id === 1 || currentQuestionData.id === 3 || currentQuestionData.id === 6 || currentQuestionData.id === 9 || currentQuestionData.id === 11 || currentQuestionData.id === 13 ? (
            // Als het een ja/nee vraag is, toon de ja/nee knopjes
            
            <div>
                <CardHeader className="text-center">
        <CardTitle>{currentQuestionData.question}</CardTitle>
        <Button onClick={() => handleYesNoButtonClick('ja')}>Ja</Button>
              <Button onClick={() => handleYesNoButtonClick('nee')}>Nee</Button>

        </CardHeader>
              
            </div>
          ) : (
            // Als het een input vraag is, toon het invoerveld
            
            <CardFooter className="flex flex-col items-center">
                  <CardHeader className="text-center">
        <CardTitle>{currentQuestionData.question}</CardTitle>


        </CardHeader>
        {currentQuestionData.id != 14 ? (
          <CardFooter className="flex flex-col items-center">
            <Input
              className="text-center"
              id="amount"
              min="0"
              placeholder="Voer het bedrag in euros in"
              step="0.01"
              type="number"
              value={answerForCurrentQuestion || ''}
              onChange={handleInputChange}
            />
            <Button onClick={() => setCurrentQuestion((prev) => prev + 1)}>Volgende</Button>
            </CardFooter>
            ) : (

              <div>
              <label htmlFor="yearDropdown">Select a Year:</label>
              <select id="yearDropdown" value={selectedYear} onChange={handleYearChange}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
        
              <Button onClick={() => setCurrentQuestion((prev) => prev + 1)}>Volgende</Button>
            </div>

      

            )}
          
            </CardFooter>
          )}
        </CardContent>
        
      </Card>
}

{currentQuestion >= 15 && <Result answers={answers} currentQuestion={currentQuestion} />}
    </div>
  );
}
