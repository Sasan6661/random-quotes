url = 'https://animechan.vercel.app/api/quotes';

// const fetchQuote = fetch(url)
//  .then(response => response.json())
//  .then(quote => console.log(quote));
    

let loading = true;


var putri = "cantik";
const load = document.getElementById('loading');
const main = document.getElementById('main');

function loadingScene() {
 load.style = "display:block";
 main.style = "display:none";
}

function displayScene() {
 load.style = "display:none";
 main.style = "display:block";
}


const a = async () => {
 try {
  loading = true;
  loading ? loadingScene() : displayScene();

  const resp = await fetch(url);
  const data = await resp.json();

  loading = false;
  loading ? loadingScene() : displayScene();
  
  data.map((kata) => {
   const { anime, character, quote, index } = kata;
   return (
    main.insertAdjacentHTML("afterbegin",
    `<div class="quote">
      <span class="bi bi-quote"></span>
      <hr>
      <p >${quote}</p>
      <hr>
      <h4 >${character}</h4>
      <h5 >${anime}</h5>
     </div>
     `)
     );
  })
 } catch (error) {
  console.log(error);
 }
 
}

a();


function refresh() {
 const quote = document.querySelectorAll('.quote');
 function aaa() {
  quote.forEach(element => {
   element.remove();
  });
 }
 // console.log(quote);
 aaa()
 a();
}


