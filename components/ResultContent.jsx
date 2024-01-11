/**
 * v0 by Vercel.
 * @see https://v0.dev/t/biFEBPuGrGn
 */
 import { useEffect, useState } from 'react';
 import Layout from '../app/Layout';
 import { useGlobalState } from '../contexts/GlobalStateContext';
 
 export default function ResultContent({ answers, currentQuestion }) {
    const { state, dispatch } = useGlobalState();
    const [overigeBezittingen, setOverigebezittingen] = useState();
    const [spaar, setSpaar] = useState();
    const [schulden, setSchulden] = useState();
    const [box3vermogen, setBox3vermogen] = useState();
    const [aftrekBareSchulden, setAftrekBareSchulden] = useState();
    const [rendementsgrondslag, setRendementsGrondslag] = useState();
    const [heffingsVrijVermogen, setheffingsVrijVermogen] = useState();
    const [belastInBox3Grondslag, setbelastInBox3Grondslag  ] = useState();
 
  
    const [forfaitairVermogen, setForfaitairVermogen ] = useState();
    const [forfaitairBeleggingen, setForfaitairBeleggingen ] = useState();
    const [forfaitairSchulden, setForfaitairSchulden ] = useState();
    const [forfaitairTotaal, setForfaitairTotaal ] = useState();
    const [rendementsPercentage, setrendementsPercentage ] = useState();
    const [box3Inkomen, setbox3Inkomenn ] = useState();
    const [box3BelastingPercentage, setbox3BelastingPercentage ] = useState(36);
    const [box3Belasting, setbox3Belasting ] = useState();



    useEffect(() => {
      // Voer hier eventueel logica uit voor het bijwerken van de bedragen
      // bijvoorbeeld door een API-aanroep of gebruikersinteractie.
    }, []); // Lege afhankelijkheidslijst betekent dat de useEffect slechts één keer wordt uitgevoerd bij het monteren van het component.
  
    const formatter = new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    });
  
 //   const savedValue = localStorage.getItem('totalCryptoValue');
    useEffect(() => {
      setOverigebezittingen(
        parseFloat(answers[0]) +
        parseFloat(answers[2]) +
        parseFloat(answers[4]) +
        parseFloat(answers[5]) +
        parseFloat(answers[7])
      );

      setSchulden(
        parseFloat(answers[12]) 
     
      );

      setSpaar(
        parseFloat(answers[8]) +
        parseFloat(answers[10]) 
    
      
      );

      if(answers[13] == 'Ja'){
        setheffingsVrijVermogen(114000);
       
      }else{
        setheffingsVrijVermogen(57000);
       
      }
    

     

    }, []);

    useEffect(() => {

      setBox3vermogen(
        parseFloat(overigeBezittingen) +
      parseFloat(spaar) )
    
      }, [box3vermogen, spaar]);
    

useEffect(() => {

  if(answers[13] == 'Ja' && answers[14].toString() == '2024'){
   
    setAftrekBareSchulden(schulden-7400)
  }
  if(answers[13] != 'Ja' && answers[14].toString() == '2024'){
    setAftrekBareSchulden(schulden-3700)
  }

  if(answers[13] == 'Ja' && answers[14].toString() == '2023'){
   
    setAftrekBareSchulden(schulden-6800)
  }
  if(answers[13] != 'Ja' && answers[14].toString() == '2023'){
    setAftrekBareSchulden(schulden-3400)
  }


  }, [schulden, answers[13]], answers[14]);

  useEffect(() => {

 
    setRendementsGrondslag(box3vermogen-aftrekBareSchulden)

  
    }, [box3vermogen, aftrekBareSchulden]);

    useEffect(() => {

 
      setbelastInBox3Grondslag(rendementsgrondslag-heffingsVrijVermogen)
  
    
      }, [rendementsgrondslag, heffingsVrijVermogen]);

  
      useEffect(() => {

 
        setForfaitairVermogen(spaar/100*1.03)
        setForfaitairBeleggingen(overigeBezittingen/100*6.04)
        setForfaitairSchulden(aftrekBareSchulden/100*2.47)
        
      
        }, [belastInBox3Grondslag]);

        useEffect(() => {

 
          setForfaitairTotaal(forfaitairVermogen+forfaitairBeleggingen-forfaitairSchulden)
         
        
          
        
          }, [forfaitairVermogen,forfaitairBeleggingen,forfaitairSchulden]);

          useEffect(() => {

 
            setrendementsPercentage(forfaitairTotaal/rendementsgrondslag*100)
        
          
            
          
            }, [forfaitairTotaal]);

            useEffect(() => {

 
             
              setbox3Inkomenn(belastInBox3Grondslag/100*rendementsPercentage)
            
              
            
              }, [rendementsPercentage]);


            useEffect(() => {

 
             
              setbox3Belasting(box3BelastingPercentage*box3Inkomen/100)
            
              
            
              }, [box3Inkomen]);

        

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h1 className="text-2xl font-semibold mb-6">Box 3 vermogensbelasting berekenen </h1>
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <h2 className="text-lg font-medium mb-2">Resultaten</h2>
        <div className="flex justify-between items-center bg-blue-100 p-2 rounded mb-4">
          <span className="font-medium">Box 3 belasting in {answers[14]} (voorlopig)</span>
          <span className="font-bold text-lg">{formatter.format(box3Belasting)}</span>
        </div>
     
        <div className="bg-gray-100 p-2 rounded mb-4">
          <h3 className="font-medium mb-2">Box 3 inkomsten en belasting – 2024 (voorlopig)</h3>
          <div className="flex justify-between mb-1">
            <span>Box 3 inkomsten ²</span>
            <span>{formatter.format(box3Inkomen)}</span>
          </div>
          <div className="flex justify-between">
            <span>Box 3 belasting</span>
            <span>{formatter.format(box3BelastingPercentage)}% × {formatter.format(box3Inkomen)} =</span>
            <span>{formatter.format(box3Belasting)}</span>
          </div>
        </div>
        <div className="bg-gray-100 p-2 rounded mb-4">
          <h3 className="font-medium mb-2">Box 3 vermogen en grondslag</h3>
          <div className="flex justify-between mb-1">
            <span>Box 3 vermogen</span>
            <span>{formatter.format(overigeBezittingen)} + {formatter.format(spaar)} =</span>
            <span>{formatter.format(box3vermogen)}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Aftrekbare schulden ¹</span>
      
            {answers[13] != 'Ja' && answers[14] == '2023' &&  <span>{formatter.format(schulden)} - € 3.400 =</span>}
            {answers[13] == 'Ja' && answers[14] == '2023' &&  <span>{formatter.format(schulden)} - € 6.800 =</span>}
            {answers[13] != 'Ja' && answers[14] == '2024' &&  <span>{formatter.format(schulden)} - € 3.700 =</span>}
            {answers[13] == 'Ja' && answers[14] == '2024' &&  <span>{formatter.format(schulden)} - € 7.400 =</span>}
            <span>{formatter.format(aftrekBareSchulden)}</span>
          </div>  
          <div className="flex justify-between mb-1">
            <span>Rendementsgrondslag</span>
            <span>{formatter.format(rendementsgrondslag)}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Heffingsvrij vermogen</span>
            <span>{formatter.format(heffingsVrijVermogen)} -</span>
          </div>
          <div className="flex justify-between">
            <span>Belast in box 3 (grondslag)</span>
            <span>{formatter.format(belastInBox3Grondslag)}</span>
          </div>
        </div>
        <div className="bg-gray-100 p-2 rounded mb-4">
          <h3 className="font-medium mb-2">Box 3 rendement – berekening (spaarvariant)</h3>
          <div className="flex justify-between mb-1">
            <span>Belast spaargeld</span>
            
            <span>{formatter.format(spaar)}</span>
            <span>1,03%</span>
            <span>{formatter.format(forfaitairVermogen)}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Belaste beleggingen</span>
            <span>{formatter.format(overigeBezittingen)}</span> 
            <span>6,04%</span>
            <span>{formatter.format(forfaitairBeleggingen)}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Aftrekbare schulden</span>
            <span>{formatter.format(aftrekBareSchulden)}</span>
            <span>2,47%</span>
            <span>-{formatter.format(forfaitairSchulden)}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Totaal</span>
            <span>{formatter.format(rendementsgrondslag)}</span>
            <span />
            <span>{formatter.format(forfaitairTotaal)}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Vermogen (rendementsgrondslag)</span>
            <span>{formatter.format(rendementsgrondslag)} +</span>
          </div>
          <div className="flex justify-between">
            <span>Rendementspercentage</span>
            <span>{formatter.format(rendementsPercentage)}%</span>
          </div>
        </div>
        <div className="bg-gray-100 p-2 rounded mb-4">
          <h3 className="font-medium mb-2">Box 3 inkomen – berekening (spaarvariant)</h3>
          <div className="flex justify-between">
            <span>Toegekend</span>
            <span>Berekening</span>
            <span>Box 3 inkomen ²</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Zelf</span>
            <span>{formatter.format(belastInBox3Grondslag)}</span>
            <span>{formatter.format(rendementsPercentage)}% × {formatter.format(belastInBox3Grondslag)} =</span>
            <span>{formatter.format(box3Inkomen)}</span>
          </div>
          <p className="text-sm mb-1">1. Voor de aftrek van box 3 schulden geldt een drempel van € 3.700.</p>
          <p className="text-sm mb-1">
            2. De belastingdienst noemt het 'box 3 inkomen' ook 'voordeel uit sparen en beleggen'.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-medium mb-2">Ingevoerde gegevens:</h3>
          <div className="flex justify-between mb-1">
            <span>Belastingjaar</span>
            <span>{answers[14]} (voorlopig)</span>
          </div>
          <div className="flex justify-between">
            <span>Fiscaal partner</span>
            <span>{answers[13]}</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm">
            Bereken het zelf online op{" "}
            <a className="text-blue-600 underline" href="#">
              Cypto Calculator.nl
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

