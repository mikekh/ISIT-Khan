/**
 * @author Charlie
 *
 * http://www.wizards.com/default.asp?x=dnd/glossary&term=Glossary_dnd_hitpoints&alpha=
 */

angular.module('characters', [])
.factory('people', function() {

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

		hero: {
			//Charlie-- How do initialize properties from the data base
			name: "Hero One",
			health: 20,
			
			hitPoints: 20, //keep for now
			damage: 2,
			bonusDamage: function() {
				return Math.floor(Math.random() * 2) + 1;
			},
			bonusHitPoints: function() {
				return Math.floor(Math.random() * 3) + 1;
			}
		},

		tower: function() {
			//Charlie-- How do initialize properties from the data base
			return {
				name: "Main Tower",
				health: 10,
				
				hitPoints: 10, //keep for now
				damage: 1,
				bonusDamage: function() {
					return Math.floor(Math.random() * 2) + 1;
				},
				bonusHitPoints: function() {
					return Math.floor(Math.random() * 4) + 1;
				}
			};
		}
	};
});
