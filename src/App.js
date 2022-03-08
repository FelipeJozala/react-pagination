import React, {useEffect, useState} from 'react';
import CardList from './components/CardList/CardList';
import PaginationList from './components/PaginationList/PaginationList';
import GlobalStyle from './styles/Global';

function App() {
  const [ apiData, setApiData ] = useState([])
  const [actualPage , setActualPage ] = useState(0)

  const itensInPage = 10
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

	const handlePagination = (index) => {
		setActualPage(index)
	}

  return (
		<>
			<GlobalStyle/>
    	<main>
				<CardList currentItens={currentItens}/>
				<PaginationList pages={pages} handlePagination={handlePagination}/>
    	</main>
		</>
	);
};

export default App;
