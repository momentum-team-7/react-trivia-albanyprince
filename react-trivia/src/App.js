import { useState, useEffect } from 'react'
import axios from 'axios'
import 'tachyons'
import Categories from './components/CategoryList'
import Question from './components/Question'




function App() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    
    axios
    .get('https://opentdb.com/api_category.php')
    .then((response) => {setCategories(response.data.trivia_categories)
        }) 
    }, [])

  console.log('RENDERING:', categories)

 return (
    <div className="App">
      <h1>Trivia Travesty</h1>

      <section>
      {selectedCategory ? ( 
        <Question
        category={selectedCategory}
        handleGoBack={() => setSelectedCategory(null)}
        />
        ) : (
          <Categories
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
        )}  
     </section>   
    </div> 
  )
}







export default App;

