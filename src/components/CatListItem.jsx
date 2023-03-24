import '../styles/CatListItemStyle.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CatListItem() {
  const [imageUrl, setImageUrl] = useState('');

  const handleClick = async () => {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1', {
    });
    setImageUrl(response.data[0].url);
  };

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Cat" />}
      <button onClick={handleClick}>Nouvelle photo de chat</button>
    </div>
  );
}

export default CatListItem;











































//     function CatListItem ({ chats }) {
//     const [imageUrl, setImageUrl] = useState('');
  
//     useEffect(() => {
//       fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p')
//         .then(response => response.json())
//         .then(data => {
//           setImageUrl(data[0].url);
//         });
//     }, []);
  
//     function reloadImage() {
//       fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p')
//         .then(response => response.json())
//         .then(data => {
//           setImageUrl(data[0].url);
//         });
//     }
  
//   return (
//     <div className='card'>
//       <div className='card-header'>
//         <h1>LISTE DES CHATS</h1>
//         <img src={imageUrl} />
//       </div>
//       <div className='card-footer'>
//         <button onClick={reloadImage}>Reload</button>
//       </div>
//     </div>
  
//   )
// }

// export default CatListItem
