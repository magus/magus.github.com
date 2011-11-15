---
layout: post
title: "Skyrim: Alchemy Helper"
---

The Elder Scrolls V: Skyrim has consumed all of my free time since it was
released on the 11th this month. During this time I have discovered I have
a very completionist mindset. Upon looking at the Alchemy system I realized
that there were thousands of recipes due to almost a hundred different
ingredients and each having 4 effects.

I wanted to make the best potions.

## Skyrim Alchemy

Here's a brief summary of the Alchemy system for those of you unfortunate 
enough to not yet have played Skyrim. There are 92 different ingredients
each of which have 4 effects. A potion can contain up to three ingredients
with a minimum of two required. The alchemy involves overlapping ingredient
effects. For example, if I combine two ingredients with the 'Fortify Magicka'
effect, the result is a potion with that effect. However the optimum strategy
in obviously to find the ingredient combinations which result in many effects.

## Python Script

This problem of discovering the combinations of different ingredients is not
simple, so I wrote a python script to find them for me. The script,
skyrim-alchemy-helper, can be found [over at github][skyrim-alchemy-helper-py].
Given an initial ingredient, the script will find all recipes for a discovering
the most effects of that ingredient. Most of the time the script is able to
find a 3 ingredient combination which will cover all 4 effects. Alternatively,
if you want to discover the recipe for which you gain the most number of
effects, even if you do not cover the four initial there is a flag for doing
just that. 

I was very proud of this script and using it and a combination of grep and awk,
I was able to put all of my ingredients to good use discovering their effects.
I released the script on github but most people wanted to be able to use a
'website' to do this and hadn't the faintest clue that python wasn't just a 
variety of snake.

## Skyrim Alchemy Recipe Helper (Web Application)

Enter the Skyrim Alchemy Recipe Helper.

I spent the better part of tonight working on getting this prototype working.
[Go check it out][skyrim-alchemy-helper-web] on the Heroku dyno it's currently
running on. It isn't anything fancy but I have plans for improvement already.
There will be a way to filter the resulting recipes for specific effect(s)
and/or ingredient(s). There will also be way, once I do further testing,
to determine the potency of the combination (since I believe having more
copies of the same effect increases the potency).

Go check it out and feel free to give me feedback. I'm always listening on
Twitter and read all emails (even if I don't reply to them all)!

[skyrim-alchemy-helper-py]: https://github.com/magus/skyrim-alchemy-helper
[skyrim-alchemy-helper-web]: http://fierce-fire-5307.herokuapp.com/
