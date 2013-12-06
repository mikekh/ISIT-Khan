/**
 * @author Mike Khan
 *
 * http://www.wizards.com/default.asp?x=dnd/glossary&term=Glossary_dnd_hitpoints&alpha=
 */

angular.module('characters', ['herosMod'])
.factory('people', function($rootScope, $http, heros) {
	var heroDataDB = heros.query({}, function(users) {
	$rootScope.heroDataDB = heroDataDB;
   }); 
 
	return {
		hint: "Enter a number of miles",

		races: [
			{ name: 'Dwarves',
				description: 'Typically about 4 feet tall, stocky, lifespan of 300-400 years. Thick hair and beards',
				hitDie: 1,
				languages: ['Common', 'Dwarvish'],
				classes: ['Cleric', 'Fighter', 'Thief']},
			{ name: 'Halflings',
				description: 'Typically 3 tall, 60 lbs., with curly hair, no facial hair, lifespan of about 100 years.',
				hitDie: 6,
				languages: ['Common', 'Halfling'],
				classes: ['Cleric', 'Fighter', 'Thief']},
			{ name: 'Elves',
				description: 'Typically about 5 feet tall, slender, 130 lbs. Lifespan of 1200 years or more. Pale with dark hair, pointed ears, little or no facial hair.',
				hitDie: 6,
				languages: ['Common', 'Elvish'],
				classes: ['Fighter', 'Magic User']},
			{ name: 'Humans',
				description: 'Average male is typically 6 feet tall, 175 lbs., and lives about 75 years.',
				hitDie: 1,
				languages: ['Common'],
				classes: ['Any']}
		],

		classes: [
			{ name: 'Cleric',
				armor: 'any',
				hitDie: 6,
				shield: true,
				spells: ['none'],
				weapons: ['club', 'mace', 'maul', 'quarterstaff', 'sling', 'warhammer'],
				xpForLevelTwo: 1500 },
			{ name: 'Fighter',
				armor: 'any',
				hitDie: 8,
				shield: true,
				spells: ['none'],
				weapons: ['Any'],
				xpForLevelTwo: 2000 },
			{ name: 'Magic-User',
				armor: 'none',
				hitDie: 4,
				shield: false,
				spells: [ 'Charm Person', 'Detect Magic', 'Floating Disc', 'Hold Portal',
					'Light', 'Magic Missile', 'Magic Mouth', 'Protection from Evil',
					'Read Languages',
					'Read Magic',
					'Shield',
					'Sleep',
					'Ventriloquism'],
				weapons: [ 'cudgel', 'dagger', 'walking staff' ],
				xpForLevelTwo: 2500},
			{ name: 'Thief',
				armor: 'leather',
				hitDie: 4,
				shield: false,
				spells: ['none'],
				weapons: ['any'],
				xpForLevelTwo: 1250}
		],
/*
		hero: {
			name: " Default Hero Name",
			health: 99,
			hitPoints: 99, //keep for now
			damage: 5,
			firstEncounter : true,

			initHero :  function(){
				console.log("in initHero function");
				this.name = $rootScope.HeroName;
				this.health = $rootScope.HeroHealth;
				this.hitPoints = $rootScope.HeroHitPoints;
				this.damage = $rootScope.Herodamage;
			},
		
			bonusDamage: function() {
				return Math.floor(Math.random() * 2) + 1;
			},
			bonusHitPoints: function() {
				return Math.floor(Math.random() * 3) + 1;
			}
		},
*/

		hero: {
			name: " Default Hero Name",
			health: 99,
			hitPoints: 99, //keep for now
			damage: 5,
			firstEncounter : true,

			//initialize with DB data save in $rootScope
			initHero :  function(heroObj){
				console.log("in initHero function");
				
     			heroObj.name = $rootScope.heroDataDB[0].name;
     			heroObj.health = $rootScope.heroDataDB[0].health;
     			heroObj.hitPoints = $rootScope.heroDataDB[0].hitPoints;
     			heroObj.damage = $rootScope.heroDataDB[0].damage;
   				
			  },
		
			bonusDamage: function() {
				return Math.floor(Math.random() * 2) + 1;
			},
			bonusHitPoints: function() {
				return Math.floor(Math.random() * 3) + 1;
			}
		},
	
		tower: function() {
			var tempTower = {
				name: "Default Tower",
				health: 79,
				hitPoints: 79, //keep for now
				damage: 13,
				
				getJson: function(callback) {
					console.log("in getJson function");
					var getDataJson = $http.get('Source/DataAccess/JSONdata/data.json');
				    getDataJson.success(callback);
					getDataJson.error(function(data, status, headers, config) {
						throw new Error('Oh no! An Error!');
					});
				},
				
				initTower :  function(){
					console.log("in initTower function");
					var getDataJson = $http.get('Source/DataAccess/JSONdata/data.json');
				    getDataJson.success(function(data, status, headers, config) {
				    	tempTower.name = data.name;
				    	tempTower.health = data.health;
						tempTower.hitPoints = data.hitpoints;
						tempTower.damage = data.damage; 
					});
					
					getDataJson.error(function(data, status, headers, config) {
						throw new Error('Oh no! An Error!');
					});
			    },
			    
				bonusDamage: function() {
					return Math.floor(Math.random() * 2) + 1;
				},
				
				bonusHitPoints: function() {
					return Math.floor(Math.random() * 4) + 1;
				}
			};
			
			return tempTower;
		}
	};
});
