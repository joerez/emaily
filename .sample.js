// write a function to retrieve a blob of json
// make an ajax request, use the 'fetch' function

// https://rallycoding.herokuapp.com/api/music_albums


//promise
function fetchAlbumsPromise() {
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
  .then(res => res.json())
  .then(json => console.log(json))
}

fetchAlbumsPromise();

//async
async function fetchAlbumsAsync() {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json()

  console.log(json);
}

fetchAlbumsAsync();


//arrow function async version
const fetchAlbums = async () => {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json()

  console.log(json);
}
