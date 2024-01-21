import axios from 'axios';

export const fetchCountries = async () => {
  try {
    const response = await axios.get('https://naras-api.vercel.app/all');

    return response.data;
  } catch (e) {
    return [];
  }
};
