// import axios from "axios";

// export const useGetRandom = (setCharacters) => {
  
//     function getRandomCharacter() {
//     const randomId = Math.floor(Math.random() * 826) + 1;
//     return axios(`https://rickandmortyapi.com/api/character/${randomId}`)
//        .then(({ data }) => data)
//        .catch((error) => {
//           console.error("Error fetching random character:", error);
//           return null;
//        });
//  }

//  async function onRandom() {
//     const randomCharacter = await getRandomCharacter();
//     if (randomCharacter) {
//        return setCharacters((prevCharacters) => [...prevCharacters, randomCharacter]);
//     }
//  }
// }

// //  //!    El metodo .some recorre el array buscando por algun objeto que cumpla con la condicion
// //  function duplicateChar(characterId) {
// //     return characters.some((character) => character.id === characterId);
// //   }