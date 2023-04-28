//Created By Deffri Gans
//By GansBOTz
//Lu setting aja Sepuas lu disini

const fs = require('fs')
const chalk = require('chalk')

require("./lib/vn")
require('./scraper/tiktok')

global.keyai = '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'
global.urlnya = `https://chat.whatsapp.com/JD0hT9pUOErDklAMCrXsnU`
global.docx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.channel = `https://chat.whatsapp.com/JD0hT9pUOErDklAMCrXsnU`

global.creator = "6281328938767@s.whatsapp.net"
global.premiun = '6281328938767'
global.owner = ["6281328938767"]
global.ownerName = 'Iruz'
global.wm = 'Ruz'
global.namabot = 'IruzBot'
global.packname = 'IruzBot'
global.sessionName = 'Gans'
global.author = '🗿'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    wait: 'Tunggu Sebentar bwanh!!',
    succes: 'Suksess bwanh',
    admin: 'Lu Bukan Admin, Gausah Ngatur!!',
    botAdmin: 'Bot Belum Admin Kocak',
    owner: 'Lu Siapa? Sok Asik ngatur Gw',
    group: 'Khusus Grup bwanh',
    user: 'Kamu Harus Daftar Agar Bisa Menggunakan Fitur BOT',
    private: 'Khusus Privat Chatt bwanh',
    bot: 'Fitur Ini Khusus BOT!!!',
    error: 'Error 504',
    premium: `Kamu Belum Menjadi User VIP. \nHububgi Owner Untuk Order Menjadi User VIP`
}

global.donasi = `⚠️ *WARNING* ⚠️
SETELAH MELAKUKAN SCAN QR QRIS DIATAS KIRIM BUKTI SS KEPADA OWNER...
JIKA TIDAK, SALDO YANG KALIAN DONASIKAN TIDAK AKAN BISA DI TERIMA DARI PIHAK APLIKASI.` //dikosongin aja yah kalau kalian ga pake qris Dari minipul

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

global.thumb = fs.readFileSync('./thumbnail.jpg')
global.thumbb = { url: 'https://telegra.ph/file/13ff6024b827b76b303a5.jpg' }
global.qris = 'https://telegra.ph/file/1b095422db8a32b5ccaf8.jpg'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})