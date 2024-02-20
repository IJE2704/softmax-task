"use client"
import { Context } from '@/provider/ContextProvider';
import React, { useContext, useState } from 'react';


const Modal = ({ isOpen, onClose }) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {token} = useContext(Context);
  // console.log(token)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateCategory = async () => {
    // console.log(categoryName)
    // console.log(categoryDescription)
    console.log(formData)
    console.log(token)
    try {
      setIsLoading(true);
      console.log('h')
      const response = await fetch('https://softmaxshop.com/user/categories', {
        method: 'POST',
        
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      console.log(response)
      // console.log(response.status)
      if (!response.ok) {
        throw new Error('Failed to create category');
      }
  
      const responseData = await response.json();
      console.log('Category created successfully:', responseData);
      setIsLoading(false);
      onClose(); // Close the modal after successful creation
    } catch (error) {
      console.error('Error creating category:', error);
      setIsLoading(false);
      // Handle error display or logging
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Create Category</h1>
        <input
          type="text"
          id='name'
          name='name'
          placeholder="Category Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
        />
        <textarea
          placeholder="Category Description"
          id='description'
          name='description'
          value={formData.description}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full resize-none"
          rows={4}
        />
        <button
          onClick={handleCreateCategory}
          disabled={isLoading}
          className={`bg-blue-500 text-white px-4 py-2 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        >
          {isLoading ? 'Creating...' : 'Create Category'}
        </button>
        <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mt-4 hover:bg-gray-600">Close Modal</button>
      </div>
    </div>
  );
};

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Assume you have a way to retrieve the token, replace 'yourTokenHere' with your actual token
  const token = 'yourTokenHere';

  return (
    <div className='flex justify-between items-center gap-10 '>
      <div onClick={openModal} className='w-1/2 bg-[#CFA9F4] rounded mt-10 shadow-xl h-[300px] flex justify-center items-center hover:scale-110 mx-20 cursor-pointer'>
        <h1 className='text-3xl font-bold'>Create Category</h1>
      </div>
      <div className='w-1/2 bg-[#B2C9F6] rounded mt-10 shadow-xl h-[300px] flex justify-center items-center hover:scale-110 mx-20'>
        <h1 className='text-3xl font-bold'>See All Category</h1>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Category;
