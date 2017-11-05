// ==UserScript==
// @name        Fallen Sanctum - Event highlight
// @namespace   https://www.fallen-sanctum.com/manual.php?p=events
// @author      dang
// @description Highlight events that you are able to do
// @version     0.1
// @icon        https://www.google.com/s2/favicons?domain=https://www.fallen-sanctum.com
// @grant       none
// ==/UserScript==

// Update this string with your skill list, replacing new lines with |
var skillLevelsString = 'Woodcutting: 34 (1,360,155 XP)|Construction: 31 (943,442 XP)|Mining: 19 (133,481 XP)|Gathering: 18 (128,851 XP)|Lockpicking: 18 (120,748 XP)|Fishing: 17 (90,303 XP)|Smithing: 17 (85,837 XP)|Speed: 17 (89,202 XP)|Crafting: 15 (62,232 XP)|Digging: 14 (40,719 XP)|Cooking: 10 (12,786 XP)|Strength: 9 (8,261 XP)|Fletching: 9 (8,227 XP)|Hunting: 8 (5,620 XP)|Defense: 7 (2,471 XP)|Stamina: 6 (1,821 XP)|Agility: 6 (1,521 XP)|Attack: 4 (281 XP)';

var skills = [
	{
		name: 'Baking',
		verbs: ['Bake']
	}, {
		name: 'Construction',
		verbs: ['Saw']
	}, {
		name: 'Cooking',
		verbs: ['Cook']
	}, {
		name: 'Crafting',
		verbs: ['Craft']
	}, {
		name: 'Digging',
		verbs: ['Dig']
	}, {
		name: 'Farming',
		verbs: ['Harvest']
	}, {
		name: 'Fishing',
		verbs: ['Fish']
	}, {
		name: 'Fletching',
		verbs: ['Fletch']
	}, {
		name: 'Gathering',
		verbs: ['Gather', 'Milk', 'Pick']
	}, {
		name: 'Herblore',
		verbs: ['Crush', 'Mix']
	}, {
		name: 'Hunting',
		verbs: ['Hunt']
	}, {
		name: 'Lockpicking',
		verbs: ['Unlock']
	}, {
		name: 'Mining',
		verbs: ['Mine']
	}, {
		name: 'Smithing',
		verbs: ['Smelt', 'Smith']
	}, {
		name: 'Tailoring',
		verbs: ['Cure', 'Spin']
	}, {
		name: 'Woodcutting',
		verbs: ['Chop']
	}
];
var skillsLen = skills.length;

var skillLevelsArr = skillLevelsString.split('|');
var skillLevelsLen = skillLevelsArr.length;

var skillString;
var skillRegEx = /(.*?): (\d+)/;
var skillMatch;
var skillLevels = {};
for (var i = 0; i < skillLevelsLen; i++) {
	skillString = skillLevelsArr[i];
	skillMatch = skillRegEx.exec(skillString);
	skillLevels[skillMatch[1]] = parseInt(skillMatch[2]);
}

var eventEls = document.querySelectorAll('#farm_stats > span');
var eventElsLen = eventEls.length;
var eventEl;
var eventLevel;
var highlight;
var eventSkillString;
var skill;
var skillLevel;
for (i = 0; i < eventElsLen; i++) {
	highlight = 'none';
	eventEl = eventEls.item(i);
	eventLevel = parseInt(eventEl.children.item(1).innerHTML.match(/\d+/)[0]);
	
	if (eventLevel > 1) {
		eventSkillString = eventEl.children.item(0).innerHTML;
		eventSkillString = eventSkillString.substr(0, eventSkillString.indexOf(' '));

		for (var j = 0; j < skillsLen; j++) {
			skill = skills[j];

			if (skill.verbs.indexOf(eventSkillString) > -1) {
				skillLevel = skillLevels[skill.name];
				
				if (eventLevel >= skillLevel - 5 && eventLevel <= skillLevel) {
					highlight = '#0C0';
				} else if (eventLevel < skillLevel) {
					highlight = '#0CC';
				} else if (skillLevel === eventLevel + 1) {
					highlight = '#CC0';
				}
        
				break;
			}
		}
	} else {
		highlight = '#0C0';
	}

	if (highlight !== 'none') {
    eventEl.style.color = highlight;
	}
}
