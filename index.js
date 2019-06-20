const team = {
  _players : [
  {
  	firstName: 'Pablo',
  	lastName: 'Sanchez',
  	age: 11
  },
  {
     firstName: 'Pete', 
     lastName: 'Wheeler', 
     age: 54
    },
    {
     firstName: 'Faina', 
     lastName: 'Bop', 
     age: 40
    } 
  ],
  
  _games : [
   {
  	opponent: 'Broncos',
 	  teamPoints: 42,
  	opponentPoints: 27
   },
    {
  	opponent: 'Second',
 	  teamPoints: 90,
  	opponentPoints: 10
   },
    {
  	opponent: 'Third',
 	  teamPoints: 76,
  	opponentPoints: 35
   }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  
  addPlayer(firstName, lastName, age) {
 let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

   this.players.push(player); 
},
  
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    
     this.games.push(game);
  }
};

team.addPlayer ('Steph', 'Curry', 28);
team.addPlayer ('Lisa', 'Leslie ', 44);
team.addPlayer ('Bugs', 'Bunny', 76);

team.addGame ('Lolo', 89, 56);
team.addGame ('Hru', 33, 55);
team.addGame ('Kria', 34, 77);

console.log(team );
