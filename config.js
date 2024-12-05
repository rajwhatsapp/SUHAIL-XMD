const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "917908050973" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919883457657,919883457657";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919883457657";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "916293503935,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_20_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OSxcbiAgICAgICAgNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDkzLFxuICAgICAgICAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTY5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDcwLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyLFxuICAgICAgICA4NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDEyLFxuICAgICAgICA1OCxcbiAgICAgICAgNjksXG4gICAgICAgIDY1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyLFxuICAgICAgICA3OSxcbiAgICAgICAgODEsXG4gICAgICAgIDQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDcyLFxuICAgICAgICA0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MixcbiAgICAgICAgMjMyLFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDMwLFxuICAgICAgICA1MixcbiAgICAgICAgNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRQK3VSUFlKRU9YMUZTVXE5bGdZZmRNSHFsNkNtQ0daN25LYVNmRVBnQkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlkNDA2dTIwUjFHMTR1em4xNGlJQ3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjU0MzQ2MjgtMGQwZi00Zjk4LTg2M2MtODQ3MWRjNGI2Y2M1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDIzMSxcbiAgICAgIDg3LFxuICAgICAgMjksXG4gICAgICA1NCxcbiAgICAgIDIwNSxcbiAgICAgIDMxLFxuICAgICAgMjIsXG4gICAgICA2MixcbiAgICAgIDIzNCxcbiAgICAgIDE2OCxcbiAgICAgIDY5LFxuICAgICAgMjQyLFxuICAgICAgMjA3LFxuICAgICAgNjAsXG4gICAgICAxMzcsXG4gICAgICAyMjMsXG4gICAgICAxMzUsXG4gICAgICAyNDMsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgMTU0LFxuICAgICAgMTUwLFxuICAgICAgMTk2LFxuICAgICAgMTIwLFxuICAgICAgMjAyLFxuICAgICAgNzYsXG4gICAgICA1NSxcbiAgICAgIDIwMCxcbiAgICAgIDE0NixcbiAgICAgIDE3NCxcbiAgICAgIDgwLFxuICAgICAgMTAwLFxuICAgICAgOTQsXG4gICAgICAyMzIsXG4gICAgICA2NCxcbiAgICAgIDIyMSxcbiAgICAgIDEwOSxcbiAgICAgIDE4MCxcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDUkJXV1BUTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4NTEzMDM5Njc1OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTA2NzMyMDM4MjI4NDU6NjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHVMMmVJRUVKblJ4cm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGcHdGT2FjQ1VZc2lXeFU5MkRMUHg5Rld1eXg5bjRCa0Z2SmtiQ0VncW5BPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJnRG5TWTdMRXRBV2dTMS9xL1VtYXYyK0dqSlcrRVJhZXRGcVB1bTFOQmRlclExSzFVNVVaaUllZGhlc3ZwdHlQL0pMNEpKbXNXQ3pFTUpGNkdKUUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9BTXcxVk40L0hjQWkrVm5ERGY0aXBqcUgrWXdBa2JkVmE2R0JUTzhEbnpoeGtJZlVrRGd5T3lQWHVMR2NYOTh0NlVWZEROVm96T0NoYUk3bzFkVGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODUxMzAzOTY3NTo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM0MDQ4Mjhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "𝗔𝗻𝗷𝗮𝗻",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
