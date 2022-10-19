/*   STEP 1   */
export const leagueID = "784469056664240128/"; // your league ID
export const leagueName = "TDL"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <h2>Freezah Chronicles week 6 power rankings </h2>
<p>1. Niggas-United (↔️)- NU is rolling right now with another 170+ performance. It’s really looking like their week 3 loss was an outlier as they haven’t had another game under 170. Will it be business as usual as they face off against bye-pocalypse Kuroro team. NU would like nothing more than to sweep this team, as the race for banner 4 continues. </p> 
<p>2. Kuroro (⬆️1)- Kuroro showed this week that the Roman’s have some way to go before they can hang with the higher tiered teams of tdl. They have a rematch against NU, but with all three of trinity out on bye will they be able to pull off the win or get swept on the season by NU.</p>  
<p>3. Keeping up with the Josh’s(⬇️1) - KWJ bounced back after a tough lost against the JF. They did face a team in turmoil with SF having another double digit game. The team went from struggling to find backs to having one of the best rb rooms in tdl. This has contributed to their best start yet at 5-1. Facing a hungry football team looking to prove they’re still a top team, will they keep it up with one of the Josh’s not playing. </p> 
<p>4. Cobra nay (⬆️1)- 4-2, cobra nay is showing they belong as they currently have the longest win streak in tdl. They have been here before in the past, and seem to fizzle out around now. Hopefully with new ownership they can change that. They get RFT this week, who is on a little win streak of their own. </p> 
<p>5. Remember the Roman’s (⬆️1)- word on the street is that as long as you score more than 140 pts the Roman’s are beatable. They are getting to the tougher part of their schedule and it is showing with two back to back losses. They still need wr help, because other than week 4 evans hasn’t scored more than 20 pts. And Kirk seems to have cooled off. They are looking to bounce back against JF this week. As their schedule doesn’t get any easier. </p> 
<p>6. Joe and friends(⬇️2)- I guess anyone can have a double digit game. Nick Chubb disappointed big time in a week where Derrick Henry was absent. Kelce and mahomes can only do some much, especially when they don’t have wr help. Trading Allen who has a been steady presence in their wr room, maybe come back to hurt joe and friends come playoff time.</p>  
<p>7. Rft(⬆️1) - we caught a glimpse of what RFT really looks like when their guys are on the same page. We got a kittle sighting, Pittman bounced back in a big way. James Robinson seems to be losing work to etienne more and more. But that didn’t stop rft from beating the hoot. They face the Akatsuki who would like nothing more than to get their first win. </p> 
<p>8. The fantasy football team(⬆️1) - Kenneth Walker provided some energy to the football team. The rookie was looking explosive in his debut game. At the same time losing marquise brown for the season is big blow as he was having an wr1 season. The football team are going need find help somewhere to replace the production. Hopefully rookie Jameson Williams will make his debut soon. </p> 
<p>9. Hoot house(⬇️2) - hoot house are just an unpredictable team, which means they will have down weeks. We really need to look at Najee Harris though, he is in the middle of a sophomore slump. He is currently rb 22, which is terrible considering he finished as rb 3 last season. They need a major bounce back this week, as they arguably have the toughest second half schedule in tdl. This includes a doubleheader against KWJ.</p>  
<p>10. The Akatsuki(⬆️1) - the Akatsuki has the second toughest schedule this season and it certainly shows. They traded away star qb jalen hurts. It looks like they are buying into tanking. </p> 
<p>11. The all-star locker room (⬆️1)- another lost, they get dhop back this week. Hopefully having him back and Adams returning from bye will get them a win over the also struggling SF team.</p>  
<p>12. Soldier fields(⬇️2) - now this one make come as a shock to folks, but let’s look at the number. 3 games below triple digits. Two of them in the last three weeks. 2 games below 120. Lowest PF in tdl. The numbers from the  week two win are looking like an outlier than anywhere close to the norm. We don’t think that one win can put him above teams that havent dropped below triple digits all season. </p> 

`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    // {
    //   "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
