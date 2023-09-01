
export async function fetchCars(){
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
   const headers={
        'X-RapidAPI-Key': '9b82fd9994msh07c89e1eed682f6p1bb85bjsnc3e7f25e1739',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    try {
        const response = await fetch(url, {headers:headers});
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}