const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['994401885824']
global.ownername = "💙𝖆𝖈𝖍𝖚_✰"//owner name
global.ytname = "YT: 𝖆𝖈𝖍𝖚.inc"
global.socialm = "GitHub: 𝖇𝖆𝖉𝖐𝖆𝖗𝖒𝖆0123"
global.location = "Indian"

global.botname = ҜΔRMΔ-𝐌𝐃' //name of the bot

//sticker details
global.stickername = '💙𝖉𝖊𝖒𝖔𝖓_✰'
global.packname = '𝕬𝖈𝖍𝖚'
global.author = '𝖉𝖊𝖒𝖔𝖓 Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaImo5ZG3R3qjKOdyr1I'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 Maria Bot 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/AYUSH-PANDEY023/Maria-MD\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
