const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['62895700121662']
global.ownername = "BagusXD"//owner name
global.ytname = "YT: BagusXD"
global.socialm = "GitHub: Private"
global.location = "Indonesia"

global.botname = '𝐒𝐄𝐍𝐍𝐀-𝐌𝐃' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘𝐒𝐄𝐍𝐍𝐀-𝐌𝐃𓆪_✰'
global.packname = 'Sticker By'
global.author = ''
//console view/theme
global.themeemoji = '🧩'
global.wm = "Senna Bot inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaImo5ZG3R3jKOdyr1I'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '*Done*\n©𝐒𝐄𝐍𝐍𝐀-𝐌𝐃',
    prem: '*Fitur Khusus Premium!*',
    admin: '*Fitur Khusus Admin!*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*Fitur Khusus Owner!*',
    group: '*Hanya Untuk Grup!*',
    private: '*Hanya untuk Private*',
    wait: '*Loading...* ',    
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
