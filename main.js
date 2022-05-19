let jsonData = require('./test.json');
let filteredJson = [];
const fs = require('fs');
for (obj of jsonData) {
  // let novasAmeaças = obj.Bioma;
  // let novosBiomas = obj["Principais Ameaças"];
  // let novosEstados = obj["Estados de Ocorrência"];
  // novasAmeaças = novasAmeaças.map((e) => {e = e.trim();return e;});
  // novosBiomas = novosBiomas.map((e) => {e = e.trim();return e;});
  // novosEstados = novosEstados.map((e) => {e = e.trim();return e;});
  // obj["Bioma"] = novosBiomas;
  // obj["Principais Ameaças"] = novasAmeaças;
  // obj["Estados de Ocorrência"] = novosEstados;
  // const string = obj["Espécie (Simplificado)"];
  // obj["Gênero"] = string.substr(0, string.indexOf(' '));
  if(obj["Bioma"].includes("Marinho"))
    filteredJson.push(obj);
}


jsonData = jsonData.map((e) => {
  const ordered = Object.keys(e).sort().reduce((obj,key) => {
    obj[key] = e[key];
    return obj;
  }, {});
  return ordered;
})


const data = JSON.stringify(filteredJson);
fs.writeFile("./marinhos.json", data, err => {
  if(err)
    console.log("Erro escrevendo o arquivo", err);
  else
    console.log("JSON escrito com sucesso");
})