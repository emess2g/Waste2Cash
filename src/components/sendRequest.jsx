import axios from 'axios';

export const fetch = async( props) => {
    const api_base_url = 'https://waste2cashapi-production.up.railway.app/api/user/sendMail';
    axios.post(api_base_url, 
      {
        "senderName": props.senderName,
        "locationName": props.location,
        "contact": props.contact,
        "latitude": props.latitude,
        "longitude": props.longitude
      } 
    )
    .then(function (response) {
    //   console.log(response);
    })
    .catch(function (error) {
    //   console.log(error);
    });
    
  }
  