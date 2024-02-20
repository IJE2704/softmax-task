export const getTeacherRequest = async ()=>{
  const response = await fetch('https://softmaxshop.com/user/teachers/')
  console.log(response.status)
  return response.json();
}