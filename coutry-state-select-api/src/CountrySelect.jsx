import { useEffect, useState } from "react";

const CountrySelect = () => {
  const [countries, setCountries] = useState([]); // List of countries
  const [states, setStates] = useState([]); // List of states
  const [cities, setCities] = useState([]); // List of cities

  const [selectedCountry, setSelectedCountry] = useState(null); // Selected country
  const [selectedState, setSelectedState] = useState(null); // Selected state

  const [loadingCountries, setLoadingCountries] = useState(true);
  const [loadingStates, setLoadingStates] = useState(false); // Track loading of states
  const [loadingCities, setLoadingCities] = useState(false); // Track loading of cities
  const [error, setError] = useState(null);

  // Fetch country list on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch country list");
        }

        const result = await response.json();
        if (result && result.data && Array.isArray(result.data.countyList)) {
          setCountries(result.data.countyList);
        } else {
          throw new Error("Invalid country data format received");
        }

        setLoadingCountries(false);
      } catch (error) {
        setError(error.message);
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  // Fetch states based on selected country
  const fetchStates = async (countryId) => {
    setLoadingStates(true);
    setCities([]); // Clear cities when country changes
    try {
      const response = await fetch(
        `https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-SateList-By-Country?countryId=${countryId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch state list");
      }

      const result = await response.json();
      if (result && result.data && Array.isArray(result.data.stateList)) {
        setStates(result.data.stateList);
      } else {
        throw new Error("Invalid state data format received");
      }

      setLoadingStates(false);
    } catch (error) {
      setError(error.message);
      setLoadingStates(false);
    }
  };

  // Fetch cities based on selected country and state
  const fetchCities = async (countryId, stateId) => {
    setLoadingCities(true);
    try {
      const response = await fetch(
        `https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CityList-By-Country-State?countryId=${countryId}&stateId=${stateId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch city list");
      }

      const result = await response.json();
      if (result && result.data && Array.isArray(result.data.cityList)) {
        setCities(result.data.cityList); // Assuming result.data.cityList contains the array of cities
      } else {
        throw new Error("Invalid city data format received");
      }

      setLoadingCities(false);
    } catch (error) {
      setError(error.message);
      setLoadingCities(false);
    }
  };

  // Handle country selection
  const handleCountryChange = (e) => {
    const selectedCountryId = e.target.value;
    setSelectedCountry(selectedCountryId);
    setSelectedState(null); // Reset state when country changes
    setStates([]); // Clear states and cities when country changes
    setCities([]); // Clear cities when country changes
    fetchStates(selectedCountryId); // Fetch states for selected country
  };

  // Handle state selection
  const handleStateChange = (e) => {
    const selectedStateId = e.target.value;
    setSelectedState(selectedStateId);
    fetchCities(selectedCountry, selectedStateId); // Fetch cities when a state is selected
  };

  if (loadingCountries) return <p>Loading countries...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {/* Country Dropdown */}
      <label>Select Country: </label>
      <select onChange={handleCountryChange} value={selectedCountry || ""}>
        <option value="" disabled>
          Select a country
        </option>
        {countries.map((country) => (
          <option key={country.countryId} value={country.countryId}>
            {country.name}
          </option>
        ))}
      </select>

      {/* State Dropdown */}
      {selectedCountry && (
        <div>
          <label>Select State: </label>
          {loadingStates ? (
            <p>Loading states...</p>
          ) : (
            <select onChange={handleStateChange} value={selectedState || ""}>
              <option value="" disabled>
                Select a state
              </option>
              {states.map((state) => (
                <option key={state.stateId} value={state.stateId}>
                  {state.name}
                </option>
              ))}
            </select>
          )}
        </div>
      )}

      {/* City Dropdown */}
      {selectedState && (
        <div>
          <label>Select City: </label>
          {loadingCities ? (
            <p>Loading cities...</p>
          ) : (
            <select>
              <option value="" disabled>
                Select a city
              </option>
              {cities.map((city) => (
                <option key={city.cityId} value={city.cityId}>
                  {city.name}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
