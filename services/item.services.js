const baseURL = 'exp://192.168.1.105:3001/items';

const fetchItems = async () => {
  try{
    const res = await fetch(baseURL);
    return await res.json();
  } catch (err) {
    console.log(error)
  }
}

export default fetchItems ;