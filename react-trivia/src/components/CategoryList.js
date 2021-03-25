export default function CategoryList({ categories, setSelectedCategory }) {
    return (
        <div>
            <h2>Choose A Category</h2>
            <ul className="list">
                {categories.map((category) => (
                    <li key={category.category}>
                        <button className="category-button" onClick={() => setSelectedCategory(category)}>
                        {category.name}
                        </button>
                    </li>
               
                ))}
            </ul>    
        </div>
    )
}