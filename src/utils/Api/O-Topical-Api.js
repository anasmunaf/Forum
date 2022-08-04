import axios from 'axios';

async function OTopicalData() {
  const data = await axios.get(
    'https://slc-backend.herokuapp.com/api/topical/o-level/',
  );
  return data.data;
}

export {OTopicalData};
