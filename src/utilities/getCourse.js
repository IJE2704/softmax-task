export async function fetchCourse(token) {
  console.log(token)
  try {
    const response = await fetch('https://softmaxshop.com/user/courses/',{
      method: "GET",
      headers:{
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log(response.status);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const data = await response.json();
    return data;
  }
   catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}