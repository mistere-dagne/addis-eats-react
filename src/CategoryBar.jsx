function CategoryBar({selected, onSelect}){
    const cats = ["All", "Main", "Drink", "Breakfast", "Starter"];
    return(
        <div>
            {cats.map(
                (cat)=>(
                    <button
                        key={cat}
                        className={cat=== selected? "selected":""}
                        onClick={()=>onSelect(cat)}
                        >{cat}</button>
                )
            )}
        </div>
    )
}

export default CategoryBar;