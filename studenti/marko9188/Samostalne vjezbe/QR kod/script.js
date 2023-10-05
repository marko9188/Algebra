  document.getElementById('gumbSat').addEventListener('click', function() {
    var trenutnoVrijeme= new Date();
    document.getElementById('ura').innerHTML='Trenutno vrijeme' + trenutnoVrijeme;
    console.log('stisnuto');
  });
  const auti = ['audi','VW','bmw'];

  auti.push('toyota');

  for (let i=0; i<(auti.length); i++) {
    console.log(auti[i]);
  }
  
  const auto = {
    type: "vw",
    model: "golf",
    god: 2023
              };
  console.log(typeof(auto));
  
  auto.boja='crna';

  console.log(auto.boja);

  function funkcija (p1,p2) {
    return p1*p2;
  }

  console.log(funkcija(2,2));

