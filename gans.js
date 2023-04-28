require('./setting')
require('./lib/funclist')
require('./message/msg')
const { modul } = require('./module');
const { axios, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl } = modul;
const baileys = require('@adiwajshing/baileys')
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const os = require('os')
const { jadibot, conns } = require('./jadibot')
const { facebookdl, facebookdlv2 } = require ('@bochilteam/scraper')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const fg = require ('api-dylux')
const bocil = require ('@bochilteam/scraper')
const { sizeFormatter } = require('human-readable')
const { extract } = require('zs-extract')
const { lookup } = require('mime-types')

//lib
const { clockString, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture } = require('./lib/myfunc')
const { addResponList, delResponList, resetListAll, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/list')
const { santedpc } = require('./lib/santedpc')
const { santedgc } = require('./lib/santedgc')
const { color, bgcolor } = require('./lib/color')
const men = require('./lib/menfess')
const { ChatAIHandler } = require('./lib/openai');

//Scraper
const { uptotelegra } = require('./scraper/upload')
const textpro = require('./scraper/textpro')
const yts = require('./scraper/yt-search')
const scp1 = require('./scraper/scraper') 
const scp2 = require('./scraper/scraperr')
const scp3 = require('./scraper/scraperrr')

//Database
const vip = JSON.parse(fs.readFileSync('./database/premium.json'))
const register = JSON.parse(fs.readFileSync('./database/user.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
...(global.db || {})
}

//virtex
const { ngazap } = require('./message/virus/ngazap')

//Start
module.exports = gans = async (gans, m, chatUpdate, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = m
const gakbisaowner = `${creator}@s.whatsapp.net`
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
const messagesC = pes.slice(0).trim()
const content = JSON.stringify(m.message)
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await gans.decodeJid(gans.user.id)
const itsMeGans = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isRegister = register.includes(m.sender)
const isVIP = vip.includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const groupMetadata = m.isGroup ? await gans.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
 const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss') 
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const banUser = await gans.fetchBlocklist()
const isBanned = banUser ? banUser.includes(m.sender) : false
const senderNumber = sender.split('@')[0]
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const lebaran = new Date('April 22, 2023 00:00:00')
const sekarang = new Date().getTime()
const Selisih = lebaran - sekarang
const harinya = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jamnya = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const menitnya = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
const detiknya = Math.floor( Selisih % (1000 * 60) / 1000)
 
let rn = ['recording','composing']
let jd = rn[Math.floor(Math.random() * rn.length)];


try {
ppuser = await gans.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
const ppnyauser = await reSize(ppuser, 300, 300)

var mdu = ['red','green','yellow','blue','magenta','cyan','white']
var halalu = mdu[Math.floor(Math.random() * mdu.length)]
var mdo = ['red','green','yellow','blue','magenta','cyan','white']
var halalo = mdo[Math.floor(Math.random() * mdo.length)]
var mdi = ['red','green','yellow','blue','magenta','cyan','white']
var halali = mdi[Math.floor(Math.random() * mdi.length)]
var mda = ['red','green','yellow','blue','magenta','cyan','white']
var halala = mda[Math.floor(Math.random() * mda.length)]
var mde = ['red','green','yellow','blue','magenta','cyan','white']
var halale = mde[Math.floor(Math.random() * mde.length)]

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(` ${wm} `), color(`[ PESAN ]`, `${halalu}`), color(`FROM`, `${halalo}`), color(`${pushname}`, `${halali}`), color(`Text :`, `${halala}`), color(`${body}`, `${halale}`))
}

gans.sendPresenceUpdate('unavailable', from)

if (command) {
gans.sendPresenceUpdate(jd, from)
gans.readMessages([m.key])
}

const btnnya = [{buttonId: `${prefix}menu`, buttonText: {displayText: '𝙈𝙀𝙉𝙐'}, type: 1}]
const ownonly = {
document: { url: "https://wa.me/6282299284898" },
mimetype: docx,
fileName: `▱▰▱▰𝘼𝘾𝘾𝙀𝙎 𝘿𝙀𝙉𝙄𝙀𝘿▰▱▰▱`,
fileLength: 88808964843634667969,
pageCount: 1234567890123456789012345,
caption: ucapanWaktu + ` ${pushname}`,
footer: `𝙊𝙬𝙣𝙚𝙧 𝙊𝙣𝙡𝙮 • 𝐹𝑖𝑡𝑢𝑟 𝐼𝑛𝑖 𝒉𝑎𝑛𝑦𝑎 𝐾𝒉𝑢𝑠𝑢𝑠 𝑈𝑛𝑡𝑢𝑘 𝑂𝑤𝑛𝑒𝑟`,
mentions: [sender],
buttons: btnnya,
headerType: 1,
contextInfo: { externalAdReply: { showAdAttribution: true,
mediaUrl: "https://Instagram.com/b4c00t.dtz",
mediaType: "VIDEO",
description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
title: `${wm}-MD`,
body: wm,
thumbnail: thumb,
sourceUrl: urlnya
  }}
}
const adminon = {
document: { url: "https://wa.me/6282299284898" },
mimetype: docx,
fileName: `▱▰▱▰𝘼𝘾𝘾𝙀𝙎 𝘿𝙀𝙉𝙄𝙀𝘿▰▱▰▱`,
fileLength: 88808964843634667969,
pageCount: 1234567890123456789012345,
caption: ucapanWaktu + ` ${pushname}`,
footer: `𝘼𝙙𝙢𝙞𝙣 𝙊𝙣𝙡𝙮 • 𝐹𝑖𝑡𝑢𝑟 𝐼𝑛𝑖 𝒉𝑎𝑛𝑦𝑎 𝐾𝒉𝑢𝑠𝑢𝑠 𝑈𝑛𝑡𝑢𝑘 𝐴𝑑𝑚𝑖𝑛 𝐺𝑟𝑜𝑢𝑝`,
mentions: [sender],
buttons: btnnya,
headerType: 1,
contextInfo: { externalAdReply: { showAdAttribution: true,
mediaUrl: "https://Instagram.com/b4c00t.dtz",
mediaType: "VIDEO",
description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
title: `${wm}-MD`,
body: wm,
thumbnail: thumb,
sourceUrl: urlnya
  }}
}

async function pinterest(query) {
return new Promise(async (resolve, reject) => {
axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + query, {
headers: {
"cookie": "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
}
}).then(({
data
}) => {
const $ = cheerio.load(data)
const result = [];
const hasil = [];
$('div > a').get().map(b => {
const link = $(b).find('img').attr('src')
result.push(link)
});
result.forEach(v => {
if (v == undefined) return
hasil.push(v.replace(/236/g, '736'))
})
hasil.shift();
resolve(hasil)
})
})
}

const fbdown = async(link) => {
return new Promise((resolve,reject) => {
let config = {
'url': link
}
axios('https://www.getfvid.com/downloader',{
method: 'POST',
data: new URLSearchParams(Object.entries(config)),
headers: {
"content-type": "application/x-www-form-urlencoded",
"user-agent":  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
"cookie": "_ga=GA1.2.1310699039.1624884412; _pbjs_userid_consent_data=3524755945110770; cto_bidid=rQH5Tl9NNm5IWFZsem00SVVuZGpEd21sWnp0WmhUeTZpRXdkWlRUOSUyQkYlMkJQQnJRSHVPZ3Fhb1R2UUFiTWJuVGlhVkN1TGM2anhDT1M1Qk0ydHlBb21LJTJGNkdCOWtZalRtZFlxJTJGa3FVTG1TaHlzdDRvJTNE; cto_bundle=g1Ka319NaThuSmh6UklyWm5vV2pkb3NYaUZMeWlHVUtDbVBmeldhNm5qVGVwWnJzSUElMkJXVDdORmU5VElvV2pXUTJhQ3owVWI5enE1WjJ4ZHR5NDZqd1hCZnVHVGZmOEd0eURzcSUyQkNDcHZsR0xJcTZaRFZEMDkzUk1xSmhYMlY0TTdUY0hpZm9NTk5GYXVxWjBJZTR0dE9rQmZ3JTNEJTNE; _gid=GA1.2.908874955.1625126838; __gads=ID=5be9d413ff899546-22e04a9e18ca0046:T=1625126836:RT=1625126836:S=ALNI_Ma0axY94aSdwMIg95hxZVZ-JGNT2w; cookieconsent_status=dismiss"
}
})
.then(async({ data }) => {
const $ = cheerio.load(data)
resolve({
Normal_video: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a').attr('href'),
HD: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a').attr('href'),
audio: $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(2) > a').attr('href')
})
})
.catch(reject)
})
}

const cheerio = require("cheerio")
const axios = require("axios")

async function stickersearch(text) {
return new Promise((resolve, reject) => {
axios.get(`https://getstickerpack.com/stickers?query=${text}`)
.then(({data}) => {
const $ = cheerio.load(data)
const source = []
const link = [];
var ya = $('#stickerPacks > div > div:nth-child(3) > div > a').text()
if (!ya ) return resolve()
$('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
source.push($(b).attr('href'))
})
axios.get(source[Math.floor(Math.random() * source.length)])
.then(({
data
}) => {
const $$ = cheerio.load(data)
$$('#stickerPack > div > div.row > div > img').each(function(c, d) {
link.push($$(d).attr('src').replace(/&d=200x200/g,''))
})
result = {
title: $$('#intro > div > div > h1').text(),
sticker_url: link
}
resolve(result)
})
}).catch(reject)
})
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true,
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `gans`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

async function apkDl(url) {
let res = await fetch("https://apk.support/gapi/index.php", {
method: "post",
body: new URLSearchParams(
Object.entries({
x: "downapk",
t: 1,
google_id: url,
device_id: "",
language: "en-US",
dpi: 480,
gl: "SUQ=",
model: "",
hl: "en",
de_av: "",
aav: "",
android_ver: 5.1,
tbi: "arm64-v8a",
country: 0,
gc: undefined,
})
),
});
let $ = cheerio.load(await res.text());
let fileName = $("div.browser > div.dvContents > ul > li > a")
.text()
.trim()
.split(" ")[0];
let download = $("div.browser > div.dvContents > ul > li > a").attr("href");
if (!download) throw "Can't download the apk!";
let mimetype = (await fetch(download, { method: "head" })).headers.get(
"content-type"
);
return { fileName, mimetype, download };
}

async function gansMessage(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await gans.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

function getRandom(ext) {
ext = ext || ""
return `${Math.floor(Math.random() * 100000)}.${ext}`
}

async function getFile(media) {
let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await ( await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
if (!data) return new Error("Result is not a buffer")
let type = await FileType.fromBuffer(data) || {
mime: "application/octet-stream",
ext: ".bin"
}
return {
data,
...type
}
}

async function sendFile(jid, media, options={}) {
let file = await getFile(media)
let mime = file.ext, type
if (mime == "mp3") {
type = "audio"
options.mimetype = "audio/mpeg"
options.ptt = options.ptt || false
}
else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
else if (mime == "webp") type = "sticker"
else if (mime == "mp4") type = "video"
else type = "document"
return gans.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
}
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
url: url,
method: "POST",
data: form,
headers: {
Accept: "*/*",
"Accept-Language": "en-US,en;q=0.9",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"]?.join("; "),
...form.getHeaders()
}
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
cookie: gT.headers["set-cookie"].join("; ")
}
})
return build_server + data.image
}

const downloadMp4 = async (Link) => {
let gHz = require("./scraper/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
const fekdowk = [
{buttonId: `${prefix}owner`, buttonText: {displayText: '𝗢𝗪𝗡𝗘𝗥'}, type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: '𝗗𝗢𝗡𝗔𝗦𝗜'}, type: 1}
]
const pepekntl = {
location: { jpegThumbnail: ghd } ,
caption: `▬▭▬ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐏𝟒 ▬▭▬

╭┈─┈─┈─┈─⧁
┆⧐ Nama Channel : ${ghed.player_response.videoDetails.author}
│⧐ Link Channel : 
┆https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
│⧐ Title : ${Lehd.meta.title}
┆⧐ Durasi : ${Lehd.meta.duration}
╰──┈─┈┈─┈┈─┈─┈─⧐

📄 Deskripsi : ${ghed.player_response.videoDetails.shortDescription}

мοнοи ժιτυиggυ ѵíԺєο иγα γαн`,
mentions : [creator],
footer: `Bot By @${creator.split("@")[0]}`,
buttons: fekdowk,
headerType: "LOCATION"
}
let gdyr = await gans.sendMessage(from, pepekntl, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await gans.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./tmp/${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./scraper/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
const xnxxSitusBokep = [
{buttonId: `${prefix}owner`, buttonText: {displayText: '𝗢𝗪𝗡𝗘𝗥'}, type: 1},
{buttonId: `${prefix}donasi`, buttonText: {displayText: '𝗗𝗢𝗡𝗔𝗦𝗜'}, type: 1}
]
const xnxxBokepSitus = {
location: { jpegThumbnail: MlP } ,
caption: `▬▭▬ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐏𝟑 ▬▭▬

╭┈─┈─┈─┈─⧁
┆⧐ Nama Channel : ${PlXz.player_response.videoDetails.author}
│⧐ Link Channel : 
┆https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
│⧐ Title : ${Puxa.meta.title}
┆⧐ Durasi : ${Puxa.meta.duration}
╰──┈─┈┈─┈┈─┈─┈─⧐

📄 Deskripsi : ${PlXz.player_response.videoDetails.shortDescription}

мοнοи ժιτυиggυ αυժιο иγα γαн`,
mentions : [creator],
footer: `Bot By @${creator.split("@")[0]}`,
buttons: xnxxSitusBokep,
headerType: "LOCATION"
}
let gedeyeer = await gans.sendMessage(from, xnxxBokepSitus, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await gans.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
url: "https://api.remove.bg/v1.0/removebg",
method: "POST",
data: form,
responseType: "arraybuffer",
headers: {
"X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
...form.getHeaders()
}
})
return res.data
}

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = db.data.users[m.sender]
if (typeof user !== 'object') db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
}

let setting = db.data.settings[botNumber]
if (typeof setting !== 'object') db.data.settings[botNumber] = {}
if (setting) {
if (!('anticall' in setting)) setting.anticall = true
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
} else global.db.data.settings[botNumber] = {
anticall: true,
status: 0,
autobio: false,
}

} catch (err) {
console.error(err)
}

// Public & Self
if (!gans.public) {
if (!m.key.fromMe && !itsMeGans) return
}

let formatSize = sizeFormatter({
std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})
async function GDriveDl(url) {
let id
if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL'
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
if (!id) throw 'ID Not Found'
let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
method: 'post',
headers: {
'accept-encoding': 'gzip, deflate, br',
'content-length': 0,
'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
'origin': 'https://drive.google.com',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true' 
}
})
let { fileName, sizeBytes, downloadUrl } =JSON.parse((await res.text()).slice(4))
if (!downloadUrl) throw 'Link Download Limit!'
let data = await fetch(downloadUrl)
if (data.status !== 200) throw data.statusText
return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
}
async function facebookDl(url) {
let res = await fetch('https://fdownloader.net/')
let $ = cheerio.load(await res.text())
let token = $('input[name="__RequestVerificationToken"]').attr('value')
let json = await (await fetch('https://fdownloader.net/api/ajaxSearch', {
method: 'post',
headers: {
cookie: res.headers.get('set-cookie'),
'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
referer: 'https://fdownloader.net/'
},
body: new URLSearchParams(Object.entries({ __RequestVerificationToken: token, q: url }))
})).json()
let $$ = cheerio.load(json.data)
let result = {}
$$('.button.is-success.is-small.download-link-fb').each(function () {
let quality = $$(this).attr('title').split(' ')[1]
let link = $$(this).attr('href')
if (link) result[quality] = link
})
return result
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

async function cerpen (category) {
return new Promise(async (resolve, reject) => {
let title = category.toLowerCase().replace(/[()*]/g, "")
let judul = title.replace(/\s/g, "-")
let page = Math.floor(Math.random() * 5)
axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
.then((get) => {
let $ = cheerio.load(get.data)
let link = []
$('article.post').each(function (a, b) {
link.push($(b).find('a').attr('href'))
})
let random = link[Math.floor(Math.random() * link.length)]
axios.get(random)
.then((res) => {
let $$ = cheerio.load(res.data)
let hasil = {
title: $$('#content > article > h1').text(),
author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
cerita: $$('#content > article > p').text()
}
resolve(hasil)
})
})
})
}

async function notVIP(teks) {
let buttons = [
{ buttonId: '.buyvip', buttonText: { displayText: 'Beli User VIP' }, type: 1 }
]
return gans.sendButtonText(m.chat, buttons, teks, `Jangan Mau Free Yah :(`, m)
}

async function baca(path) {
return fs.readFileSync(path)
}

const reply = (teks) => {
gans.sendMessage(m.chat, { text : teks, contextInfo:{externalAdReply:{
title: `Hai Kak ${pushname}`,
body: ucapanWaktu,
thumbnail: ppnyauser,
mediaType:1,
mediaUrl: channel,
sourceUrl: channel
}}}, { quoted: m })
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${namabot} By ${ownerName}`, 
"jpegThumbnail": ppnyauser
}
}
}

// Anti +212
if (sender.startsWith('212')) {
reply(`Maaf kak ${pushname} kamu telah di block oleh bot!!\nKarena kamu menggunakan nomor *+212*🙏`)
setTimeout( () => {
gans.updateBlockStatus(sender, 'block')
}, 500)
}

// Verify
const daftar1 = `Hai kak ${pushname} ${ucapanWaktu} \n\nSebelum Menggunakan BOT Daftar Terlebih Dahulu Ya `
const daftar2 = `Klik tombol di bawah \nJika tidak ada tombol ketik ${prefix}daftar\n*© ${namabot}*`
const daftar3 = [{buttonId: `${prefix}daftar`,buttonText: {displayText: `DAFTAR `,},type: 1,},]
const butonna = {
text: daftar1,
footer: daftar2,
buttons: daftar3,
headerType: 1,
}

for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'Ga Ngapa Ngapain'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
gans.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}`)
user.afkTime = -1
user.afkReason = ''
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

switch (command) {
case 'daftar': {
if (isRegister) return reply('Akun kamu sudah terdaftar di database')
const serialUser = createSerial(18)
try {
ppimg = await gans.profilePictureUrl(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const anuuh = `*「 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙏𝙄𝙊𝙉 𝙎𝙐𝙆𝙎𝙀𝙎」*
*Terimakasih telah mendaftarkan diri ke database BOT berikut adalah infonya*\n\n*●Nama : ${pushname}*\n*●Nomor : ${sender.split('@')[0]}*\n*●Pengguna : ${register.length}*\n*●SN : ${serialUser}*\n\n*Gunakan bot sewajarnya*`
register.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(register))
Imgnah = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlaKCZE6A9OdzmLHnsxL28_XT8qjBsL1tSlg&usqp=CAU`)
let btn886 = [{
buttonId: '.menu',
buttonText: {displayText: 'MENU'},
type: 1
}]
let txtit = anuuh
gans.sendMessage(from, { caption: anuuh, image: Imgnah, buttons: btn886, footer: `© ${packname}`, mentions: [sender] })
}
break

// ========>OpenAi<========= \\
case 'openai': case 'ai': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Yah Ada Yang Bisa Saya Bantu?\nExample: .ai Apakah itu bot.`)
//await ChatAIHandler(kkkk, m);
const ChatGPTRequest = async (text) => {

const result = {
success: false,
data: "Aku gak tau",
message: "",
}

return await axios({
method: 'post',
url: 'https://api.openai.com/v1/completions',
data: {
model: "text-davinci-003",
prompt: text,
max_tokens: 1000,
temperature: 0
},
headers: {
"accept": "application/json",
"Content-Type": "application/json",
"Accept-Language": "in-ID",
"Authorization": `Bearer ${keyai}`,
},
})
.then((response) => {
if (response.status == 200) {

const { choices } = response.data;

if (choices && choices.length) {
result.success = true;
result.data = choices[0].text;
}

} else {
result.message = "Failed response";
}

return result;
})
.catch((error) => {
result.message = "Error : " + error.message;
return result;
});
}

const response = await ChatGPTRequest(text)

if (!response.success) {
return reply(response.message);
}

return reply(response.data);
}
break
case 'ai-img':{
const { OpenAIApi, Configuration } = require('openai');
if (!q) return reply(`Membuat gambar dari AI.\n\nContoh :\n${prefix+command} rumah mewah`)
try {
const configuration = new Configuration({
apiKey: keyai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: q,
n: 1,
size: "512x512",
});
gans.sendMessage(from, { image: { url: response.data.data[0].url }, caption: q }, {quoted:m});
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
reply("Maaf, sepertinya ada yang error :"+ error.message);
}}}
break

// ===========>Gorup Menu<========= \\
case 'public': {
if (!itsMeGans) return reply(mess.owner)
gans.public = true
reply('Sukse Change To Public Usage')
}
break
case 'self': {
if (!itsMeGans) return reply(mess.owner)
gans.public = false
reply('Sukses Change To Self Usage')
}
break
case 'add': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGans) return gans.sendMessage(from, adminon, { quoted: m })
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await gans.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'closetime':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGans) return gans.sendMessage(from, adminon, { quoted: m })
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Close time ${q} dimulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
gans.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break
case 'opentime':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGans) return gans.sendMessage(from, adminon, { quoted: m })
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open time ${q} dimulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
gans.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
break
case 'group': case 'grup': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGans) return gans.sendMessage(from, adminon, { quoted: m })
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] === 'close'){
await gans.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await gans.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: '.group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: '.group close', buttonText: { displayText: 'Close' }, type: 1 }
]
await gans.sendButtonText(m.chat, buttons, `Mode Group`, gans.user.name, m)
}
}
break
case 'kick': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGans) return gans.sendMessage(from, adminon, { quoted: m })
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await gans.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'linkgc': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) return reply('mana nomor nya?')
num = `${text}`+'@s.whatsapp.net'
let response = await gans.groupInviteCode(m.chat)
let wa = `https://chat.whatsapp.com/${response}`
await gans.sendMessage(from, { text: `Link Group\n${wa}`, footer: `By ${wm}` }, {quoted:m})
}
break
case 'setppgroup': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGans) return gans.sendMessage(from, adminon, { quoted: m })
if (!isBotAdmins) return reply(mess.botAdmin)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var mediz = await gans.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(mediz)
await gans.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
reply(`Sukses`)
} else {
var memeg = await gans.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(`Sukses`)
}
}
break
case 'setname': case 'setsubject': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGans) return gans.sendMessage(from, adminon, { quoted: m })
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) throw 'Text ?'
await gans.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': case 'setdeskgc': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGans) return gans.sendMessage(from, adminon, { quoted: m })
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) throw 'Text ?'
await gans.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
case 'promote': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGans) return gans.sendMessage(from, adminon, { quoted: m })
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await gans.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'demote': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGans) return gans.sendMessage(from, adminon, { quoted: m })
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await gans.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'hidetag': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGans) return gans.sendMessage(from, adminon, { quoted: m })
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Teks?`)
gans.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'tagall': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGans) return gans.sendMessage(from, adminon, { quoted: m })
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Teks?`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n══✪〘 *👥 Tag All* 〙✪══\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
gans.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

// ==========>OwnerMenu<=========== \\
case 'addvip':
if (!itsMeGans) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${owner}`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await gans.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
vip.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(vip))
reply(`Nomor ${prrkek} Telah Menjadi Member VIP!`)
break
case 'delvip':
if (!itsMeGans) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${owner}`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = vip.indexOf(ya)
vip.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(vip))
reply(`Nomor ${ya} Telah Di Hapus Dari member VIP!`)
break
case 'listvip':
teks = '*List Member VIP*\n\n'
for (let gans of vip) {
teks += `⛻ @${gans.split("@")[0]}\n`
}
teks += `\n*Total : ${vip.length}*`
gans.sendMessage(from, { text: teks.trim(), mentions:[gans] }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": vip } })
break
case 'anticall': {
if (!itsMeGans) return reply(mess.owner)
let ciko = db.data.settings[botNumber].anticall
if (args[0] === "on") {
if (ciko) return reply(`Sudah Aktif Sebelumnya`)
ciko = true
reply(`AntiCall Aktif !`)
} else if (args[0] === "off") {
if (!ciko) return reply(`Sudah Tidak Aktif Sebelumnya`)
ciko = false
reply(`AntiCall Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: '.anticall on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.anticall off', buttonText: { displayText: 'Off' }, type: 1 }
]
await gans.sendButtonText(m.chat, buttons, `Mode AntiCall`, gans.user.name, m)
}
}
 break
case 'join': {
if (!itsMeGans) return reply(mess.owner)
if (!text) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await gans.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'pushkontak': {
if (!itsMeGans) return reply(`Perintah Ini Hanya Bisa Digunakan Oleh Nomor Bot`)
if (!q) return reply('Text nya mana')
gans.groupMetadata(m.chat).then(grup => {
const mem = grup.participants.map(v => v.id)
for (let x of mem) {
gans.sendMessage(x, { text: `${q}` })
}
reply('Sukses')
})
}
break
case 'addvn':{
if (!itsMeGans) return gans.sendMessage(from, ownonly, { quoted: m })
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(q)) return reply("Nama tersebut sudah di gunakan")
let delb = await gans.downloadAndSaveMediaMessage(quoted)
vnnye.push(q)
await fsx.copy(delb, `./database/${q}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break
case 'delvn':{
if (!itsMeGans) return gans.sendMessage(from, ownonly, { quoted: m })
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(q)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(q)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/${q}.mp3`)
reply(`Sukses delete vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${vnnye.length}*`
reply(teks)
}
break
case 'sf': case 'savefile': 
if (!q) return reply(`uhm.. teksnya mana?\n\npenggunaan:\n${prefix + command} <teks>\n\ncontoh:\n${prefix + command} command/case.js`)
if (!m.quotedMsg.chats) return reply(`balas pesan nya!`)
let path = `${q}`
await fs.writeFileSync(q, m.quotedMsg.chats) 
reply(`tersimpan di ${path}`)
break
case 'shutdown':
if (!itsMeGans) return gans.sendMessage(from, ownonly, { quoted: m })
reply(`Bye...`)
await sleep(3000)
process.exit()
break
case 'creategc': {
if (!itsMeGans) return gans.sendMessage(from, ownonly, { quoted: m })
if (!args.join(" ")) return reply(`Penggunaan ${prefix+command} namagroup`)

let cret = await gans.groupCreate(args.join(" "), [])
let response = await gans.groupInviteCode(cret.id)
teks = `「 Group Create Fitur 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

https://chat.whatsapp.com/${response}
`
gans.sendMessage(m.chat, { text:teks, mentions: await gans.parseMention(teks)}, {quoted:m})
}
break
case 'bc': 
if (!itsMeGans) return gans.sendMessage(from, ownonly, { quoted: m })
if (!q) return reply(`Teks Nya Bang?`)
let anu = await store.chats.all().map(v => v.id)
for (let yoi of anu) {
let bbttnn = [
{buttonId: `${prefix}donasi`, buttonText: {displayText: `Donasi`}, type: 1},
{buttonId: `${prefix}owner`, buttonText: {displayText: `Owner`}, type: 1}
]
let img = 'https://telegra.ph/file/02782b37a29f1602a7b05.jpg'
let jj = await reSize(img, 300, 300)
const bcnya = {
image: { url: img },
caption: '⟢⩤ 𝐁 𝐑 𝐎 𝐀 𝐃 𝐂 𝐀 𝐒 𝐓 ⩥⟢',
mentions : [participants],
footer: q,
buttons: bbttnn,
headerType: 1
}
gans.sendMessage(yoi, bcnya, {quoted:m})
}
reply(`Succes`)
break
case 'setppbot': {
if (!itsMeGans) return gans.sendMessage(from, ownonly, { quoted: m })
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await gans.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await gans.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Sukses`)
} else {
var memeg = await gans.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`Sukses`)
}
}
break
case 'setnamebot': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!itsMeGans) return gans.sendMessage(from, ownonly, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} WhatsApp ✅`)
let name = await gans.updateProfileName(text)
reply(`Successfully renamed bot to ${name}`)
}
break
case 'setstatus': case 'setbiobot': case 'setbotbio': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!itsMeGans) return gans.sendMessage(from, ownonly, { quoted: m })
if (!text) throw `example :\n${prefix}${command} ada`
let name = await gans.updateProfileStatus(text)
m.reply(`Successfully changed bot bio status to ${name}`)
}
break
case 'ban':{
if (!itsMeGans) return gans.sendMessage(from, ownonly, { quoted: m })
if (!q) return reply(`Penggunaan ${prefix+command} add/del nomor\nContoh ${prefix+command} add/del 6285798145596`)
orgnye = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
let ceknye = await gans.onWhatsApp(orgnye)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
const isBane = banUser ? banUser.includes(orgnye) : false
if (args[0] === "add") {
if (isBane) return reply('User Sudah Dibanned')
gans.updateBlockStatus(orgnye, 'block')
reply(`Succes Ban`)
} else if (args[0] === "del") {
if (!isBane) return reply('User Tidak Dibanned')
gans.updateBlockStatus(orgnye, 'unblock')
reply(`Succes Unban`)
} else {
reply("Error")
}
}
break

// ==========>Search Menu<======== \\
case 'happymod':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!q) return reply(`Contoh ${prefix+command} Nama Apk Game`)
reply(mess.wait)
let kat = await scp1.happymod(q)
reply(util.format(kat))
}
break
case 'cariresep':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!q) return reply(`Contoh ${prefix+command} ayam geprek`)
reply(mess.wait)
let ker = await scp1.cariresep(q)
reply(util.format(ker))
}
break
case 'bacaresep':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!q) return reply(`Contoh ${prefix+command} https://resepkoki.id/resep/resep-ayam-geprek-keju/`)
reply(mess.wait)
let kay = await scp1.bacaresep(q)
let dty = `Resep Di Bawah
Judul : ${kay.judul_nya}
Waktu : ${kay.waktu_nya}
Hasil : ${kay.hasil_nya}
Tingkat Kesulitan : ${kay.tingkat_kesulitan}
Bahan :
${kay.bahan_nya}`
gans.sendMessage(m.chat,{
image:{
url:kay.thumb_nya},
caption:dty,
jpegThumbnail: thumbb},
{quoted:m})
}
break
case 'apkdl': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!q) return reply(`Contoh:\n${prefix+command} https://play.google.com/store/apps/details?id=com.igg.android.lordsmobile`)
let res = apkDl(q)
 reply("_In progress, please wait..._")
  gans.sendMessage(m.chat, { document: { url: res.download }, mimetype: res.mimetype, fileName: res.fileName, }, { quoted: m }
  )
  }
  break
case 'search':
case 'yts': 
case 'ytsearch':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (args.length < 1) return reply(`Contoh:\n${prefix+command} bukti Virgoun`)
reply(mess.wait)
const data = await yts(q);
let tesk = `⩤ 𝑯𝒂𝒔𝒊𝒍 𝑷𝒆𝒏𝒄𝒂𝒓𝒊𝒂𝒏 𝒀𝒐𝒖𝒕𝒖𝒃𝒆 𝑺𝒆𝒂𝒓𝒄𝒉 ⩥\n\n`
for(let a of data.all) {
tesk += `➢Title: ${a.title}\n➢Channel: ${a.author.name}\n➢Durasi: ${a.duration}\n➢Link: ${a.url}\n\n`
}
reply(tesk)
break
case 'play':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix+command} story wa anime`)
reply(mess.wait)
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = '6281328938767@s.whatsapp.net'
ngen = `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}`
let buttonse = [
{buttonId: `${prefix}mp4 ${anu.url}`, buttonText: {displayText: `Video`}, type: 1},
{buttonId: `${prefix}mp3 ${anu.url}`, buttonText: {displayText: `Audio`}, type: 1}
]
let buttonMessages = {
image: eek, 
jpegThumbnail: eek,
caption: ngen,
fileLength: "99999999999",
mentions:[sender, owned],
footer: `_Powered By @${owned.split("@")[0]}_`,
buttons: buttonse,
headerType: 4,
contextInfo: {
"mentionedJid": [sender, owned],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hai Kak ${pushname}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": eek,
"mediaUrl": urlnya,
"sourceUrl": urlnya
}}
}
gans.sendMessage(m.chat, buttonMessages, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: `Iruzruzz\n${harinya}Hari ${jamnya}Jam ${menitnya}Menit ${detiknya}Detik`,
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
}
break
case 'xnxxsearch': case 'xnxx': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!isVIP) return notVIP(mess.premium)
if (!text) return reply('Input URL')
const { xnxxsearch } = require('./scraper/scraperr.js')
let ah = xnxxsearch(text)
reply(`title: ${ah.title}\nUrl: ${ah.url}`)
}
break

// =========>Downloader Menu<========= \\
case 'tiktok': case 'tiktoknowm': case 'tt': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply('Mana Link nya')
let down = await tiktok(text)
reply(mess.wait)
gans.sendMessage(m.chat, { video: {url: down.url[0].url}, caption: 'nih kk' }, {quoted:m})
}
break
case 'tiktokmp3': case 'tiktokaudio': case 'ttmp3': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply('Mana Link nya')
let down = await tiktok(text)
reply(mess.wait)
gans.sendMessage(m.chat, { audio: {url: down.url[0].url}, mimetype: 'audio/mp4' }, {quoted:m})
}
break
case 'ytmp4': case 'mp4':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply('Masukan Link Nya!!!')
reply(mess.wait)
downloadMp4(text)
}
break
case 'ytmp3': case 'mp3':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply('Masukan Link Nya!!!')
reply(mess.wait)
downloadMp3(text)
}
break
case 'igdl': case 'ig': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!args[0]) return reply(`✳️ Example\n*${prefix + command}* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`)
reply(mess.wait)
let res = await fg.igdl(args[0])
for (let result of res.url_list) {
gans.sendMessage(m.chat, { video: { url: result }, caption: `Done` }, { quoted: m })
}
}
break
case 'mediafire':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!q) return reply(`Link Nya Aja Gak Ada Gimana Mau Bot Download`)
let { mediafireDl } = require('./scraper/mediafire')
let isLinks = q.match(/(?:https?:\/{2})?(?:w{3}\.)?mediafire(?:com)?\.(?:com|be)(?:\/www\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply('Link yang kamu berikan tidak valid')
reply(mess.wait)
let ppnyauser = await await gans.profilePictureUrl(sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
let medfr = await scp1.mediafire(q)
await gans.sendMessage(from, {document:{url:medfr.link},jpegThumbnail : ppnyauser, fileName:`Download Mediafire By ${m.pushName}.${medfr.mime}`, mimetype:`application/${mime}`},{quoted:m})
break
case 'zippyshare': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!args[0]) return reply('Input URL')
if (!args[0].includes('zippyshare.com/v')) return reply('URL Invalid')
await reply('_In progress, please wait..._')
for (let i = 0; i < args.length; i++) {
if (!args[i].includes('zippyshare.com/v')) continue
let res = await extract(args[i])
let mimetype = await lookup(res.download)
gans.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype }, { quoted: m })
}
}
break
case 'gdrive': case 'googledrive': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!args[0]) return reply('Input URL')
GDriveDl(args[0]).then(async (res) => {
if (!res) throw res
await reply(JSON.stringify(res, null, 2))
gans.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
})
}
break
case 'twitterdl': case 'twitter': {
if (!args[0]) return reply(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
reply(mess.wait)
try {
let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
let te = ` 
┌─⊷ *TWITTER DL*
▢ Descripción: ${desc}
└───────────`
gans.sendMessage(m.chat, { video: { url: HD }, caption: te }, { quoted: m })
} catch (e) {
reply(`✳️ Error Mendownload Video`)
} 
}
break
case 'fbdl': case 'fb': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
try {
if (!args[0]) return reply(`input URL`)
fbdown(args[0]).then(data => { 
gans.sendMessage(m.chat, { video: { url: data.HD }, caption: mess.succes }, { quoted: m })
})
 } catch {
reply('Error')
}
}
break
case 'savefrom': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!q) return reply(`Mana Link Nya`)
require('./scraper/savefrom').savefrom(q).then(res => {
let sus = res.url[0].url
gans.sendMessage(from, { video: { url: sus }, caption: 'sus' })
})
}
break
case 'capcut': case 'ccp': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!q) return reply(`Mana Link Video ${command} Nya`)
reply(mess.wait)
require('./scraper/capcut').capcut(q).then(res => {
let suk = res.video
gans.sendMessage(from, { video: { url: suk }, caption: mess.succes })
})
}
break
case 'xnxxdl': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!isVIP) return notVIP(mess.premium)
if (!text) return reply('Input URL')
let res = await scp2.xnxxdl(text)
let h = res.result
let cap = `
Title: ${h.title}
Info: ${h.info}
Duration: ${h.duration}
`
let buttons = [
{buttonId: `${prefix}xnxxh ${text}`, buttonText: {displayText: 'HD'}, type: 1},
{buttonId: `${prefix}xnxxl ${text}`, buttonText: {displayText: 'LOW'}, type: 1}
]
const buttonMessage = {
image: { url: h.image },
caption: cap,
footer: `© Created By ${namabot}`,
buttons: buttons,
headerType: 1
}
gans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'xnxxh': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!isVIP) return notVIP(mess.premium)
if (!text) return reply('Input URL')
let res = await scp2.xnxxdl(text)
let h = res.result
let heh = `${h.title}\n`
gans.sendMessage(m.chat, { video: { url: h.files.high }, caption: heh }, { quoted: m })
}
break
case 'xnxxl': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!isVIP) return notVIP(mess.premium)
if (!text) return reply('Input URL')
let res = await scp2.xnxxdl(text)
let h = res.result
let heh = `${h.title}\n`
gans.sendMessage(m.chat, { video: { url: h.files.low }, caption: heh }, { quoted: m })
}
break

// =========>Text Maker E-360<======== \\
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
if (!q) return reply(`Example : ${prefix+command} GansBOtz`) 
reply(mess.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
gans.sendMessage(m.chat, { image: { url: anu }, caption: `${mess.succes}` }, { quoted: m })
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!q) return reply(`Example : ${prefix+command} GansBOTz`) 
reply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
gans.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.succes}` }, { quoted: m })
}
break

// ======≠====>Animek(wibu)<========= \\
case 'waifu': case 'loli': case 'husbu': case 'shota': case 'milf': case 'neko': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let heyy = require(`./scraper/sfw/${command}.json`)
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
let buttoons = [
{buttonId: `${prefix + command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let bMessage = {
image: { url: yeha }, 
jpegThumbnail: thumbb,
caption: `Nih Kak @${sender.split("@")[0]}`,
fileLength: "999999999999",
mentions: [sender],
footer: `© Created By IruzBot`,
buttons: buttoons,
headerType: 4,
}
gans.sendMessage(m.chat, bMessage, { quoted: m })
}
break

// ========>NSFW Menu<======== \\
case 'ahegao': case 'ass': case 'bdsm': case 'blowjob': case 'cuckold': case 'cum': case 'eba': case 'ero': case 'femdom': case 'foot': case 'gangbang': case 'gifs': case 'glasses': case 'hentai': case 'jahy': case 'manga': case 'masturbation': case 'neko': case 'neko2': case 'nsfwloli': case 'orgy': case 'panties': case 'pussy': case 'tentacles': case 'thighs': case 'yuri': case 'zettai': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!isVIP) return notVIP(mess.premium)
reply(mess.wait)
let heyy = require(`./scraper/nsfw/${command}.json`)
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
let buttoons = [
{buttonId: `${prefix + command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessaage = {
image: { url: yeha }, 
jpegThumbnail: thumbb,
caption: `Nih Kak @${sender.split("@")[0]}`,
fileLength: "999999999999",
mentions: [sender],
footer: `© Created By IruzBot`,
buttons: buttoons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hai Kak ${pushname}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": { url: yeha },
"mediaUrl": urlnya,
"sourceUrl": urlnya
}}
}
gans.sendMessage(m.chat, buttonMessaage, {quoted:m})
}
break
// ==========>VIP Menu<========= \\
case 'jadibot': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (m.isGroup) return reply(mess.private)
if (!isVIP) return notVIP(mess.premium)
jadibot(gans, m, from)
}
break
case 'listjadibot': 
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
try {
let user = [... new Set([...global.conns.filter(gans => gans.user).map(gans => gans.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
y = await gans.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
gans.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
reply(`Belum Ada User Yang Jadibot`)
}
break
case 'owner': case 'creator': {
gans.sendContact(m.chat, global.owner, m)
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
gans.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'caridoi':
case 'cariteman':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
let teman = pickRandom(register)
setTimeout(() => {
reply('Sedang Mencari....')
}, 1000)
setTimeout(() => {
reply('Berhasil Mendapatkan Satu Orang')
}, 5000)
setTimeout(() => {
gans.sendMessage(from, {text: `Nih Kak @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
break

// ==========>Sticker/Convert Menu<========== \\
case 'sticker': 
case 's': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await gans.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await gans.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case'qc': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
const { quote } = require('./lib/quote.js')
if (!q) return reply('Masukan Text')
let ppnyauser = await await gans.profilePictureUrl(sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(q, pushname, ppnyauser)
reply(mess.wait)
gans.sendImageAsSticker(from, rest.result, m, { packname: `${wm}`, author: `${author}`})
}
break
case 'tourl': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!isMedia) return reply(`Kirim/Reply Foto/Vi Dengan Caption ${prefix + command}`)
reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await gans.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break

// ========== >PRIMBON MENU<======= \\
case 'nomerhoki': case 'nomorhoki': {
if (!Number(text)) return reply(`Example : ${prefix + command} 6288292024190`)
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'suamiistri': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artinama': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'kecocokannama': case 'cocoknama': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
gans.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
case 'sifatusaha': {
if (!ext)return reply(`Example : ${prefix+ command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
case 'rejeki': case 'rezeki': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'pekerjaan': case 'kerja': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
case 'potensipenyakit': case 'penyakit': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artitarot': case 'tarot': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'fengshui': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
case 'haribaik': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harisangar': case 'taliwangke': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harinaas': case 'harisial': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
case 'nagahari': case 'harinaga': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'peruntungan': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'weton': case 'wetonjawa': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
case 'sifat': case 'karakter': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
case 'keberuntungan': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
case 'memancing': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'masasubur': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'zodiak': case 'zodiac': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix+ command} 7 7 2005`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'shio': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)
gans.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}
break

// =========>FUN Menu<=========== \\
case 'memek':
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'peak':
case 'pantex':
case 'pantek':
case 'setan':
case 'iblis':
case 'cacat':
case 'yatim':
case 'piatu':
{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
gans.sendMessage(from, { text: `anak ${command} di sini adalah @${org.split('@')[0]}`, mentions: [org] }, { quoted: m })
}
break
case 'goblokcek':
case 'jelekcek':
case 'gaycek':
case 'rate':
case 'lesbicek':
case 'gantengcek':
case 'cantikcek':
case 'begocek':
case 'suhucek':
case 'pintercek':
case 'jagocek':
case 'nolepcek':
case 'babicek':
case 'bebancek':
case 'baikcek':
case 'jahatcek':
case 'anjingcek':
case 'haramcek':
case 'pakboycek':
case 'pakgirlcek':
case 'sangecek':
case 'bapercek':
case 'fakboycek':
case 'alimcek':
case 'suhucek':
case 'fakgirlcek':
case 'kerencek':
case 'wibucek':
case 'pasarkascek':
case 'kulcek': 
case 'cekgoblok':
case 'cekjelek':
case 'cekgay': 
case 'ceklesbi':
case 'cekganteng':
case 'cekcantik':
case 'cekbego':
case 'ceksuhu':
case 'cekpinter':
case 'cekjago':
case 'ceknolep':
case 'cekbabi':
case 'cekbeban':
case 'cekbaik':
case 'cekjahat':
case 'cekanjing':
case 'cekharam':
case 'cekpakboy':
case 'cekpakgirl':
case 'ceksange':
case 'cekbaper':
case 'cekfakboy':
case 'cekalim':
case 'ceksuhu':
case 'cekfakgirl':
case 'cekkeren':
case 'cekwibu':
case 'cekpasarkas':
case 'cekkul':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.isGroup) return reply(mess.group)
const cex = body.slice(0)
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
gans.sendMessage(from, { text: 'Pertanyaan : *' + cex + '*\nNomer : ' + `@${mentionByReply.split('@')[0]}` + '\nJawaban : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
gans.sendMessage(from, { text: 'Pertanyaan : *' + cex + '*\nNomer : ' + `@${mentionByTag[0].split('@')[0]}` + '\nJawaban : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
gans.sendMessage(from, { text: 'Pertanyaan : *' + cex + '*\nNomer : ' + `@${sender.split('@')[0]}` + '\nJawaban : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break

//==========>Other Menu<========= \\
case 'menfes': case 'confes':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (Object.values(men.anonymous).find(p => p.check(sender))) return reply("Anda masih didalam room")
if (m.isGroup) return reply(mess.private)
if (args.length < 1) return reply(`Penggunaan ${prefix+command} nomor|isi pesan\nContoh ${prefix+command} ${owner}|Hai Owner`)
if (text > 700) return reply(`Teks Kepanjangan`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
pesan = q.split('|')[1]
let cekno = await gans.onWhatsApp(num)
if (cekno.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
if (num === m.sender) return reply(`Tidak Bisa Menfess Ke Nomor Sendiri!!!`)
if (num === botNumber) return reply(`Tidak Bisa Menfess Ke Nomor bot!!!`)
var nomor = m.sender
let buttons = [
{ buttonId: '.leave', buttonText: { displayText: 'Biarin' }, type: 1 }
]
let buts = {
 text: `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu
(Pengirim Rahasia)

-------------------------------------->

💌 Pesan : ${pesan}

-------------------------------------->`,
 footer: `PENGIRIM RAHASIA
Anda Ingin Mengirimkan Pesan Ke Pacar/Sahabat/Teman/Doi/Mantan?
Tapi Tidak Ingin Tau Siapa Pengirimnya?
Kamu Bisa Menggunakan Bot Ini
Contoh Penggunaan: ${prefix+command} nomor|pesan untuknya

Contoh: ${prefix+command} 628xxxxxxxx|hai owner`,
 buttons: buttons,
 headerType: 2,
 }
gans.sendMessage(num, buts, { quoted: m })
lidt = `Sukses Mengirim Pesan
👤 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}
👥 Ke : wa.me/${q.split("|")[0].replace(/[^0-9]/g, '')}

⬡──⬡─────────⬡──⬡

Isi Pesan : ${pesan}

⬡──⬡─────────⬡──⬡`
var check = Object.values(men.anonymous).find(p => p.state == "WAITING")
if (!check) {
men.createRoom(sender, num)
console.log("[ MENFES ] Creating room for: " + sender);
return reply(lidt)
}
break
case 'leave':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (m.isGroup && itsMeGans && command == "leave") return gans.groupLeave(from)
if (m.isGroup) return reply("Only private chat")
var room = Object.values(men.anonymous).find(p => p.check(sender))
if (!room) return reply("Anda tidak berada didalam room")
reply("Bye...")
var other = room.other(sender)
delete men.anonymous[room.id]
if (other != "") gans.sendMessage(other, {
text: "Bye..."
})
if (command == "leave") break;
}
break
case 'gimage': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!q) return reply(`Mau Cari Foto apa?`)
bocil.googleImage(q).then(res => {
let pp = res
let pin = pp[Math.floor(Math.random() * pp.length)]
gans.sendMessage(from, { image: {url:pin}, caption: mess.succes }, {quoted:m})
})
}
break
case 'pin': case 'pinterest': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply(`Masukan Query\nEx: ${prefix + command} cwok cool`)
bocil.pinterest(text).then(res => {
let pp = res
let pin = pp[Math.floor(Math.random() * pp.length)]
gans.sendMessage(from, { image: { url: pin }, caption: 'nah' })
})
}
break
case 'gimage': case 'image': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if(!q) return reply(`Nyari Image Apa Kak?\nContoh: ${prefix + command} Natuto`)
bocil.googleImage(q).then(res => {
let pp = res
let jadi = pp[Math.floor(Math.random() * pp.length)]
gans.sendMessage(from, { image: {url:jadi}, caption: mess.succes })
})
}
break
case 'darkjoke': case 'darkjokes': case 'dark': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
let dar = require(`./scraper/darkjokes.json`)
let dark = dar[Math.floor(Math.random() * dar.length)]
let btn = [{buttonId: `${prefix+command}`, buttonText: {displayText: 'Next'}, type: 1}]
let jadinya = {
image: { url: dark },
caption: `Dark😵`,
footer: `© ${namabot}`,
buttons: btn,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${namabot} By ${author}`,
body:`© Created By ${namabot}`,
thumbnail: thumb,
mediaType:2,
mediaUrl: "wa.me//6281328938767",
sourceUrl: "wa.me//6281328938767"
}}
}
gans.sendMessage(m.chat, jadinya, {quoted:m})
}
break
case 'meme': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let mem = require(`./scraper/meme.json`)
let meme = mem[Math.floor(Math.random() * mem.length)]
let buttoons = [
{buttonId: `${prefix+command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessaage = {
image: { url: meme },
caption: `Nih Kak @${sender.split("@")[0]}`,
footer: `© ${namabot}`,
mentions: [sender],
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${namabot} By ${author}`,
body:`© Created By ${namabot}`,
thumbnail: thumb,
mediaType:2,
mediaUrl: "wa.me//6281328938767",
sourceUrl: "wa.me//6281328938767"
}}
}
/*const buttons = [
{ index: 1, urlButton: { displayText: `Join Group Official`, url: urlnya } },
{ index: 2, quickReplyButton: { displayText: `Next`, id: `.${command}` } }
]
const buttonMessage = {
image: { url: meme },
caption: `N\nI\nH\n\n\n\n\n\n`,
mentions:[sender],
footer: `© Created By ${namabot}`,
templateButtons: buttons,
headerType: 1
}*/
gans.sendMessage(m.chat, buttonMessaage, { quoted: m })
}
break
case 'ebinary': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!q) return reply(`Kirim/reply text dengan caption ${prefix + command}`)
reply(mess.wait)
let { eBinary } = require('./scraper/binary')
let eb = await eBinary(`${q}`)
reply(eb)
}
break
case 'dbinary': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!q) return reply(`Kirim/reply text dengan caption ${prefix + command}`)
reply(mess.wait)
let { dBinary } = require('./scraper/binary')
let db = await dBinary(`${q}`)
reply(db)
}
break
case 'wasted':
case 'comrade':
case 'horny':
case 'blur':
case 'pixelate':
case 'simpcard':
case 'lolice':
case 'gay':
case 'jail':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
try {
if (!isMedia) return reply(`Kirim/Reply Foto/Vi Dengan Caption ${prefix + command}`)
reply(mess.wait)
meeh = await gans.downloadAndSaveMediaMessage(quoted)
memh = await uptotelegra(meeh)
gdye = await getBuffer(`https://some-random-api.ml/canvas/${command}?avatar=${memh}`)
gans.sendImageAsSticker(m.chat, gdye, m, { packname: global.packname, author: global.author })
} catch (err) {
reply(`Reply Image Nya Bang`)
}
break
case 'ss': case 'ssweb':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!q) return reply(`Contoh ${prefix+command} link`)
reply(mess.wait)
let krt = await scp1.ssweb(q)
gans.sendMessage(m.chat,{image:krt.result,caption:mess.succes},{quoted:m})
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!m.quoted && !text) return reply(`Kirim/Reply Teks Dengan Caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
break
case 'obfus':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!q) return reply(`Contoh ${prefix+command} const kirbotz = require('kirbotz-api')`)
let meg = await obfus(q)
reply(`Sukses
${meg.result}`)
}
break
case 'tts': case 'gtts':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!q) return reply(` contoh : ${prefix+command} yamate kudasai`)
reply(mess.wait)
const gtts = require('./lib/gtts')(`id`, q)
var bby = args.join(' ')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
gans.sendMessage(m.chat,{audio:buff, mimetype: "audio/mp4", ptt:false},{quoted:m})
fs.unlinkSync(rano)
})
})
break
case 'toimg': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${prefix+command}*`)
let media = await gans.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
gans.sendMessage(m.chat, { image: buffer, caption: mess.succes }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'toonce': { 
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!quoted) return reply(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await gans.downloadAndSaveMediaMessage(quoted)
gans.sendMessage(m.chat, {image: {url:anuan}, caption: `Nih Kak`, fileLength: "99999999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await gans.downloadAndSaveMediaMessage(quoted)
gans.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Nih Kak`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case 'tovn':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
mee = await gans.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
gans.sendMessage(m.chat, { audio: { url: mem }, mimetype: 'audio/mp4', ptt:true, mentions:[m.sender]}, { quoted: m })
break
case 'tomp3': case 'toaudio': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply the Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
mee = await gans.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
gans.sendMessage(m.chat, { audio: { url: mem }, mimetype: 'audio/mp4', ptt:false, mentions:[m.sender]}, { quoted: m })
}
break
case 'smeme':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!q) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (isImage) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
reply(mess.wait)
mee = await gans.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${q}.png?background=${mem}`)
gans.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
break
case 'snobg': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!quoted) return reply(`Kirim/Reply Gambar Dengan Caption ${prefix+command}\n`)
if (/image/.test(mime)) {
let media = await gans.downloadAndSaveMediaMessage(quoted)
let encmedia = await gans.sendImageAsSticker(m.chat, await rmbg(media), m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar Dengan Caption ${prefix+command}`)
}
}
break
case 'ppcp': case 'couple': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
gans.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
gans.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
break
case 'removebg': {
if (!/image/.test(mime)) return reply(`Kirim/Reply Gambar Dengan Caption ${prefix+command}\n`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Gambar Dengan Caption ${prefix+command}\n`)
let qmsg = (quoted.msg || quoted)
let remobg = require('remove.bg')
let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './tmp/remobg-'+getRandom('')
localFile = await gans.downloadAndSaveMediaMessage(qmsg, hmm)
outputFile = await './tmp/hremo-'+getRandom('.png')
reply(mess.wait)
remobg.removeBackgroundFromImageFile({
path: localFile,
apiKey: apinobg,
size: "regular",
type: "auto",
scale: "100%",
outputFile 
}).then(async result => {
gans.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break
case 'tr': case 'translate': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
const { translate } = require('@vitalets/google-translate-api')
let lang, text
if (args.length >= 2) {
lang = args[0], text = args.slice(1).join(' ')
} else if (m.quoted && m.quoted.text) {
lang = args[0], text = m.quoted.text
} else return reply(`Ex: ${prefix + command} id hello world`)
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return reply(`Error: The language "${lang}" is not supported`)
reply(`*Hasil Translate*\n\n${res.text}`.trim())
}
break
case 'sc': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
reply(`Source Code:\nhttps://youtube.com/@survivofc\n\n*INFO CREATOR*\nName: Deffri\nStatus: Pelajar\nHobi: Editing, Gaming, ngoding:v`)
}
break
case 'tagme': {
gans.sendMessage(m.chat, { text: ` @${sender.split("@")[0]} `,mentions: [sender], }, {quoted:m})
}
break
case 'searchsticker': case 'stickersearch': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!text) return reply('Masukan Text nya')
stickersearch(text).then(res => {
let ff = res.sticker_url
let yeha = ff[Math.floor(Math.random() * ff.length)]
gans.sendImageAsSticker(from, yeha, m, { packname: global.packname, author: global.author })
})
}
break
case 'afk': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
}
break	
case 'cekme': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
bet = `${sender}`
let sifat = ['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
let hoby = ['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
let bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
let arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
let cakep = ['Iyaa cakep kek mimin','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget kek mimin😍','❌','✔️']
let wetak= ['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
let baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
let bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
let cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
let berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
let mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
let sipat = sifat[Math.floor(Math.random() * sifat.length)]
let biho = hoby[Math.floor(Math.random() * hoby.length)]
let bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
let senga = arp[Math.floor(Math.random() * arp.length)]
let chakep = cakep[Math.floor(Math.random() * cakep.length)]
let watak = wetak[Math.floor(Math.random() * wetak.length)]
let baik = baikk[Math.floor(Math.random() * baikk.length)]
let burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
let cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
let berani = berhani[Math.floor(Math.random() * berhani.length)]
let takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
profile = `*≡════《 Cek Sifat @${bet.split('@')[0]} 》════≡*

*Nama :* ${pushname}
*Sifat :* ${sipat}
*Hobby :* ${biho}
*Bucin :* ${bhucin}%
*Sange :* ${senga}%
*Cakep :* ${chakep}
*Watak :* ${watak}
*Akhlak Baik :* ${baik}%
*Akhlak Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Ketakutan :* ${takut}%

*≡═════《 CEKSIFATME 》═════≡*`
buff = await getBuffer(ppuser)
gans.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
}
break
case 'buyvip': case 'jadiowner': case 'sewabot':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
const seactiones = [
{
title: `LIST SEWABOT`,
rows: [
{title: `1 MINGGU`, rowId: `${prefix}nyewabot 1minggu`},
{title: `1 BULAN`, rowId: `${prefix}nyewabot 1bulan`},
{title: `3 BULAN`, rowId: `${prefix}nyewabot 3bulan`},
]
},
{
title: `LIST PREMIUM`,
rows: [
{title: `1 MINGGU`, rowId: `${prefix}uprem 1minggu`},
{title: `1 BULAN`, rowId: `${prefix}uprem 1bulan`},
{title: `3 BULAN`, rowId: `${prefix}uprem 3bulan`},
]
},
{
title: `LIST JADI OWNER`,
rows: [
{title: `1 MINGGU`, rowId: `${prefix}uowner 1minggu`},
{title: `1 BULAN`, rowId: `${prefix}uowner 1bulan`},
{title: `3 BULAN`, rowId: `${prefix}uowner 3bulan`},
]
}
]
const listSw = { 
text: `Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}`,
mentions: [sender],
footer: `Mau ${command} ya? Silahkan Pencet Di Bawah Ya Kak`,
buttonText: 'SELECT',
sections: seactiones,
listType: 1}
gans.sendMessage(m.sender, listSw, { quoted: m })
if (m.isGroup) return reply(`List Sudah Dikirim Dari Private Chatt. Silahkan Dipilih`)
}
break
case 'nyewabot':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if ((args[0]) == '1minggu'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
gans.sendMessage(creator,{text:`*┌─❏ ORDER ❏*
┆ *Orderan:* Sewa BOT
┆ *Expired:* 1 minggu
┆ *Jumlah:* 10K
┆ *buyer:* @${sender.split("@")[0]}
└─┈─┈─┈─┈─┈─┈⦾`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1bulan'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
gans.sendMessage(creator,{text:`*┌─❏ ORDER ❏*
┆ *Orderan:* Sewa BOT
┆ *Expired:* 1 Bulan
┆ *Jumlah:* 15K
┆ *buyer:* @${sender.split("@")[0]}
└─┈─┈─┈─┈─┈─┈⦾`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '3bulan'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
gans.sendMessage(creator,{text:`*┌─❏ ORDER ❏*
┆ *Orderan:* Sewa BOT
┆ *Expired:* 3 Bulan
┆ *Jumlah:* 25K
┆ *buyer:* @${sender.split("@")[0]}
└─┈─┈─┈─┈─┈─┈⦾`,mentions: [sender], },{quoted:m})
}
break
case 'uprem':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if ((args[0]) == '1minggu'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
gans.sendMessage(creator,{text:`*┌─❏ ORDER ❏*
┆ *Orderan:* User VIP
┆ *Expired:* 1 Minggu
┆ *Jumlah:* 5K
┆ *buyer:* @${sender.split("@")[0]}
└─┈─┈─┈─┈─┈─┈⦾`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1bulan'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
gans.sendMessage(creator,{text:`*┌─❏ ORDER ❏*
┆ *Orderan:* User VIP
┆ *Expired:* 1 Bulan
┆ *Jumlah:* 10K
┆ *buyer:* @${sender.split("@")[0]}
└─┈─┈─┈─┈─┈─┈⦾`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '3bulan'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
gans.sendMessage(creator,{text:`*┌─❏ ORDER ❏*
┆ *Orderan:* User VIP
┆ *Expired:* 3 Bulan
┆ *Jumlah:* 20K
┆ *buyer:* @${sender.split("@")[0]}
└─┈─┈─┈─┈─┈─┈⦾`,mentions: [sender], },{quoted:m})
}
break
case 'uowner':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if ((args[0]) == '1minggu'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
gans.sendMessage(creator,{text:`*┌─❏ ORDER ❏*
┆ *Orderan:* Jadi Owner 
┆ *Expired:* 1 Minggu
┆ *Jumlah:* 10K
┆ *buyer:* @${sender.split("@")[0]}
└─┈─┈─┈─┈─┈─┈⦾`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1bulan'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
gans.sendMessage(creator,{text:`*┌─❏ ORDER ❏*
┆ *Orderan:* Jadi Owner 
┆ *Expired:* 1 Bulan
┆ *Jumlah:* 20K
┆ *buyer:* @${sender.split("@")[0]}
└─┈─┈─┈─┈─┈─┈⦾`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '3bulan'){
reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
gans.sendMessage(creator,{text:`*┌─❏ ORDER ❏*
┆ *Orderan:* Jadi Owner 
┆ *Expired:* 3 Bulan
┆ *Jumlah:* 30K
┆ *buyer:* @${sender.split("@")[0]}
└─┈─┈─┈─┈─┈─┈⦾`,mentions: [sender], },{quoted:m})
}
break

// ============>BUG MENU<========== \\

//Sementara Gada Bug Dulu Cuy

// ==========>Cerpen Menu<======== \\
case 'cerpen_anak': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let cerpe = await cerpen(`anak`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen_bahasadaerah':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let cerpet = await cerpen(`bahasa daerah`)
reply(`⭔ _*Title :*_ ${cerpet.title}\n⭔ _*Author :*_ ${cerpet.author}\n⭔ _*Category :*_ ${cerpet.kategori}\n⭔ _*Pass Moderation :*_ ${cerpet.lolos}\n⭔ _*Story :*_\n${cerpet.cerita}`)
}
break
case 'cerpen_bahasainggris':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let cerpez = await cerpen(`bahasa Inggris`)
reply(`⭔ _*Title :*_ ${cerpez.title}\n⭔ _*Author :*_ ${cerpez.author}\n⭔ _*Category :*_ ${cerpez.kategori}\n⭔ _*Pass Moderation :*_ ${cerpez.lolos}\n⭔ _*Story :*_\n${cerpez.cerita}`)
}
break
case 'cerpen_bahasajawa':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let cerpep = await cerpen(`bahasa jawa`)
reply(`⭔ _*Title :*_ ${cerpep.title}\n⭔ _*Author :*_ ${cerpep.author}\n⭔ _*Category :*_ ${cerpep.kategori}\n⭔ _*Pass Moderation :*_ ${cerpep.lolos}\n⭔ _*Story :*_\n${cerpep.cerita}`)
}
break
case 'cerpen_bahasasunda':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let cerped = await cerpen(`bahasa sunda`)
reply(`⭔ _*Title :*_ ${cerped.title}\n⭔ _*Author :*_ ${cerped.author}\n⭔ _*Category :*_ ${cerped.kategori}\n⭔ _*Pass Moderation :*_ ${cerped.lolos}\n⭔ _*Story :*_\n${cerped.cerita}`)
}
break
case 'cerpen_budaya':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let cerper = await cerpen(`budaya`)
reply(`⭔ _*Title :*_ ${cerper.title}\n⭔ _*Author :*_ ${cerper.author}\n⭔ _*Category :*_ ${cerper.kategori}\n⭔ _*Pass Moderation :*_ ${cerper.lolos}\n⭔ _*Story :*_\n${cerper.cerita}`)
}
break
case 'cerpen_cinta':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let cerpem = await cerpen(`cinta`)
reply(`⭔ _*Title :*_ ${cerpem.title}\n⭔ _*Author :*_ ${cerpem.author}\n⭔ _*Category :*_ ${cerpem.kategori}\n⭔ _*Pass Moderation :*_ ${cerpem.lolos}\n⭔ _*Story :*_\n${cerpem.cerita}`)
}
break
case 'cerpen_cintaislami':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let cerpel = await cerpen(`cinta islami`)
reply(`⭔ _*Title :*_ ${cerpel.title}\n⭔ _*Author :*_ ${cerpel.author}\n⭔ _*Category :*_ ${cerpel.kategori}\n⭔ _*Pass Moderation :*_ ${cerpel.lolos}\n⭔ _*Story :*_\n${cerpel.cerita}`)
}
break
case 'cerpen_cintapertama':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let cerpes = await cerpen(`cinta pertama`)
reply(`⭔ _*Title :*_ ${cerpes.title}\n⭔ _*Author :*_ ${cerpes.author}\n⭔ _*Category :*_ ${cerpes.kategori}\n⭔ _*Pass Moderation :*_ ${cerpes.lolos}\n⭔ _*Story :*_\n${cerpes.cerita}`)
}
break
case 'cerpen_cintaromantis':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let cerpde = await cerpen(`cinta romantis`)
reply(`⭔ _*Title :*_ ${cerpde.title}\n⭔ _*Author :*_ ${cerpde.author}\n⭔ _*Category :*_ ${cerpde.kategori}\n⭔ _*Pass Moderation :*_ ${cerpde.lolos}\n⭔ _*Story :*_\n${cerpde.cerita}`)
}
break
case 'cerpen_cintasedih':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let fejdj = await cerpen(`cinta sedih`)
reply(`⭔ _*Title :*_ ${fejdj.title}\n⭔ _*Author :*_ ${fejdj.author}\n⭔ _*Category :*_ ${fejdj.kategori}\n⭔ _*Pass Moderation :*_ ${fejdj.lolos}\n⭔ _*Story :*_\n${fejdj.cerita}`)
}
break
case 'cerpen_cintasegitiga':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let frofk = await cerpen(`Cinta segitiga`)
reply(`⭔ _*Title :*_ ${frofk.title}\n⭔ _*Author :*_ ${frofk.author}\n⭔ _*Category :*_ ${frofk.kategori}\n⭔ _*Pass Moderation :*_ ${frofk.lolos}\n⭔ _*Story :*_\n${frofk.cerita}`)
}
break
case 'cerpen_cintasejati':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let frljkek = await cerpen(`cinta sejati`)
reply(`⭔ _*Title :*_ ${frljkek.title}\n⭔ _*Author :*_ ${frljkek.author}\n⭔ _*Category :*_ ${frljkek.kategori}\n⭔ _*Pass Moderation :*_ ${frljkek.lolos}\n⭔ _*Story :*_\n${frljkek.cerita}`)
}
break
case 'cerpen_galau':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let cdjfj = await cerpen(`galau`)
reply(`⭔ _*Title :*_ ${cdjfj.title}\n⭔ _*Author :*_ ${cdjfj.author}\n⭔ _*Category :*_ ${cdjfj.kategori}\n⭔ _*Pass Moderation :*_ ${cdjfj.lolos}\n⭔ _*Story :*_\n${cdjfj.cerita}`)
}
break
case 'cerpen_gokil':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let vrkfjf = await cerpen(`gokil`)
reply(`⭔ _*Title :*_ ${vrkfjf.title}\n⭔ _*Author :*_ ${vrkfjf.author}\n⭔ _*Category :*_ ${vrkfjf.kategori}\n⭔ _*Pass Moderation :*_ ${vrkfjf.lolos}\n⭔ _*Story :*_\n${vrkfjf.cerita}`)
}
break
case 'cerpen_inspiratif':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let ngkgk = await cerpen(`inspiratif`)
reply(`⭔ _*Title :*_ ${ngkgk.title}\n⭔ _*Author :*_ ${ngkgk.author}\n⭔ _*Category :*_ ${ngkgk.kategori}\n⭔ _*Pass Moderation :*_ ${ngkgk.lolos}\n⭔ _*Story :*_\n${ngkgk.cerita}`)
}
break
case 'cerpen_jepang':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let vrlgk = await cerpen(`jepang`)
reply(`⭔ _*Title :*_ ${vrlgk.title}\n⭔ _*Author :*_ ${vrlgk.author}\n⭔ _*Category :*_ ${vrlgk.kategori}\n⭔ _*Pass Moderation :*_ ${vrlgk.lolos}\n⭔ _*Story :*_\n${vrlgk.cerita}`)
}
break
case 'cerpen_kehidupan':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let ntlgkt = await cerpen(`kehidupan`)
reply(`⭔ _*Title :*_ ${ntlgkt.title}\n⭔ _*Author :*_ ${ntlgkt.author}\n⭔ _*Category :*_ ${ntlgkt.kategori}\n⭔ _*Pass Moderation :*_ ${ntlgkt.lolos}\n⭔ _*Story :*_\n${ntlgkt.cerita}`)
}
break
case 'cerpen_keluarga':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let bmflg = await cerpen(`keluarga`)
reply(`⭔ _*Title :*_ ${bmflg.title}\n⭔ _*Author :*_ ${bmflg.author}\n⭔ _*Category :*_ ${bmflg.kategori}\n⭔ _*Pass Moderation :*_ ${bmflg.lolos}\n⭔ _*Story :*_\n${bmflg.cerita}`)
}
break
case 'cerpen_kisahnyata':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let yptoo = await cerpen(`kisah nyata`)
reply(`⭔ _*Title :*_ ${yptoo.title}\n⭔ _*Author :*_ ${yptoo.author}\n⭔ _*Category :*_ ${yptoo.kategori}\n⭔ _*Pass Moderation :*_ ${yptoo.lolos}\n⭔ _*Story :*_\n${yptoo.cerita}`)
}
break
case 'cerpen_korea':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let jptpgr = await cerpen(`korea`)
reply(`⭔ _*Title :*_ ${jptpgr.title}\n⭔ _*Author :*_ ${jptpgr.author}\n⭔ _*Category :*_ ${jptpgr.kategori}\n⭔ _*Pass Moderation :*_ ${jptpgr.lolos}\n⭔ _*Story :*_\n${jptpgr.cerita}`)
}
break
case 'cerpen_kristen':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let yesusanjing = await cerpen(`kristen`)
reply(`⭔ _*Title :*_ ${yesusanjing.title}\n⭔ _*Author :*_ ${yesusanjing.author}\n⭔ _*Category :*_ ${yesusanjing.kategori}\n⭔ _*Pass Moderation :*_ ${yesusanjing.lolos}\n⭔ _*Story :*_\n${yesusanjing.cerita}`)
}
break
case 'cerpen_liburan':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let frkfkrk = await cerpen(`liburan`)
reply(`⭔ _*Title :*_ ${frkfkrk.title}\n⭔ _*Author :*_ ${frkfkrk.author}\n⭔ _*Category :*_ ${frkfkrk.kategori}\n⭔ _*Pass Moderation :*_ ${frkfkrk.lolos}\n⭔ _*Story :*_\n${frkfkrk.cerita}`)
}
break
case 'cerpen_malaysia':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let mzbdjd = await cerpen(`malaysia`)
reply(`⭔ _*Title :*_ ${mzbdjd.title}\n⭔ _*Author :*_ ${mzbdjd.author}\n⭔ _*Category :*_ ${mzbdjd.kategori}\n⭔ _*Pass Moderation :*_ ${mzbdjd.lolos}\n⭔ _*Story :*_\n${mzbdjd.cerita}`)
}
break
case 'cerpen_mengharukan':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let bgfngk = await cerpen(`mengharukan`)
reply(`⭔ _*Title :*_ ${bgfngk.title}\n⭔ _*Author :*_ ${bgfngk.author}\n⭔ _*Category :*_ ${bgfngk.kategori}\n⭔ _*Pass Moderation :*_ ${bgfngk.lolos}\n⭔ _*Story :*_\n${bgfngk.cerita}`)
}
break
case 'cerpen_misteri':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let lapdoek = await cerpen(`misteri`)
reply(`⭔ _*Title :*_ ${lapdoek.title}\n⭔ _*Author :*_ ${lapdoek.author}\n⭔ _*Category :*_ ${lapdoek.kategori}\n⭔ _*Pass Moderation :*_ ${lapdoek.lolos}\n⭔ _*Story :*_\n${lapdoek.cerita}`)
}
break
case 'cerpen_motivasi':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
if (!isVIP) return notVIP(mess.premium)
reply(mess.wait)
let bltkyj = await cerpen(`motivasi`)
reply(`⭔ _*Title :*_ ${bltkyj.title}\n⭔ _*Author :*_ ${bltkyj.author}\n⭔ _*Category :*_ ${bltkyj.kategori}\n⭔ _*Pass Moderation :*_ ${bltkyj.lolos}\n⭔ _*Story :*_\n${bltkyj.cerita}`)
}
break
case 'cerpen_nasihat':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let qpeidek = await cerpen(`nasihat`)
reply(`⭔ _*Title :*_ ${qpeidek.title}\n⭔ _*Author :*_ ${qpeidek.author}\n⭔ _*Category :*_ ${qpeidek.kategori}\n⭔ _*Pass Moderation :*_ ${qpeidek.lolos}\n⭔ _*Story :*_\n${qpeidek.cerita}`)
}
break
case 'cerpen_nasionalisme':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let cdmrgo = await cerpen(`nasionalisme`)
reply(`⭔ _*Title :*_ ${cdmrgo.title}\n⭔ _*Author :*_ ${cdmrgo.author}\n⭔ _*Category :*_ ${cdmrgo.kategori}\n⭔ _*Pass Moderation :*_ ${cdmrgo.lolos}\n⭔ _*Story :*_\n${cdmrgo.cerita}`)
}
break
case 'cerpen_olahraga':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let qpdiek = await cerpen(`olahraga`)
reply(`⭔ _*Title :*_ ${qpdiek.title}\n⭔ _*Author :*_ ${qpdiek.author}\n⭔ _*Category :*_ ${qpdiek.kategori}\n⭔ _*Pass Moderation :*_ ${qpdiek.lolos}\n⭔ _*Story :*_\n${qpdiek.cerita}`)
}
break
case 'cerpen_patahhati':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let vrlfor = await cerpen(`patah hati`)
reply(`⭔ _*Title :*_ ${vrlfor.title}\n⭔ _*Author :*_ ${vrlfor.author}\n⭔ _*Category :*_ ${vrlfor.kategori}\n⭔ _*Pass Moderation :*_ ${vrlfor.lolos}\n⭔ _*Story :*_\n${vrlfor.cerita}`)
}
break
case 'cerpen_penantian':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let aldpek = await cerpen(`penantian`)
reply(`⭔ _*Title :*_ ${aldpek.title}\n⭔ _*Author :*_ ${aldpek.author}\n⭔ _*Category :*_ ${aldpek.kategori}\n⭔ _*Pass Moderation :*_ ${aldpek.lolos}\n⭔ _*Story :*_\n${aldpek.cerita}`)
}
break
case 'cerpen_pendidikan':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let xnrjrk = await cerpen(`pendidikan`)
reply(`⭔ _*Title :*_ ${xnrjrk.title}\n⭔ _*Author :*_ ${xnrjrk.author}\n⭔ _*Category :*_ ${xnrjrk.kategori}\n⭔ _*Pass Moderation :*_ ${xnrjrk.lolos}\n⭔ _*Story :*_\n${xnrjrk.cerita}`)
}
break
case 'cerpen_pengalaman':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let hrkgor = await cerpen(`pengalaman pribadi`)
reply(`⭔ _*Title :*_ ${hrkgor.title}\n⭔ _*Author :*_ ${hrkgor.author}\n⭔ _*Category :*_ ${hrkgor.kategori}\n⭔ _*Pass Moderation :*_ ${hrkgor.lolos}\n⭔ _*Story :*_\n${hrkgor.cerita}`)
}
break
case 'cerpen_pengorbanan':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let itklog = await cerpen(`pengorbanan`)
reply(`⭔ _*Title :*_ ${itklog.title}\n⭔ _*Author :*_ ${itklog.author}\n⭔ _*Category :*_ ${itklog.kategori}\n⭔ _*Pass Moderation :*_ ${itklog.lolos}\n⭔ _*Story :*_\n${itklog.cerita}`)
}
break
case 'cerpen_penyesalan':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let pgrjgo = await cerpen(`penyesalan`)
reply(`⭔ _*Title :*_ ${pgrjgo.title}\n⭔ _*Author :*_ ${pgrjgo.author}\n⭔ _*Category :*_ ${pgrjgo.kategori}\n⭔ _*Pass Moderation :*_ ${pgrjgo.lolos}\n⭔ _*Story :*_\n${pgrjgo.cerita}`)
}
break
case 'cerpen_perjuangan':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let vtlgotk = await cerpen(`perjuangan`)
reply(`⭔ _*Title :*_ ${vtlgotk.title}\n⭔ _*Author :*_ ${vtlgotk.author}\n⭔ _*Category :*_ ${vtlgotk.kategori}\n⭔ _*Pass Moderation :*_ ${vtlgotk.lolos}\n⭔ _*Story :*_\n${vtlgotk.cerita}`)
}
break
case 'cerpen_perpisahan':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let wpfuej = await cerpen(`perpisahan`)
reply(`⭔ _*Title :*_ ${wpfuej.title}\n⭔ _*Author :*_ ${wpfuej.author}\n⭔ _*Category :*_ ${wpfuej.kategori}\n⭔ _*Pass Moderation :*_ ${wpfuej.lolos}\n⭔ _*Story :*_\n${wpfuej.cerita}`)
}
break
case 'cerpen_persahabatan':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let jptoyk = await cerpen(`persahabatan`)
reply(`⭔ _*Title :*_ ${jptoyk.title}\n⭔ _*Author :*_ ${jptoyk.author}\n⭔ _*Category :*_ ${jptoyk.kategori}\n⭔ _*Pass Moderation :*_ ${jptoyk.lolos}\n⭔ _*Story :*_\n${jptoyk.cerita}`)
}
break
case 'cerpen_petualangan':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let qwers = await cerpen(`petualangan`)
reply(`⭔ _*Title :*_ ${qwers.title}\n⭔ _*Author :*_ ${qwers.author}\n⭔ _*Category :*_ ${qwers.kategori}\n⭔ _*Pass Moderation :*_ ${qwers.lolos}\n⭔ _*Story :*_\n${qwers.cerita}`)
}
break
case 'cerpen_ramadhan':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let vrmfkk = await cerpen(`ramadhan`)
reply(`⭔ _*Title :*_ ${vrmfkk.title}\n⭔ _*Author :*_ ${vrmfkk.author}\n⭔ _*Category :*_ ${vrmfkk.kategori}\n⭔ _*Pass Moderation :*_ ${vrmfkk.lolos}\n⭔ _*Story :*_\n${vrmfkk.cerita}`)
}
break
case 'cerpen_remaja':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let vhptotk = await cerpen(`remaja`)
reply(`⭔ _*Title :*_ ${vhptotk.title}\n⭔ _*Author :*_ ${vhptotk.author}\n⭔ _*Category :*_ ${vhptotk.kategori}\n⭔ _*Pass Moderation :*_ ${vhptotk.lolos}\n⭔ _*Story :*_\n${vhptotk.cerita}`)
}
break
case 'cerpen_rindu':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let hptotlltk = await cerpen(`rindu`)
reply(`⭔ _*Title :*_ ${hptotlltk.title}\n⭔ _*Author :*_ ${hptotlltk.author}\n⭔ _*Category :*_ ${hptotlltk.kategori}\n⭔ _*Pass Moderation :*_ ${hptotlltk.lolos}\n⭔ _*Story :*_\n${hptotlltk.cerita}`)
}
break
case 'cerpen_rohani':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let zaldjdws = await cerpen(`rohani`)
reply(`⭔ _*Title :*_ ${zaldjdws.title}\n⭔ _*Author :*_ ${zaldjdws.author}\n⭔ _*Category :*_ ${zaldjdws.kategori}\n⭔ _*Pass Moderation :*_ ${zaldjdws.lolos}\n⭔ _*Story :*_\n${zaldjdws.cerita}`)
}
break
case 'cerpen_romantis':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let lxprhrh = await cerpen(`romantis`)
reply(`⭔ _*Title :*_ ${lxprhrh.title}\n⭔ _*Author :*_ ${lxprhrh.author}\n⭔ _*Category :*_ ${lxprhrh.kategori}\n⭔ _*Pass Moderation :*_ ${lxprhrh.lolos}\n⭔ _*Story :*_\n${lxprhrh.cerita}`)
}
break
case 'cerpen_sastra':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let qpifker = await cerpen(`sastra`)
reply(`⭔ _*Title :*_ ${qpifker.title}\n⭔ _*Author :*_ ${qpifker.author}\n⭔ _*Category :*_ ${qpifker.kategori}\n⭔ _*Pass Moderation :*_ ${qpifker.lolos}\n⭔ _*Story :*_\n${qpifker.cerita}`)
}
break
case 'cerpen_sedih':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let bmflgkjt = await cerpen(`sedih`)
reply(`⭔ _*Title :*_ ${bmflgkjt.title}\n⭔ _*Author :*_ ${bmflgkjt.author}\n⭔ _*Category :*_ ${bmflgkjt.kategori}\n⭔ _*Pass Moderation :*_ ${bmflgkjt.lolos}\n⭔ _*Story :*_\n${bmflgkjt.cerita}`)
}
break
case 'cerpen_sejarah':{
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
reply(mess.wait)
let xwpwifj = await cerpen(`sejarah`)
reply(`⭔ _*Title :*_ ${xwpwifj.title}\n⭔ _*Author :*_ ${xwpwifj.author}\n⭔ _*Category :*_ ${xwpwifj.kategori}\n⭔ _*Pass Moderation :*_ ${xwpwifj.lolos}\n⭔ _*Story :*_\n${xwpwifj.cerita}`)
}
break

// =======>Main Menu=========== \\
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break
case 'runtime': {
let babi = `BOT Telah Online Selama\n${runtime(process.uptime())}`
const buttons = [
{ buttonId: '.menu', buttonText: { displayText: 'MENU' }, type: 1 }
]
const buttonMessage = {
document: { url: "https://wa.me/6281328938767" },
mimetype: global.docx,
fileName: `${runtime(process.uptime())}`,
fileLength: 88808964843634667969,
pageCount: 1234567890123456789012345,
caption: babi,
footer: packname,
buttons: buttons,
headerType: 1
}
gans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'speedtest': {
reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) reply(stdout)
if (stderr.trim()) reply(stderr)
}
}
break
case 'donasi': case 'donate': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
let pikey = `*────── 「 DONATE 」 ──────*
Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • ALL Payment 〕
├🔃 Scan Barcod Qrisnya diatas🤗
└────
Berapapun donasi kalian akan sangat berarti 👍
𝐀𝐫𝐢𝐠𝐚𝐭𝐨𝐮!!!

${donasi}

Contact person Owner:
wa.me/${owner} (Owner)`
let btn = [{buttonId: `.owner`, buttonText: {displayText: `Contact Owner`}, type: 1}]
const gaslah = {
image: {url:qris},
caption: pikey,
footer: wm,
buttons: btn,
headerType: 4
}
gans.sendMessage(from, gaslah, {quoted:m})
}
break
case 'totalcase': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
fs.readFile('./gans.js', 'utf8', (err, data) => {
  if (err) throw err;

let regex = /case\s'(\w+)'/g;
let match, caseNames = [];
while ((match = regex.exec(data)) !== null) {
caseNames.push(match[1]);
}

let output = '• ' + caseNames.join('\n• ');
reply(output + `\nTotal case : ${caseNames.length}`);
});
}
break
case 'menu': {
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
let str = `*Hai Ngab*`
let wibu = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/waifu.json')
let thumb = wibu[Math.floor(Math.random() * wibu.length)];
let btn = [{buttonId: `.allmenu`, buttonText: {displayText: `ALL MENU`}, type: 1}]
let avv = foot(namabot, author, creator, pushname)
/*let hasilnya = {
image: { url: thumb },
caption: str,
footer: isi,
buttons: btn,
headerType: 4,
contextInfo: {
forwardingScore: '99999999999999',
externalAdReply: { body: 'hallo',
containsAutoReply: true,
mediaType: 1,
mediaUrl: urlnya,
renderLargerThumbnail: true,
showAdAttribution: true,
sourceId: 'Tes',
sourceType: 'PDF',
previewType: 'PDF',
sourceUrl: urlnya,
thumbnail: fs.readFileSync(`./thumbnail.jpg`),
thumbnailUrl: urlnya,
title: `Iruzruzz\n${harinya}Hari ${jamnya}Jam ${menitnya}Menit ${detiknya}Detik`}}}*/
gans.sendMessage(m.chat, {
image: { url: thumb },
caption: str,
footer: avv,
mentions:[creator],
buttons: btn,
headerType: 4,
contextInfo: {
forwardingScore: '99999999999999',
externalAdReply: { body: 'hallo',
containsAutoReply: true,
mediaType: 1,
mediaUrl: urlnya,
renderLargerThumbnail: true,
showAdAttribution: true,
sourceId: 'Tes',
sourceType: 'PDF',
previewType: 'PDF',
sourceUrl: urlnya,
thumbnail: fs.readFileSync(`./thumbnail.jpg`),
thumbnailUrl: urlnya,
title: `Iruzruzz\n${harinya}Hari ${jamnya}Jam ${menitnya}Menit ${detiknya}Detik`}}}, { quoted: m })
}
break
case 'allmenu':
if (!isRegister) return gans.sendMessage(from, butonna, { quoted: m })
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const serialUser = createSerial(18)
var no = 1
var ad = 1
gansMessage(m.chat, { 
text: allmenu(prefix, namabot, ownerName, creator, runtime, register, sender, itsMeGans, isVIP, no, ad, pushname),
mentions:[creator, sender],
contextInfo:{
mentionedJid:[creator, sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Iruzruz\n${harinya}Hari ${jamnya}Jam ${menitnya}Menit ${detiknya}Detik`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": thumb,
"mediaUrl": urlnya,
"sourceUrl": urlnya
}
}
})
break

default:
}

if (budy.startsWith('=>')) {
if (!itsMeGans) return reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!itsMeGans) return reply(mess.owner)
try {
reply(mess.wait)
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}
if (budy.startsWith('$')){
if (!itsMeGans) return reply(mess.owner)
reply(`executing`)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('assalamualaikum')){
reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa'alaikumussalam wr.wb._`)
}
if (budy.startsWith('Assalamualaikum')){
reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa'alaikumussalam wr.wb._`)
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
gans.sendMessage(`${creator}`, { text: "Hallo Owner Sepertinya Ada Yang Error Harap Di Perbaiki " + util.format(e), 
contextInfo:{
forwardingScore: 5, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})