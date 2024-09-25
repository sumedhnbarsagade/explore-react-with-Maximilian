import { useEffect, useState } from 'react';

const CountrySelect = () => {
  const [countries, setCountries] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the country list from the API
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList');
        
        if (!response.ok) {
          throw new Error('Failed to fetch country list');
        }

        const result = await response.json();

        // Accessing the country list correctly based on the API response structure
        if (result && result.data && Array.isArray(result.data.countyList)) {
          setCountries(result.data.countyList); // Accessing the array inside result.data.countyList
        } else {
          throw new Error('Invalid data format received');
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <select className='items-form-input'>
      {countries.map((country) => (
        <option key={country.countryId} value={country.countryId} >
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;
