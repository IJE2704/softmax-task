export const getTeacherCourses = async (id,token) =>{
  console.log(token)
  const response = await fetch(`https://softmaxshop.com/user/teacher/${id}/courses/`,{
    method:"GET",
    headers:{
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  console.log(response.status)
  return response.json();
}