/* jshint browser: true */

angular.module('elfGameMod', ['characters'])
.factory('elfgame', function(gameEventService, people) {

	return {

		map_grid : null,

		defaultMapGrid : {
			width : 18,
			height : 12,
			tile : {
				width : 32,
				height : 32
			}
		},

		towers : [],

		reportEvent : function(message) {
			gameEventService.towerBroadcast(message);
		},

		changeDirectionMessage : function(message) {
			gameEventService.changeDirectionBroadcast(message);
		},

		sendDebugMessage : function(message) {
			gameEventService.debugBroadcast(message);
		},
		
		//not called  delete later
		rollD3 : function(village) {
			village.tower.hitPoints -= Math.floor(Math.random() * 3);
			village.tower.health = village.tower.hitPoints;
		},
		
		increaseHerosHealth : function() {
			//don't what to kill the Hero just yet so restore Hero to full health
			people.hero.health = 20;
			people.hero.hitPoints = 20;
			
		},
		sendVillageDestroyedMessages : function(village) {
			gameEventService.encounterBroadcast('Successed in Destroying the ' + village.tower.name);
	
			this.increaseHerosHealth();
			gameEventService.encounterHeroBroadcast('Hero Health Restored to ' + people.hero.health);
			gameEventService.encounterVillageHealthBroadcast('Village Destroyed');
		},
		
		sendVillageNotDestroyedMessages : function(village) {
			gameEventService.encounterBroadcast('Failed to Destroy the ' + village.tower.name);
			gameEventService.encounterVillageHealthBroadcast('Tower health down to ' + village.tower.health);
		},


		updateHeroHealth : function(village) {
			//don't what to kill the Hero just yet, so let his health go beyond dead
			people.hero.hitPoints -= village.tower.damage + village.tower.bonusDamage();
			people.hero.health = people.hero.hitPoints;
			gameEventService.encounterHeroBroadcast(people.hero.name + ' our Hero Health down to ' + people.hero.health);
		},
		
		updateVillageHealth : function(village) {
			//don't what to kill the Hero just yet, so let his health go beyond dead
			village.tower.hitPoints -= people.hero.damage + people.hero.bonusDamage();
			village.tower.health = village.tower.hitPoints;
		},
		
		initHeroFromDB : function(){
			console.log("in initHeroFromDB");
			people.hero.initHero();
			people.hero.firstEncounter = false;
		},
		
		encounter : function(village) {
			if(people.hero.firstEncounter === true){
				this.initHeroFromDB();
			}
			this.updateHeroHealth(village);
			this.updateVillageHealth(village);
			
			gameEventService.debugBroadcast('Tower hit points: ' + village.tower.hitPoints);
			
			if (village.tower.hitPoints <= 0) {
				this.sendVillageDestroyedMessages(village);
				return true;
			} else {
				this.sendVillageNotDestroyedMessages(village);
				return false;
			}
		},

		newVillage : function(village) {
			village.tower = people.tower();
			this.towers.push(village);
		},

		goLeft : function() {
			Crafty.trigger('goLeft', Crafty);
		},

		stopMove : function() {
			Crafty.trigger('stopMove', Crafty);
		},

		// Get width of the game screen in pixels
		width : function() {
			return this.map_grid.width * this.map_grid.tile.width;
		},

		// Get height of the game screen in pixels
		height : function() {
			return this.map_grid.height * this.map_grid.tile.height;
		},

		// Initialize and start our game
		start : function(mapGrid) {			
			// Start crafty
			var gameDiv = document.getElementById("gameBoard");
			if (mapGrid) {
				this.map_grid = mapGrid;
			} else {
				this.map_grid = this.defaultMapGrid;
			}
			Crafty.init(this.width(), this.height(), gameDiv);
			Crafty.game = this;
			Crafty.background('rgb(0, 109, 20)');

			// Call load scene, defined below
			Crafty.scene('Loading');
		}
	};
});

