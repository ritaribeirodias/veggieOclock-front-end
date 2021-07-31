const baseURL = 'exp://192.168.1.105:3001/';

const fetchItems = async () => {
  const res = await fetch(baseURL);
  return await res.json();
}

module.exports = fetchItems ;