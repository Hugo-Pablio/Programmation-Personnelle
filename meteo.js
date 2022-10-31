let ville = 'Les Mages';
recevoirTemperature(ville);


function recevoirTemperature(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.23333&lon=4.15&appid=eb3e55ca0093756f2541d5ad27c5021c&units=metric';
  
  let requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();

  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let temperature = reponse.main.temp;
        document.querySelector('#met').textContent = temperature;
      } else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
}