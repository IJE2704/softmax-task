
export const getUserStudent = async(id)=>{
    const response = await fetch(`https://softmaxshop.com/user/student/${id}`)
    console.log(response.status);
    const data = await response.json();
    console.log(data)
    return data;
}