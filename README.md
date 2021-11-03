This is a script for Essential Tofu farming in Kingdom of Loathing.

```text
svn checkout https://github.com/libraryaddict/TofuFarming/branches/release/
```

The script has some basic configuration, but expects you to have several things setup. At the very least, you should be in Gel Noob path with all essential perms.

You should be using the familiar Unspeakachu, this gives a chance of more "In your cups".

You should also be using a combat macro.

```text
pickpocket;

if monstername pygmy orderlies;
   use louder than bomb;
 endif;

if monstername pygmy bowler; 
   use divine champagne popper; 
 endif;

if monstername essence of soy;
   use human musk;
 endif;

if monstername the Essence of Interspecies Respect;
 use ice house; 
endif;

if monstername red butler || monstername red snapper || monstername man with the red buttons || monstername red skeleton || monstername red herring || monstername red fox;
  use glark cable;
endif;

if hasskill Fire the Jokester's Gun;
  skill Fire the Jokester's Gun;
endif;

if monstername giant sandworm;
  skill Shocking Lick;
endif;

if monstername Essence of Tofu || monstername BRICKO || monstername lynyrd || monstername Eldritch Tentacle;
  attack; repeat;
endif;

attack; repeat;

abort Not a monster I'm handling!;
```

You are also expected to have three outfits created.

Farming. You need an Eldritch outfit at minimum. The rest is optional, but recommended a Garbage Sticker, Mafia Thumb Ring, Mr. Cheeng's Spectacles and Xiblaxian holo-wrist-puter

Voter. This must have a "I voted" sticker in the outfit.

Rollover. There's only one outfit that benefits from rollover, the "Gladiatorial Glad Rags"


You will also need to setup a mood "acidparade"

```text
When I run low on Heart of Lavender, use 1 lavender candy heart
When I run low on Joyful Resolve, use 1 resolution: be happier
When I run low on Lantern-Charged, use 1 battery (lantern)
When I run low on Merry Smithsness, use 1 Flaskfull of Hollow
When I run low on The Ballad of Richie Thingfinder, use 1 recording of The Ballad of Richie Thingfinder
```

