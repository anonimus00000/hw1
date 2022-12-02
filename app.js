                               const main =           docu                         ment.             qu               erySe         lec   to   r                 ("ma      in");
let data;   
                       
const fetchData = async () => {           
  const response = await fetch("http      s://hp-api.herokuapp.com/api/characters");
  const json = await respons        e.json();
  data = await json;        
  foo(data                  )
};        ч
         
const foo = (data) => {        
    data.forEach((el) => {   
      console.log(el);          
      const card = document.createElement("div");              
      main.append(card);                            
                          
      card.innerHTML = `<div class="card">
      <div class='name'>Имя: ${el.name}</div>
      <div class='alt_name'>Альтернативное имя: ${el.alternate_names}</div>
      <div class='species'>Разновидность: ${el.species}</div>
      <div class='gender'>Гендер: ${el.gender}</div>
      <div class='house'>Дом: ${el.house}</div>
      <div class='dateOfBirth'>День рождения: ${el.dateOfBirth}</div>
      <div class='yearOfBirth'></div>
      </div>`;
    });                                 
  };



  fetchData();

                  