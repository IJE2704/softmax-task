export const getAllCategory = async (token) =>{
  const response = await fetch(`https://softmaxshop.com/user/categories/`,{
    method:"GET",
    headers:{
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  const data =await response.json();
  console.log(data)
  return data;
}