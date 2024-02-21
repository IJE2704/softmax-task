export const getSingleTeacher = async (id,token) =>{
  console.log(id)
  console.log(token)
  const response = await fetch(`https://softmaxshop.com/user/teacher/${id}/`,{
    method:"GET",
    headers:{
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  console.log(response.status)
  const data = await response.json();
 
  return data;
}