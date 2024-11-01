import React from 'react';
import './style.css'; // Import custom CSS
import { Link } from 'react-router-dom';
const CategoryCard=(props)=>{
  return(
    <div className="category-item bg-primary c0l-2"> 
          <h5>{props.label}</h5>
        </div>
  )
}
const Category = () => {
  return (
    <section className="container-fluid">
      <div className='d-flex justify-content-between align-items-center p-3'>
        <h3 className="mb-0">Browse by Category</h3> 
        <Link className="ms-auto" to={"/category"}>View All</Link>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
      <CategoryCard label="Enjoyment & Leisure"/> 
      <CategoryCard label="Tech"/> 
      <CategoryCard label="Travel & Adventure"/> 
      <CategoryCard label="Fitness & Wellbeing"/> 
      <CategoryCard label="StartUp & Business"/> 
      </div>
    </section>
  );
}

export default Category;
