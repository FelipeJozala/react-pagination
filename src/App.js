import React, {useEffect, useState} from 'react';
import './App.css';
import Card from './components/card/Card';

function App() {
  const [ apiData, setApiData ] = useState([])
  const [actualPage , setActualPage ] = useState(0)

  const itensInPage = 15
  const pages = Math.ceil(apiData.length /itensInPage)
  const startIndex = actualPage * itensInPage
  const endIndex = startIndex + itensInPage
  const currentItens =apiData.slice(startIndex,endIndex)

  useEffect(() => {

		const fetchData = async () => {

      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => data)

      setApiData(result)
    }
    fetchData()
		
	},[]);

  return (
    <div>
      {Array.from(Array(pages), (item, index)=>{
        return <button key={index} onClick={e => setActualPage(Number(index))}>{index + 1}</button>
      })}

      {currentItens.map(item => {
        return <Card key={item.id} item={item}/>
      })}
    </div>
  );
};

export default App;
