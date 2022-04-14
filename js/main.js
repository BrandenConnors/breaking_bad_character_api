//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value
  // console.log(choice)
  const url = `https://www.breakingbadapi.com/api/character/random`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // if (data.media_type === "image"){
        //   document.querySelector('img').src = data.hdurl
        // }
        // else if (data.media_type === 'video'){
        //   document.querySelector('iframe').src = data.url
        // }
        console.log(data[0])
        document.querySelector('#cName').innerText = data[0].name
        document.querySelector('#nName').innerText = data[0].nickname
        document.querySelector('#occupation').innerText = data[0].occupation
        document.querySelector('img').src = data[0].img
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

