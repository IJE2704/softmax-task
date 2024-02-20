export async function fetchData() {
  try {
    const response = await fetch('https://softmaxshop.com/user/students/');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}