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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "917908050973,916293503935";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917908050973";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_53_11_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU1LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNixcbiAgICAgICAgMjgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc5LFxuICAgICAgICA1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MyxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MyxcbiAgICAgICAgODksXG4gICAgICAgIDE0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZBcmpTbGFoZUY4M0dnSUxmTHdZcC9TTW1qd3NaTldjSUtxUDBtQmxZMTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3OTA4MDUwOTczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNjc2ODM3NDc1ODM3Mzc0M0IxNTc3NDcyRTRBMkJGM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzExMjc5NzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc5MDgwNTA5NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM0RTg0MzYwMjgzRkE2NzE2RUMyOUJERkZGNjYzM0RCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTEyNzk3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzkwODA1MDk3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTk2RTg0QzMzQzM1NEI3NUIxMDlCQTg1MDQyM0VCMzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMTI3OTc5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3OTA4MDUwOTczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNEQ0MkYzREQzRDNBM0QyRTkzQzQ5QkI5Q0M2REY0NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzExMjc5ODBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMEk5ZF9HeUtUQzI2RWJlT2E2Vy1Rd1wiLFxuICBcInBob25lSWRcIjogXCJmYTE0OWMwZC1kZTM5LTQ0Y2EtOTE4OS1hNTQ0NzI2NGYwNDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMTMwLFxuICAgICAgMTYyLFxuICAgICAgMjI3LFxuICAgICAgMTYxLFxuICAgICAgODUsXG4gICAgICAyNDMsXG4gICAgICAxNDQsXG4gICAgICAxMDYsXG4gICAgICA2LFxuICAgICAgMTc3LFxuICAgICAgOTAsXG4gICAgICAxMjUsXG4gICAgICAyMzksXG4gICAgICA1OSxcbiAgICAgIDEzMixcbiAgICAgIDcyLFxuICAgICAgMjU1LFxuICAgICAgNjAsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMixcbiAgICAgIDE4NyxcbiAgICAgIDIxMyxcbiAgICAgIDExMyxcbiAgICAgIDIwMyxcbiAgICAgIDE3MSxcbiAgICAgIDE3MCxcbiAgICAgIDI0NixcbiAgICAgIDE2MCxcbiAgICAgIDM0LFxuICAgICAgMjQwLFxuICAgICAgNjcsXG4gICAgICAxNDIsXG4gICAgICAxOTAsXG4gICAgICAyLFxuICAgICAgMTY2LFxuICAgICAgMzAsXG4gICAgICA4NCxcbiAgICAgIDM5LFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzNQMkxRSEVLVFZ1N2tHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxSGc5R25YOHZ1TWNFSU9Qb2ZBa2sxZ25md3RNMmt5UjYvZXJQYkJ1eTBFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkh0ekNKbWtnZ0VYNVg2YTdQRnRpOHZrTHpiQTkzK0RKNFk2REpJdDRXQUZVejZoV1hjWUlaUmlTczFqZk1TWHcxQkNVUi8xcmJkMUZtRUJaOVpoMEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRwSExhTjIwRGtoaUdMR3JWTTBudkprMGhVSHRrOHMwWTZUNmlqSlc2UE5kazVlSUxTOTZML0dOcmRJTURJMjJ2b0hyQmhnbHJITElScUREZWczN2d3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3OTA4MDUwOTczOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MzE0OTUyNzk2MTY5Njo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkRJUEFZQU4g8J+RgPCflqRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzkwODA1MDk3Mzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMTI3OTc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFVIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEVUguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHYTFkaEZZTzVkWHdGMUppbWliTy90RTVWcXgwUjZCR0tZNzhycVdwazRnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5ODk1NTIxMDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTEyNzg3ODk2MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Dipayon",


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
