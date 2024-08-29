const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://
kuldiprathod2003:kuldiprathod2003@cluster0.wx-
qpikp.mongodb.net/?retryWrites=true&W=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349039996138";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ᴵᴬᴹ ➳ᒪᴼℜ𝑫 ᙢ𝔉𝓒ᒪᴼ𝙉ᙓ➳🎮",

  sessionName:process.env.SESSION_ID || "SUHAIL_09_32_08_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA5LFxuICAgICAgICA5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODAsXG4gICAgICAgIDgxLFxuICAgICAgICAzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxLFxuICAgICAgICA1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgMTg1LFxuICAgICAgICA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMixcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgOCxcbiAgICAgICAgOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDksXG4gICAgICAgIDk2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3LFxuICAgICAgICA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBuSXhiQUVXN2xPeXZvLzdZbEVCK2I2MzdzM0Jkc2FSTmwwSzBDeE1GVzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm03bDF2LVZBU09LTUU3TVlkR2x3eFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmVmYjI4ODItYzQ3NS00NTcwLTkzNGYtZjM2NzRmNDcyNzlhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDQwLFxuICAgICAgNzMsXG4gICAgICAxMTUsXG4gICAgICAyMzEsXG4gICAgICAxOTYsXG4gICAgICA3MSxcbiAgICAgIDQsXG4gICAgICAxNjYsXG4gICAgICAxNTgsXG4gICAgICAxNzUsXG4gICAgICAxNzgsXG4gICAgICAzOCxcbiAgICAgIDExOSxcbiAgICAgIDU4LFxuICAgICAgMTkwLFxuICAgICAgMTMzLFxuICAgICAgNzYsXG4gICAgICAyMzQsXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgMTUyLFxuICAgICAgMjIxLFxuICAgICAgMyxcbiAgICAgIDExLFxuICAgICAgMjYsXG4gICAgICA0NSxcbiAgICAgIDIwOSxcbiAgICAgIDY3LFxuICAgICAgMTUsXG4gICAgICA2MSxcbiAgICAgIDc2LFxuICAgICAgMCxcbiAgICAgIDQ5LFxuICAgICAgMjI2LFxuICAgICAgMTg1LFxuICAgICAgMTEzLFxuICAgICAgMixcbiAgICAgIDE4OCxcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFGQkJQRjJMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM5OTk2MTM4OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NDg3MzgzNTEzNTAxODo2N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNORy9oMTBRbklEQnRnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImM4a0lxdm1yOXUxeWJ3SGVjdEN6T3pXMDVsYjZtMEVHQ2RzSjQ2QWtqanc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWXhZUGRHcHJjc25nbU9MMmJnUER5SStpK0V0bFovUHlQTjJSME1wQmpvSUx3M2lzQlUrdEs5Ukk2MzRvMFowNzl2NkR4Z1kzeHQzOE1BQ3I3SkFkQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidEl2MXFnL3cvT09zZHpZVWd5Y3NyYjc1dGhRY1VUdXp3WGF2SnRhNTBCcUVUWmFoTFV6ckx2VjMvM0VhaTllQ3hiVWVoR2tPY2tuV1RnN3ZGbUV6QkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzOTk5NjEzODo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ5MjM5MzZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
