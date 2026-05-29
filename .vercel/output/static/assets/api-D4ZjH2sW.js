import{r as h,j as N}from"./index-gVieNwzA.js";import{c as k}from"./NeonButton-BVHx5rcP.js";function G({text:e,delay:t=0,speed:n=24,className:o,caret:a=!0,onDone:m}){const[C,f]=h.useState(""),[A,g]=h.useState(!1);return h.useEffect(()=>{f(""),g(!1);let c=0,s=null;const I=setTimeout(()=>{s=setInterval(()=>{c+=1,f(e.slice(0,c)),c>=e.length&&(s&&clearInterval(s),g(!0),m?.())},n)},t);return()=>{clearTimeout(I),s&&clearInterval(s)}},[e,t,n,m]),N.jsx("span",{className:k("font-mono leading-relaxed",a&&!A&&"caret",o),children:C})}const _=10,R={active:!0,totalClues:_,message:"The hunt is live."},x={1:{id:1,title:"GO TOUCH GRASS",riddle:`The path is drawn by three symbols:
        One grows.
        One shelters.
        One ascends.

        Together they point the way,
        yet none hold the answer.

        When root, shade, and stone align,
        seek not what rises above you,
        but what remains below those who stop to rest.
      `,location_hint:"It's so easy, u guys dun need a hint for this one :P",flavor_text:"// dun give a fk about this clue, GOOONNN LUCK!! ",media_type:"image",media_url:"/images/clue-1-grass-layout.svg",passcode:"COFFEExCROISSANT"},2:{id:2,title:"THE FORGOTTEN VALLEY",riddle:`Between two giants sleeps a wound unseen,
      where light falls thin and echoes intervene.
      One tower teaches numbers to rise,
      the other bends truth through mirrored skies.

      Yet neither guards what you now seek.
      Descend where forgotten pathways breathe,
      where footsteps vanish underneath.

      The valley was never built to be found —
      only crossed by those who look down.

      Search where the city hides its pause,
      between concrete veins and silent walls.

      There, beneath the space both towers ignore,
      the next truth waits beneath the floor.`,location_hint:`Not every path belongs to a building.
                    Some places exist only between them..`,flavor_text:"// observed: yes — flagged: no",media_type:"text",passcode:"SILENCETIME"},3:{id:3,title:"yrerbiL",riddle:`The tower curves yet never breaks,
              guarding thoughts no silence shakes.
              Among the shelves where systems sleep,
              two fractured marks are hidden deep.

              One rests beside forgotten magic,
              where ancient knowledge turns cryptic.
              The other waits where coded minds
              stack their worlds in ordered lines.

              Alone, they mean almost nothing.
              Together, they reveal the path upward.`,location_hint:`DB-L6-6.3-P-CB21. The name is a clue, but not the only one.
                   VAV-CB02-06-14`,flavor_text:"// 404 — the library breathes",media_type:"text",passcode:"4682"},4:{id:4,title:"THE FALSE FRONT",riddle:`The walls scream louder than the people here,
              layered with promises, events, and forgotten names. 

              Signals hide beside other signals,
              drowning safely inside the noise.
 
              Many will search what stands alone.
              Few will question what hides among copies.`,location_hint:"Blame this on DUY, He's know what he's doing. B1",flavor_text:"// Macdonald's, but not really",media_type:"text",passcode:"+8P"},5:{id:5,title:"THE GRAVEYARD OF JOURNEYS",riddle:`
    Some arrive with footsteps alone,
    others leave their journeys chained.

    Two circles carry silent stories,
    waiting patiently between departures.
    They do not run, yet they travel far.

    They do not rest, yet they stand still.
    Seek the place where motion is stored,
    and where forgotten journeys wait for their riders.`,location_hint:"COUNT TO 10??",flavor_text:"// timetable corrupted",media_type:"text",passcode:"UBERTIME"},6:{id:6,title:"THE MAZE RUNNER",riddle:`
    The maze rewards those who climb,
    and punishes those who descend too soon.

    Many will seek the middle of the tower,
    believing truth prefers the light.

    Four walls above, the path appears clear.`,location_hint:"USE STAIRS OR ELEVATOR ONLY!! NO LIFT!! NO HIGHER THAN 5TH FLOOR!!",flavor_text:"// 500 — signal lost in transmission",media_type:"text",passcode:"CHIPPENDALE"},7:{id:7,title:"COMEBACK WAS REAL!!!!",riddle:`
    The game draws every eye forward.
    To the court.
    To the hoop.
    To the place where victories are won.

    But not every prize waits at the destination.
    Some truths reveal themselves only to those
    who turn back.

    When the final whistle fades,
    leave the arena behind.
    Between each rise and fall,
    a narrow space watches silently.

    The next signal waits
    where the court can still be seen,
    but the game has already ended.
    `,location_hint:"Ask who watch last Wednesday match? They know where to go.",flavor_text:"// I was a good game tho, ngl",media_type:"text",passcode:"22-20"},8:{id:8,title:"1000 YEARS LATER~~",riddle:`
    Seven worlds stand before you.
    Four remember the truth.
    Three remember nothing.
    `,location_hint:"Revel later :)) But it's contain the passcode to unlock this clue!!",flavor_text:"// In the Wellbeing Brainrot Zone",media_type:"text",passcode:"1360"},9:{id:9,title:"THERE'S AN IMPOSTER AMONG U!",riddle:`Every 10 mintues, one of U will die and cannot use their ghost vote,
        Pick the right one to get to the final clues
        Information already provided at the beginning and during the HUNT!!`,location_hint:"1 IMP, 1 Scarlet Women, If you solve it, I will give u the QRCODE to unlock the hidden clue!!",flavor_text:"// COME BACK TO THE SPACE!! I told u this game is about memory. Not just finding clues, but remembering them.",media_type:"text",passcode:"WHOWASTHEIMP?"},10:{id:10,title:"ONE PIECE",riddle:`10 clues, only 4 clues are real that unlock this clue,

            Two numbers dividied, yet never apart,
            One watches. One Follows`,location_hint:"I told u this game is about memory. Not just finding clues, but remembering them.",flavor_text:"// Earlier clues were never fully solved. It's a plus code ",media_type:"text",passcode:"3469"}},y={ending_title:"YOU CRACKED IT!!",ending_message:"You were never lost. You were always being guided here. The signal was you all along.",secret_lore:"Now let's go to broadway bar and have a drink together!! IT'S FRIDAY NIGHT BABY!!",stats:{clues_completed:10,hints_used:0,duration_minutes:0}},M=e=>({success:!0,next_clue_id:e>=_?"final":e+1}),U=e=>({valid:!0,achievement_name:`OBSERVER · ${e.toUpperCase()}`,secret_fragment:"The third letter of the last word leads home."}),H={},L=H?.VITE_GAME_SECRET??"hunting-time-default-secret-2026";async function S(e){const t=new TextEncoder,n=await crypto.subtle.importKey("raw",t.encode(L),{name:"HMAC",hash:"SHA-256"},!1,["sign"]),o=await crypto.subtle.sign("HMAC",n,t.encode(e));return btoa(String.fromCharCode(...new Uint8Array(o))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function p(e,t){try{const n=await S(e);if(n.length!==t.length)return!1;let o=0;for(let a=0;a<n.length;a++)o|=n.charCodeAt(a)^t.charCodeAt(a);return o===0}catch{return!1}}function d(e){return`hunting-time:clue:${e}:unlocked`}const E="hunting-time:tokens";function v(){try{const e=localStorage.getItem(E);return e?JSON.parse(e):{}}catch{return{}}}function B(e){try{localStorage.setItem(E,JSON.stringify(e))}catch{}}async function w(e){const t=await S(d(e)),n=v();return n[e]=t,B(n),t}function u(e){return v()[e]}async function F(e){const t=e-1;if(t<=0){const o=u(0);return o?p(d(0),o):!1}const n=u(t);return n?p(d(t),n):!1}async function b(){await w(0)}async function P(e,t,n){const o=a=>a.trim().toUpperCase();return o(t)!==o(n)?!1:(await w(e),!0)}const $=Object.freeze(Object.defineProperty({__proto__:null,canAccessClue:F,getStoredToken:u,grantStartToken:b,grantToken:w,submitPasscode:P},Symbol.toStringTag,{value:"Module"})),Y={},T=Y?.VITE_API_BASE_URL;async function r(e,t){if(!T)return null;try{const n=await fetch(`${T}${e}`,{...t,headers:{"Content-Type":"application/json",...t?.headers||{}}});return n.ok?await n.json():null}catch{return null}}async function V(){return await r("/api/game/status")??R}async function W(e){const t=await r(`/api/clue/${e}`);return t||(x[e]??null)}async function J(e){return await r(`/api/clue/${e}/unlock`,{method:"POST",body:"{}"})??M(e)}async function z(){const e=await r("/api/game/finale");if(e)return e;const t=K();return{...y,stats:{...y.stats,...t}}}async function q(e){return await r(`/api/secret/${e}`)??U(e)}const i="hunting-time:session";function l(){if(typeof window>"u")return{startedAt:Date.now(),cluesCompleted:0,hintsUsed:0};try{const t=window.localStorage.getItem(i);if(t)return JSON.parse(t)}catch{}const e={startedAt:Date.now(),cluesCompleted:0,hintsUsed:0};try{window.localStorage.setItem(i,JSON.stringify(e))}catch{}return e}function O(e){if(!(typeof window>"u"))try{window.localStorage.setItem(i,JSON.stringify(e))}catch{}}async function Z(){l(),await b()}function Q(e){const t=l();e>t.cluesCompleted&&(t.cluesCompleted=e),O(t)}function X(){const e=l();e.hintsUsed+=1,O(e)}function ee(){if(!(typeof window>"u"))try{window.localStorage.removeItem(i)}catch{}}function K(){const e=l();return{clues_completed:e.cluesCompleted,hints_used:e.hintsUsed,duration_minutes:Math.max(1,Math.round((Date.now()-e.startedAt)/6e4))}}export{x as M,_ as T,G as a,z as b,F as c,V as d,q as e,X as f,W as g,ee as h,$ as p,Q as r,Z as s,J as u};
