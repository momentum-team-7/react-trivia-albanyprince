import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [categories, setCategories] = useState([])
// should "name go in the brackets?"
  useEffect(() => {
    
    axios.get('https://opentdb.com/api_category.php').then((response) => {setCategories(response.data.trivia_categories)
    }) 
  }, [])

  console.log('RENDERING:', categories)

  return (
    <div className="App">
      <h1>CATEGORIES</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.category}>{category.name}</li>
        ))}
      </ul>
    </div>    
  )
}







export default App;

