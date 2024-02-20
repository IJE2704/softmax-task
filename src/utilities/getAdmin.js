export const getAdmin = async ()=>{
  const response = await fetch('https://softmaxshop.com/user/admins/')
  console.log(response.status)
  return response.json();
}