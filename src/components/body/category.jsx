import React from 'react';
import './style.css'; // Import custom CSS
import { Link } from 'react-router-dom';
const Category = () => {
  return (
    <section className="container-fluid">
      <div className='d-flex justify-content-between align-items-center p-3'>
        <h3 className="mb-0">Browse by Category</h3> 
        <Link className="ms-auto" to={"/category"}>View All</Link>
      </div>  
      <div className="d-flex justify-content-center flex-wrap">
        <div className="category-item bg-primary c0l-2"> 
          <h5>Enjoyment & Leisure</h5>
        </div>
        <div className="category-item bg-secondary c0l-2"> 
          <h5>Tech</h5>
        </div>
        <div className="category-item bg-success c0l-2"> 
          <h5>Travel & Adventure</h5>
        </div>
        <div className="category-item bg-danger c0l-2"> 
          <h5>Fitness & Wellbeing</h5>
        </div>
        <div className="category-item bg-warning c0l-2"> 
          <h5>StartUp & Business</h5>
        </div>
      </div>
    </section>
  );
}

export default Category;
