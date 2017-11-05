# Fallen Sanctum event highlight
Highlight Fallen Sanctum events that you are able to do.

## What does this do?
In the [Fallen Sanctum event list page](https://www.fallen-sanctum.com/manual.php?p=events), this script highlights the events you are able to do.
* If the event is up to 5 levels below your skill, it's highlighted in green.
* If the event is lower than 5 levels below your skill, blue.
* If the event is 1 level above your skilll, yellow.

## How to use
1. [Click here to install](https://github.com/dang-nabbit/fs-event-highlight/raw/master/fs-event-highlight.user.js) (or open the `fs-event-highlight.user.js` and click the "Raw" button at top right).
1. Edit the installed script.
1. Copy your skill list in game and replace line breaks with the "pipe" character (`|`).
The result should look like this: `Woodcutting: 34 (1,360,155 XP)|Construction: 31 (943,442 XP)|Mining: 19 (133,481 XP)|Gathering: 18 (128,851 XP)...`.
1. Paste the skill list with pipes in script on [line `12`](https://github.com/dang-nabbit/fs-event-highlight/blob/master/fs-event-highlight.user.js#L12), inside the single quotes, replacing the previous skill list.
1. Save the script and open the [Fallen Sanctum event list page](https://www.fallen-sanctum.com/manual.php?p=events).
