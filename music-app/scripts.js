const apiUrl = 'http://localhost:3000/artists';

async function fetchArtists() {
  try {
    const response = await fetch(apiUrl);
    const artists = await response.json();
    displayArtists(artists);
  } catch (error) {
    console.error('Error fetching artists:', error);
  }
}

function displayArtists(artists) {
  const artistsContainer = document.getElementById('artists');
  artistsContainer.innerHTML = '';

  artists.forEach(artist => {
    const artistDiv = document.createElement('div');
    artistDiv.classList.add('artist');

    const artistName = document.createElement('h2');
    artistName.textContent = artist.name;

    const artistCountry = document.createElement('p');
    artistCountry.textContent = `Country: ${artist.country || 'Unknown'}`;

    artistDiv.appendChild(artistName);
    artistDiv.appendChild(artistCountry);

    artistsContainer.appendChild(artistDiv);
  });
}

document.addEventListener('DOMContentLoaded', fetchArtists);
