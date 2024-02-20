export const getEnrolledCourse = async (id,token) =>{
  console.log(id)
  console.log(token)
  const response = await fetch(`hhttps://softmaxshop.com/user/student-courses/${id}`,{
    method:"GET",
    headers:{
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  console.log(response.status)
  return response.json();
}