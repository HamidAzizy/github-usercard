// https://api.github.com/users/hamidazizy
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
  .get('https://api.github.com/users/hamidazizy')
  .then(response => {
    let cards = document.querySelector('.cards');
    cards.appendChild(cardCreator(response));
  })
  .catch(() => {
    alert('Unable to load your GitHub');
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'JasonNeale',
  'SebastianGarces',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(user => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(response => {
      let cards = document.querySelector('.cards');
      cards.appendChild(cardCreator(response));
    })
    .catch(() => {
      alert('Unable to Load Followers GitHub');
    });
});
//
const cardCreator = userCard => {
  const mycard = document.createElement('div');
  mycard.classList.add('card');

  const imgCard = document.createElement('img');
  mycard.appendChild(imgCard);
  imgCard.setAttribute('src', userCard.data.avatar_url);

  const infoCard = document.createElement('div');
  mycard.appendChild(infoCard);
  infoCard.classList.add('card-info');

  const nameCard = document.createElement('h3');
  infoCard.appendChild(nameCard);
  nameCard.classList.add('name');
  nameCard.textContent = userCard.data.name;

  const userNameCard = document.createElement('p');
  infoCard.appendChild(userNameCard);
  userNameCard.classList.add('username');
  userNameCard.textContent = userCard.data.login;

  const locationCard = document.createElement('p');
  infoCard.appendChild(locationCard);
  locationCard.textContent = `Location:  ${userCard.data.location}`;

  const profileCard = document.createElement('p');
  infoCard.appendChild(profileCard);
  profileCard.textContent = '';

  const linkGithubCard = document.createElement('a');
  profileCard.appendChild(linkGithubCard);
  linkGithubCard.textContent = `GitHub UR: ${userCard.data.url}`;

  const followersCard = document.createElement('p');
  infoCard.appendChild(followersCard);
  followersCard.textContent = `Followers: ${userCard.data.followers}`;

  const followingCard = document.createElement('p');
  infoCard.appendChild(followingCard);
  followingCard.textContent = `Following: ${userCard.data.following}`;

  const bioCard = document.createElement('p');
  infoCard.appendChild(bioCard);
  bioCard.textContent = `Bio: ${userCard.data.bio}`;

  return mycard;
};
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
