//Créer une nouvelle database 
use projectdb

// Créer une collection sport
db.createCollection("sports");

//Ajouter des sports avec 3 fields
db.sports.insert([{ name: "foot", nb_player: 11, object_used: "ballon" }, { name: "basket", nb_player: 5, object_used: "ballon de basket" }]);

// Ajouter deux nouveaux field "title" et "require_teams" avec apsert
db.sports.update({name:"basket"}, {title:"basket",require_teams:false}, {upsert:true})
db.sports.update({name:"foot"}, {title:"foot",require_teams:true}, {upsert:true})

// Ajouter un field "minimum_player" aux sports qui ont besoin d'une équipe
db.sports.update({require_teams:true}, {minimum_player:5},{upsert:true})

//Ajouter aux documents un nombre de joueur de 10 aux équipes qui auront besoin de joeuurs

db.sports.update( {require_teams:false}, {$inc: {minimum_player:10} )
