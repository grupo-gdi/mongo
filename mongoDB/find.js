use("animaisExtinsao");
// find with $size
// db.animaisMarinhos.find({"Estados de Ocorrência": {$size: 2}}).count();

// find with pretty
// db.animaisMarinhos.find({Bioma: "Marinho"}).pretty();

// find with count
// db.animaisMarinhos.find({Bioma: "Marinho"}).count();

// find with sort
// db.animaisMarinhos.find().sort({"Gênero": 1});
// db.animaisMarinhos.find().sort({"Gênero": -1});

// using limit
// db.animaisMarinhos.find().limit(3);