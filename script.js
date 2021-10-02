const jokeE1 = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

alert('Please give me star')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke(){
    const config = {
        headers: {
            Accept : 'application/json'
        }
    }
    
    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data)=> 
    {
        jokeE1.innerHTML = data.joke
        console.log(data.status)
    })
 
}
