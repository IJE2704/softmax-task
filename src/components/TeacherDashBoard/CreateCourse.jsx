"use client";
import { Context } from "@/provider/ContextProvider";
import { getAllCategory } from "@/utilities/getAllCategory";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const CreateCourse = () => {
  const { token, singleTeacher, user, allCategory } = useContext(Context);
  const teacherId = [singleTeacher.id]
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    teacher: teacherId,
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await fetch("https://softmaxshop.com/user/courses/", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if(response.ok){
        Swal.fire({
          title: "Congratulation!",
          text: "Successfully Created course",
          icon: "success",
        });
        formData({
          category:'',
          title:'',
          teacher:''
        })
      }
      console.log(response)
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.log(error.message);
    }

  };

  return (
    <div>
      <div className={`${allCategory.length>0?'grid grid-cols-4 gap-2':'none'}`}>
          {allCategory.length > 0 ? (
            allCategory.map(category => (
              <div key={category.id}>
                <h1 className="text-center">{category.id}</h1>
                <h1 className="text-center">{category.name}</h1>
              </div>
            ))
          ) : (
            <option value="" disabled>Loading Categories...</option>
          )}
      </div>
      <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Create New Course</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-semibold mb-1">Category:</label>
          <input type="number" id="category" name="category" value={formData.category} onChange={handleChange} className="w-full border rounded py-2 px-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Create Course
        </button>
      </form>
      
    </div>
    </div>
  );
};

export default CreateCourse;
