import React from 'react';

const CategoryCard = ({category}) => {
  return (
    <div className="bg-[#B2CAF7] flex justify-center items-center py-10 px-5 rounded-md gap-4">
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-sm 2xl:text-xl">{category.name}</h1>
        <p>{category.description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;