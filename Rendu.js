// Créer une collection sport
db.createCollection("sport");

//Ajouter des sports avec 3 fields
db.sport.insert([{ name: "foot", nb_player: 11, object_used: "ballon" }, { name: "basket", nb_player: 5, object_used: "ballon de basket" }]);

// Ajouter deux nouveaux field "title" et "require_teams" avec apsert
db.sport.update({name:"basket"}, {title:"basket",require_teams:false}, {upsert:true})
db.sport.update({name:"foot"}, {title:"foot",require_teams:true}, {upsert:true})

// Ajouter un field "minimum_player" aux sports qui ont besoin d'une équipe
db.sport.update({require_teams:true}, {minimum_player:5},{upsert:true})

//Ajouter aux documents un nombre de joueur de 10 aux équipes 
db.sport.update( {require_teams:false}, {$inc: {minimum_player:10} )

// Insérer un field "teams" à tous les documents 
db.sport.update({}, {teams:[]}, {upsert:true})

// Insérer des joueurs
db.sport.update({require_teams:true}, {teams:["Imad", "Alex", "Loic"]});

// Mettre les joeurs titulaires ou pas
db.sport.update({require_teams: true}, {$push: { $each: titulaire: true}})
                                          
