import { LuMapPin } from 'react-icons/lu'

const GoogleMapButton = () => {
  // Function to handle the button click event
  const handleButtonClick = () => {
    // Define the coordinates for Phnom Penh, Cambodia
    const latitude = 11.556374;
    const longitude = 104.92821;

    // Create the Google Maps URL with the coordinates
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    // Open the URL in a new tab
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <>
      <button className="btn btn-sm btn-rounded btn-light" onClick={handleButtonClick}>
        <LuMapPin size={16} /> Phnom Penh, Cambodia
      </button>
    </>
  );
};

export default GoogleMapButton;
