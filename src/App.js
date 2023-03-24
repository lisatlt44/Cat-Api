import axios from 'axios'
import { useEffect, useState } from 'react'
import CatListItem from './components/CatListItem'


function Chats () {
  // On déclare une variable (restaurants) qui va contenir nos restaurants
  // On obtient une méthode (setRestaurants) permettant de mettre à jour les restaurants et de rafraîchir l'affichage
  const [chats, setChats] = useState()

  // Méthode du cycle de vie d'un composant React permettant d'effectuer une action au montage du composant
  // Le montage c'est l'apparition du composant à l'écran
  useEffect(() => {
    // On crée une méthode pour récupérer les données provenant du backend (Strapi)
    const loadData = async () => {
      // On récupère les données du backend avec la librairie Axios (C'est un appel HTTP)
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p')
      // On vérifie que l'appel d'api s'est bien passé (status = 200 = "OK")
      if (response.status === 200) {
        // Si l'appel d'API est OK, on enregistre les restaurants dans la variable "restaurants"
        // console.log('ca marche')
        const data = response.data[0]
        setChats(data)
      }
    }
    // On appelle la méthode créée précédemment
    loadData()
  }, [])

  return chats && (
    <>
    <CatListItem chats={chats}/>

    </>
  )
}

export default Chats

//   return (
//     <>
//       <h1>LISTE DES CHATS</h1>
//       <div className='list'>
//         {
//           // On vérifie qu'on a bien récupérer les restaurants
//           // On crée une boucle sur le tableau de restaurants grâce à la fonction "map()"
//           // On retourne pour chaque restaurant une Card pour afficher son contenu
//           chats && chats.map(chat => {
//             return (
//               <h1>{chat.name}</h1>
//               // <CatListItem key={chat.id} item={chat} />
//             )
//           })
//         }
//       </div>

//     </>
//   )
// }

// export default Chats;
