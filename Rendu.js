//Créer une nouvelle database 
use projectdb

// Créer une collection sport
db.createCollection("sports");

//Ajouter des sports avec 3 fields
db.sports.insert([{ name: "foot", nb_player: 11, object_used: "ballon" }, { name: "basket", nb_player: 5, object_used: "ballon de basket" }]);

// Ajouter deux nouveaux field "title" et "require_teams" avec apsert
db.sports.insert({name:"foot"}, {title:"foot",require_teams:false}, {upsert:true})

//Ajouter un nouveau field pour ajouter le minimum de joueur
