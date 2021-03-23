import { useState, useEffect } from 'react';
imprt axios from 'axios'

function App() {
  const [categories, setCategories] = useState([])
// should "name go in the brackets?"
  useEffect(() => {
    console.log('useEffect runs', categories)
    axios.get('https://opentdb.com/api_category.php').then((response) => {setCategories(response.data)
    }) 
  }, [])

  console.log('RENDERING:', categories)

  return (
    <div className="App">
      <h1>CATEGORIES</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.Name}>{catergory.Category}</li>
        ))}
      </ul>
    </div>    
  )
}







export default App;

