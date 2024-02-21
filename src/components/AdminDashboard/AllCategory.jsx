"use client"
import { Context } from '@/provider/ContextProvider';
import { getAllCategory } from '@/utilities/getAllCategory';
import React, { useContext, useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const AllCategory = () => {
  const {token} = useContext(Context);
  const [allCategory,setAllCategory] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const categoryPerPage = 16;

  useEffect(()=>{
    const getData = async()=>{
      const data = await getAllCategory(token);
      setAllCategory(data);
    }
    getData();
  },[token])

  // Logic to get current categories based on pagination
  const indexOfLastCategory = currentPage * categoryPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoryPerPage;
  const currentCategories = allCategory?.slice(indexOfFirstCategory, indexOfLastCategory);

  const totalPages = Math.ceil(allCategory.length / categoryPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <h1>Category : {allCategory.length}</h1>
      <div className='grid grid-cols-4 gap-5'>
        {currentCategories.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
      <div className="flex gap-4">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default AllCategory;
