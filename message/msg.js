const chalk = require('chalk')

const fs = require('fs')

global.allmenu = (prefix, namabot, ownerName, creator, runtime, register, sender, itsMeGans, isVIP, no, ad, pushname) => {

return `Hai Kak @${sender.split("@")[0]}\n\n╭╌────⩥ Ꮖᑎᖴᝪ ᗷᝪᎢ

│┍━┅┅━ↂ ᢳ─⟪ *${namabot}* ⟫─ᐕ

┊├⩥ ᴏᴡɴᴇʀ: ${ownerName}

┊├⩥ Tᴀɢ: @${creator.split("@")[0]}

┆├⩥ Lɪʙʀᴀʀʏ : Baileys - Multi Device

┆├⩥ Lᴀɴɢᴜᴀɢᴇ : JavaScript

┆├⩥ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}

┆├⩥ Usᴇʀ : ${register.length} User

┆╰─┄─┄─┄─┄─⟤

├┬───┈──⩥ Ꮖᑎᖴᝪ ᑌᔑᗴᖇ

┆│⦔ Nᴀᴍᴇ: ${pushname}

┆│⦔ Tᴀɢ: @${sender.split("@")[0]}

┆│⦔ Nᴏᴍᴏʀ: ${sender.split("@")[0]}

┆│⦔ Status: ${itsMeGans ? 'Owner' : 'User'}

┆│⦔ Sᴛᴀᴛᴜs VIP: ${isVIP ? 'VIP User' : 'Free User'}

╰┼─┄─┈─┈─┈─⟤

╔╎

╠╪════════╫➼

║┝❏ ⓥ: VIP Only

║┝❏ Ⓞ: Owner Only

║┝❏ Ⓕ: Free

║┝❏ Ⓖ: Group Only

║╰╼╾╼╾╼╾╼╾╼╾╼╾◯ 

╚════════════♰

▱▰▱▰▱▰▱▰▱▰▱▰▱▰

╭──◊ ❮ *Main Menu* ❯

│${no++} ▻ ${prefix}menu

│${no++} ▻ ${prefix}allmenu

│${no++} ▻ ${prefix}totalcase

│${no++} ▻ ${prefix}ai

│${no++} ▻ ${prefix}ai-img

│${no++} ▻ ${prefix}sewabot

│${no++} ▻ ${prefix}donasi

│${no++} ▻ ${prefix}owner

│${no++} ▻ ${prefix}jadiowner

│${no++} ▻ ${prefix}buyvip

╰───────────◈☽

╭──◊ ❮ *Group Menu* ❯

│${no++} ▻ ${prefix}antilink 🅖

│${no++} ▻ ${prefix}setnamegc 🅖

│${no++} ▻ ${prefix}setdesk 🅖

│${no++} ▻ ${prefix}add 🅖

│${no++} ▻ ${prefix}kick 🅖

│${no++} ▻ ${prefix}promote 🅖

│${no++} ▻ ${prefix}demote 🅖

│${no++} ▻ ${prefix}hidetag 🅖

│${no++} ▻ ${prefix}tagall 🅖

│${no++} ▻ ${prefix}group 🅖

│${no++} ▻ ${prefix}opentime 🅖

│${no++} ▻ ${prefix}closetime 🅖

│${no++} ▻ ${prefix}setppgroup 🅖

╰───────────◈☽

╭──◊ ❮ *VIP Menu* ❯

│${no++} ▻ ${prefix}jadibot 🅥

│${no++} ▻ ${prefix}listjadibot 🅥

│${no++} ▻ ${prefix}cry 🅥

│${no++} ▻ ${prefix}kill 🅥

│${no++} ▻ ${prefix}hug 🅥

│${no++} ▻ ${prefix}pat 🅥

│${no++} ▻ ${prefix}lick 🅥 

│${no++} ▻ ${prefix}kiss 🅥

│${no++} ▻ ${prefix}bite 🅥

│${no++} ▻ ${prefix}yeet 🅥

│${no++} ▻ ${prefix}bully 🅥

│${no++} ▻ ${prefix}bonk 🅥

│${no++} ▻ ${prefix}wink 🅥

│${no++} ▻ ${prefix}poke 🅥

│${no++} ▻ ${prefix}nom 🅥

│${no++} ▻ ${prefix}slap 🅥

│${no++} ▻ ${prefix}smile 🅥 

│${no++} ▻ ${prefix}wave 🅥

│${no++} ▻ ${prefix}awoo 🅥

│${no++} ▻ ${prefix}blush 🅥

│${no++} ▻ ${prefix}smug 🅥

│${no++} ▻ ${prefix}glomp 🅥 

│${no++} ▻ ${prefix}happy 🅥

│${no++} ▻ ${prefix}dance 🅥

│${no++} ▻ ${prefix}cringe 🅥

│${no++} ▻ ${prefix}cuddle 🅥

│${no++} ▻ ${prefix}highfive 🅥 

│${no++} ▻ ${prefix}shinobu 🅥

│${no++} ▻ ${prefix}handhold 🅥

│${no++} ▻ ${prefix}caridoi 🅥

│${no++} ▻ ${prefix}cariteman 🅥

╰───────────◈☽

╭──◊ ❮ *NSFW Menu* ❯

│${no++} ▻ ${prefix}ahegao 🅥

│${no++} ▻ ${prefix}ass 🅥

│${no++} ▻ ${prefix}bdsm 🅥

│${no++} ▻ ${prefix}blowjob 🅥

│${no++} ▻ ${prefix}cuckold 🅥

│${no++} ▻ ${prefix}cum 🅥

│${no++} ▻ ${prefix}eba 🅥

│${no++} ▻ ${prefix}ero 🅥

│${no++} ▻ ${prefix}femdom 🅥

│${no++} ▻ ${prefix}foot 🅥

│${no++} ▻ ${prefix}gangbang 🅥

│${no++} ▻ ${prefix}gifs 🅥

│${no++} ▻ ${prefix}masturbation 🅥

│${no++} ▻ ${prefix}glasses 🅥

│${no++} ▻ ${prefix}hentai 🅥

│${no++} ▻ ${prefix}jahy 🅥

│${no++} ▻ ${prefix}manga 🅥

│${no++} ▻ ${prefix}neko 🅥

│${no++} ▻ ${prefix}neko2 🅥

│${no++} ▻ ${prefix}nsfwloli 🅥

│${no++} ▻ ${prefix}orgy 🅥

│${no++} ▻ ${prefix}panties 🅥

│${no++} ▻ ${prefix}pussy 🅥

│${no++} ▻ ${prefix}tentacles 🅥

│${no++} ▻ ${prefix}thighs 🅥

│${no++} ▻ ${prefix}yuri 🅥

│${no++} ▻ ${prefix}zettai 🅥

╰───────────◈☽

╭──◊ ❮ *Cerpen Menu* ❯

│${no++} ▻ ${prefix}cerpen_sejarah 🅕

│${no++} ▻ ${prefix}cerpen_sedih 🅕

│${no++} ▻ ${prefix}cerpen_sastra 🅕

│${no++} ▻ ${prefix}cerpen_romantis 🅕

│${no++} ▻ ${prefix}cerpen_rohani 🅕

│${no++} ▻ ${prefix}cerpen_rindu 🅕

│${no++} ▻ ${prefix}cerpen_remaja 🅕

│${no++} ▻ ${prefix}cerpen_ramadhan 🅕

│${no++} ▻ ${prefix}cerpen_petualangan 🅕

│${no++} ▻ ${prefix}cerpen_persahabatan 🅕

│${no++} ▻ ${prefix}cerpen_perpisahan 🅕

│${no++} ▻ ${prefix}cerpen_perjuangan 🅕

│${no++} ▻ ${prefix}cerpen_penyesalan 🅕

│${no++} ▻ ${prefix}cerpen_pengorbanan 🅕

│${no++} ▻ ${prefix}cerpen_pengalaman 🅕

│${no++} ▻ ${prefix}cerpen_pendidikan 🅕

│${no++} ▻ ${prefix}cerpen_penantian 🅕

│${no++} ▻ ${prefix}cerpen_patahhati 🅕

│${no++} ▻ ${prefix}cerpen_olahraga 🅕

│${no++} ▻ ${prefix}cerpen_nasionalisme 🅕

│${no++} ▻ ${prefix}cerpen_nasihat 🅕

│${no++} ▻ ${prefix}cerpen_motivasi 🅕

│${no++} ▻ ${prefix}cerpen_misteri 🅕

│${no++} ▻ ${prefix}cerpen_mengharukan 🅕

│${no++} ▻ ${prefix}cerpen_malaysia 🅕

│${no++} ▻ ${prefix}cerpen_liburan 🅕

│${no++} ▻ ${prefix}cerpen_kristen 🅕

│${no++} ▻ ${prefix}cerpen_korea 🅕

│${no++} ▻ ${prefix}cerpen_kisahnyata 🅕

│${no++} ▻ ${prefix}cerpen_keluarga 🅕

│${no++} ▻ ${prefix}cerpen_kehidupan 🅕

│${no++} ▻ ${prefix}cerpen_jepang 🅕

│${no++} ▻ ${prefix}cerpen_inspiratif 🅕

│${no++} ▻ ${prefix}cerpen_gokil 🅕

│${no++} ▻ ${prefix}cerpen_galau 🅕

│${no++} ▻ ${prefix}cerpen_cintasejati 🅕

│${no++} ▻ ${prefix}cerpen_cintasegitiga 🅕

│${no++} ▻ ${prefix}cerpen_cintasedih 🅕

│${no++} ▻ ${prefix}cerpen_cintaromantis 🅕

│${no++} ▻ ${prefix}cerpen_cintapertama 🅕

│${no++} ▻ ${prefix}cerpen_cintaislami 🅕

│${no++} ▻ ${prefix}cerpen_cinta 🅕

│${no++} ▻ ${prefix}cerpen_budaya 🅕

│${no++} ▻ ${prefix}cerpen_bahasasunda 🅕

│${no++} ▻ ${prefix}cerpen_bahasajawa 🅕

│${no++} ▻ ${prefix}cerpen_bahasainggris 🅕

│${no++} ▻ ${prefix}cerpen_bahasadaerah 🅕

│${no++} ▻ ${prefix}cerpen_anak 🅕

╰───────────◈☽

╭──◊ ❮ *Fun Menu* ❯

│${no++} ▻ ${prefix}memek 🅖

│${no++} ▻ ${prefix}bego 🅖

│${no++} ▻ ${prefix}goblok 🅖

│${no++} ▻ ${prefix}janda 🅖

│${no++} ▻ ${prefix}perawan 🅖

│${no++} ▻ ${prefix}babi 🅖

│${no++} ▻ ${prefix}tolol 🅖

│${no++} ▻ ${prefix}pinter 🅖

│${no++} ▻ ${prefix}pintar 🅖

│${no++} ▻ ${prefix}asu 🅖

│${no++} ▻ ${prefix}bodoh 🅖

│${no++} ▻ ${prefix}gay 🅖

│${no++} ▻ ${prefix}lesby 🅖

│${no++} ▻ ${prefix}bajingan 🅖

│${no++} ▻ ${prefix}jancok 🅖

│${no++} ▻ ${prefix}anjing 🅖

│${no++} ▻ ${prefix}ngentod 🅖

│${no++} ▻ ${prefix}ngentot 🅖

│${no++} ▻ ${prefix}monyet 🅖

│${no++} ▻ ${prefix}mastah 🅖

│${no++} ▻ ${prefix}newbie 🅖

│${no++} ▻ ${prefix}bangsat 🅖

│${no++} ▻ ${prefix}bangke 🅖

│${no++} ▻ ${prefix}sange 🅖

│${no++} ▻ ${prefix}sangean 🅖

│${no++} ▻ ${prefix}dakjal 🅖

│${no++} ▻ ${prefix}horny 🅖

│${no++} ▻ ${prefix}wibu 🅖

│${no++} ▻ ${prefix}puki 🅖

│${no++} ▻ ${prefix}peak 🅖

│${no++} ▻ ${prefix}pantex 🅖

│${no++} ▻ ${prefix}pantek 🅖

│${no++} ▻ ${prefix}setan 🅖

│${no++} ▻ ${prefix}iblis 🅖

│${no++} ▻ ${prefix}cacat 🅖

│${no++} ▻ ${prefix}yatim 🅖

│${no++} ▻ ${prefix}piatu 🅖

│${no++} ▻ ${prefix}goblokcek 🅖

│${no++} ▻ ${prefix}jelekcek 🅖

│${no++} ▻ ${prefix}gaycek 🅖

│${no++} ▻ ${prefix}rate 🅖

│${no++} ▻ ${prefix}lesbicek 🅖

│${no++} ▻ ${prefix}gantengcek 🅖

│${no++} ▻ ${prefix}cantikcek 🅖

│${no++} ▻ ${prefix}begocek 🅖

│${no++} ▻ ${prefix}suhucek 🅖

│${no++} ▻ ${prefix}pintercek 🅖

│${no++} ▻ ${prefix}jagocek 🅖

│${no++} ▻ ${prefix}nolepcek 🅖

│${no++} ▻ ${prefix}babicek 🅖

│${no++} ▻ ${prefix}bebancek 🅖

│${no++} ▻ ${prefix}baikcek 🅖

│${no++} ▻ ${prefix}jahatcek 🅖

│${no++} ▻ ${prefix}anjingcek 🅖

│${no++} ▻ ${prefix}haramcek 🅖

│${no++} ▻ ${prefix}pakboycek 🅖

│${no++} ▻ ${prefix}pakgirlcek 🅖

│${no++} ▻ ${prefix}sangecek 🅖

│${no++} ▻ ${prefix}bapercek 🅖

│${no++} ▻ ${prefix}fakboycek 🅖

│${no++} ▻ ${prefix}alimcek 🅖

│${no++} ▻ ${prefix}suhucek 🅖

│${no++} ▻ ${prefix}fakgirlcek 🅖

│${no++} ▻ ${prefix}kerencek 🅖

│${no++} ▻ ${prefix}wibucek 🅖

│${no++} ▻ ${prefix}pasarkascek 🅖

│${no++} ▻ ${prefix}kulcek 🅖                

│${no++} ▻ ${prefix}cekgoblok 🅖

│${no++} ▻ ${prefix}cekjelek 🅖

│${no++} ▻ ${prefix}cekgay 🅖    

│${no++} ▻ ${prefix}ceklesbi 🅖

│${no++} ▻ ${prefix}cekganteng 🅖

│${no++} ▻ ${prefix}cekcantik 🅖

│${no++} ▻ ${prefix}cekbego 🅖

│${no++} ▻ ${prefix}ceksuhu 🅖

│${no++} ▻ ${prefix}cekpinter 🅖

│${no++} ▻ ${prefix}cekjago 🅖

│${no++} ▻ ${prefix}ceknolep 🅖

│${no++} ▻ ${prefix}cekbabi 🅖

│${no++} ▻ ${prefix}cekbeban 🅖

│${no++} ▻ ${prefix}cekbaik 🅖

│${no++} ▻ ${prefix}cekjahat 🅖

│${no++} ▻ ${prefix}cekanjing 🅖

│${no++} ▻ ${prefix}cekharam 🅖

│${no++} ▻ ${prefix}cekpakboy 🅖

│${no++} ▻ ${prefix}cekpakgirl 🅖

│${no++} ▻ ${prefix}ceksange 🅖

│${no++} ▻ ${prefix}cekbaper 🅖

│${no++} ▻ ${prefix}cekfakboy 🅖

│${no++} ▻ ${prefix}cekalim 🅖

│${no++} ▻ ${prefix}ceksuhu 🅖

│${no++} ▻ ${prefix}cekfakgirl 🅖

│${no++} ▻ ${prefix}cekkeren 🅖

│${no++} ▻ ${prefix}cekwibu 🅖

│${no++} ▻ ${prefix}cekpasarkas 🅖

│${no++} ▻ ${prefix}cekkul 🅖

╰───────────◈☽

╭──◊ ❮ *TextPro Menu* ❯

│${no++} ▻ ${prefix}candy 🅕 

│${no++} ▻ ${prefix}christmas 🅕 

│${no++} ▻ ${prefix}3dchristmas 🅕 

│${no++} ▻ ${prefix}sparklechristmas 🅕

│${no++} ▻ ${prefix}deepsea 🅕 

│${no++} ▻ ${prefix}scifi 🅕 

│${no++} ▻ ${prefix}rainbow 🅕 

│${no++} ▻ ${prefix}waterpipe 🅕 

│${no++} ▻ ${prefix}spooky 🅕 

│${no++} ▻ ${prefix}pencil 🅕 

│${no++} ▻ ${prefix}circuit 🅕 

│${no++} ▻ ${prefix}discovery 🅕 

│${no++} ▻ ${prefix}metalic 🅕 

│${no++} ▻ ${prefix}fiction 🅕 

│${no++} ▻ ${prefix}demon 🅕 

│${no++} ▻ ${prefix}transformer 🅕 

│${no++} ▻ ${prefix}berry 🅕 

│${no++} ▻ ${prefix}thunder 🅕 

│${no++} ▻ ${prefix}magma 🅕 

│${no++} ▻ ${prefix}3dstone 🅕 

│${no++} ▻ ${prefix}neonlight 🅕 

│${no++} ▻ ${prefix}glitch 🅕 

│${no++} ▻ ${prefix}harrypotter 🅕 

│${no++} ▻ ${prefix}brokenglass 🅕 

│${no++} ▻ ${prefix}papercut 🅕 

│${no++} ▻ ${prefix}watercolor 🅕 

│${no++} ▻ ${prefix}multicolor 🅕 

│${no++} ▻ ${prefix}neondevil 🅕 

│${no++} ▻ ${prefix}underwater 🅕 

│${no++} ▻ ${prefix}graffitibike 🅕

│${no++} ▻ ${prefix}snow 🅕 

│${no++} ▻ ${prefix}cloud 🅕 

│${no++} ▻ ${prefix}honey 🅕 

│${no++} ▻ ${prefix}ice 🅕 

│${no++} ▻ ${prefix}fruitjuice 🅕 

│${no++} ▻ ${prefix}biscuit 🅕 

│${no++} ▻ ${prefix}wood 🅕 

│${no++} ▻ ${prefix}chocolate 🅕 

│${no++} ▻ ${prefix}strawberry 🅕 

│${no++} ▻ ${prefix}matrix 🅕 

│${no++} ▻ ${prefix}blood 🅕 

│${no++} ▻ ${prefix}dropwater 🅕 

│${no++} ▻ ${prefix}toxic 🅕 

│${no++} ▻ ${prefix}lava 🅕 

│${no++} ▻ ${prefix}rock 🅕 

│${no++} ▻ ${prefix}bloodglas 🅕 

│${no++} ▻ ${prefix}hallowen 🅕 

│${no++} ▻ ${prefix}darkgold 🅕 

│${no++} ▻ ${prefix}joker 🅕 

│${no++} ▻ ${prefix}wicker 🅕

│${no++} ▻ ${prefix}firework 🅕 

│${no++} ▻ ${prefix}skeleton 🅕 

│${no++} ▻ ${prefix}blackpink 🅕 

│${no++} ▻ ${prefix}sand 🅕 

│${no++} ▻ ${prefix}glue 🅕 

│${no++} ▻ ${prefix}1917 🅕 

│${no++} ▻ ${prefix}leaves 🅕

╰───────────◈☽

╭──◊ ❮ *Ephoto 360 Menu* ❯

│${no++} ▻ ${prefix}glitchtext 🅕

│${no++} ▻ ${prefix}writetext 🅕

│${no++} ▻ ${prefix}advancedglow 🅕

│${no++} ▻ ${prefix}typographytext 🅕

│${no++} ▻ ${prefix}pixelglitch 🅕

│${no++} ▻ ${prefix}neonglitch 🅕

│${no++} ▻ ${prefix}flagtext 🅕

│${no++} ▻ ${prefix}flag3dtext 🅕

│${no++} ▻ ${prefix}deletingtext 🅕

│${no++} ▻ ${prefix}blackpinkstyle 🅕

│${no++} ▻ ${prefix}glowingtext 🅕

│${no++} ▻ ${prefix}underwatertext 🅕

│${no++} ▻ ${prefix}logomaker 🅕

│${no++} ▻ ${prefix}cartoonstyle 🅕

│${no++} ▻ ${prefix}papercutstyle 🅕

│${no++} ▻ ${prefix}watercolortext 🅕

│${no++} ▻ ${prefix}effectclouds 🅕

│${no++} ▻ ${prefix}blackpinklogo 🅕

│${no++} ▻ ${prefix}gradienttext 🅕

│${no++} ▻ ${prefix}summerbeach 🅕

│${no++} ▻ ${prefix}luxurygold 🅕

│${no++} ▻ ${prefix}multicoloredneon 🅕

│${no++} ▻ ${prefix}sandsummer 🅕

│${no++} ▻ ${prefix}galaxywallpaper 🅕

│${no++} ▻ ${prefix}1917style 🅕

│${no++} ▻ ${prefix}makingneon 🅕

│${no++} ▻ ${prefix}royaltext 🅕

│${no++} ▻ ${prefix}freecreate 🅕

│${no++} ▻ ${prefix}galaxystyle 🅕

│${no++} ▻ ${prefix}lighteffects 🅕

╰───────────◈☽

╭──◊ ❮ *Search Menu* ❯

│${no++} ▻ ${prefix}ytsearch 🅕

│${no++} ▻ ${prefix}pinterest 🅕

│${no++} ▻ ${prefix}image 🅕

│${no++} ▻ ${prefix}play 🅕

│${no++} ▻ ${prefix}cariresep 🅕

│${no++} ▻ ${prefix}googles 🅕

│${no++} ▻ ${prefix}bacaresep 🅕

│${no++} ▻ ${prefix}happymod 🅕

╰───────────◈☽

╭──◊ ❮ *Downloader Menu* ❯

│${no++} ▻ ${prefix}tiktok 🅕

│${no++} ▻ ${prefix}tiktokaudio 🅕

│${no++} ▻ ${prefix}capcut 🅕

│${no++} ▻ ${prefix}mediafire 🅕

│${no++} ▻ ${prefix}savefrom 🅕

│${no++} ▻ ${prefix}ytmp3 🅕

│${no++} ▻ ${prefix}ytmp4 🅕

│${no++} ▻ ${prefix}fbdl 🅕

│${no++} ▻ ${prefix}zippyshare 🅕

│${no++} ▻ ${prefix}gdrive 🅕

│${no++} ▻ ${prefix}igdl 🅕

│${no++} ▻ ${prefix}xnxxdl 🅥

╰───────────◈☽

╭──◊ ❮ *Primbon Menu* ❯

│${no++} ▻ ${prefix}nomorhoki 🅕

│${no++} ▻ ${prefix}artimimpi 🅕

│${no++} ▻ ${prefix}artinama 🅕

│${no++} ▻ ${prefix}ramaljodoh 🅕

│${no++} ▻ ${prefix}ramaljodohbali 🅕

│${no++} ▻ ${prefix}suamiistri 🅕

│${no++} ▻ ${prefix}ramalcinta 🅕

│${no++} ▻ ${prefix}cocoknama 🅕

│${no++} ▻ ${prefix}pasangan 🅕

│${no++} ▻ ${prefix}jadiannikah 🅕

│${no++} ▻ ${prefix}sifatusaha 🅕

│${no++} ▻ ${prefix}rezeki 🅕

│${no++} ▻ ${prefix}pekerjaan 🅕

│${no++} ▻ ${prefix}nasib 🅕

│${no++} ▻ ${prefix}penyakit 🅕

│${no++} ▻ ${prefix}tarot 🅕

│${no++} ▻ ${prefix}fengshui 🅕

│${no++} ▻ ${prefix}haribaik 🅕

│${no++} ▻ ${prefix}harisangar 🅕

│${no++} ▻ ${prefix}harisial 🅕

│${no++} ▻ ${prefix}nagahari 🅕

│${no++} ▻ ${prefix}arahrezeki 🅕

│${no++} ▻ ${prefix}peruntungan 🅕

│${no++} ▻ ${prefix}weton 🅕

│${no++} ▻ ${prefix}karakter 🅕

│${no++} ▻ ${prefix}keberuntungan 🅕

│${no++} ▻ ${prefix}memancing 🅕

│${no++} ▻ ${prefix}masasubur 🅕

│${no++} ▻ ${prefix}zodiak 🅕

│${no++} ▻ ${prefix}shio 🅕

╰───────────◈☽

╭──◊ ❮ *Convert Menu* ❯

│${no++} ▻ ${prefix}tourl 🅕

│${no++} ▻ ${prefix}tts 🅕

│${no++} ▻ ${prefix}obfus 🅕

│${no++} ▻ ${prefix}sticker 🅕

│${no++} ▻ ${prefix}qc 🅕

│${no++} ▻ ${prefix}removebg 🅕

│${no++} ▻ ${prefix}snobg 🅕

│${no++} ▻ ${prefix}toonce 🅕

│${no++} ▻ ${prefix}tomp3 🅕

│${no++} ▻ ${prefix}tovn 🅕

│${no++} ▻ ${prefix}toimg 🅕

╰───────────◈☽

╭──◊ ❮ *Effect Menu* ❯

│${no++} ▻ ${prefix}blur 🅕

│${no++} ▻ ${prefix}pixelate 🅕

│${no++} ▻ ${prefix}jail 🅕

│${no++} ▻ ${prefix}wasted 🅕

│${no++} ▻ ${prefix}comrade 🅕

│${no++} ▻ ${prefix}simpcard 🅕

│${no++} ▻ ${prefix}lolice 🅕

╰───────────◈☽

╭──◊ ❮ *Owner Menu* ❯

│${no++} ▻ ${prefix}bc 🅞

│${no++} ▻ ${prefix}join 🅞

│${no++} ▻ ${prefix}pushkontak

│${no++} ▻ ${prefix}creategc 🅞

│${no++} ▻ ${prefix}shutdown 🅞

│${no++} ▻ ${prefix}setppbot 🅞

│${no++} ▻ ${prefix}setnamebot 🅞

│${no++} ▻ ${prefix}setbiobot 🅞

│${no++} ▻ ${prefix}addvip 🅞

│${no++} ▻ ${prefix}delvip 🅞

│${no++} ▻ ${prefix}addvn 🅞

│${no++} ▻ ${prefix}delvn 🅞

│${no++} ▻ ${prefix}listvn 🅞

│${no++} ▻ ${prefix}ban add 🅞

│${no++} ▻ ${prefix}ban del 🅞

╰───────────◈☽

╭──◊ ❮ *Other Menu* ❯

│${no++} ▻ ${prefix}menfes 🅕

│${no++} ▻ ${prefix}confes 🅕

│${no++} ▻ ${prefix}leave 🅕

│${no++} ▻ ${prefix}ssweb 🅕

│${no++} ▻ ${prefix}translate 🅕

│${no++} ▻ ${prefix}meme 🅕

│${no++} ▻ ${prefix}cekme 🅕

│${no++} ▻ ${prefix}ppcp 🅕

│${no++} ▻ ${prefix}ssweb 🅕

│${no++} ▻ ${prefix}halah 🅕

│${no++} ▻ ${prefix}hilih 🅕

│${no++} ▻ ${prefix}huluh 🅕

│${no++} ▻ ${prefix}heleh 🅕

│${no++} ▻ ${prefix}holoh 🅕

│${no++} ▻ ${prefix}dbinary 🅕

│${no++} ▻ ${prefix}ebinary 🅕

╰───────────◈☽

`

}

global.foot = (namabot, author, creator, pushname) => {

return `i'm ${namabot}-MD Yang Di Buat Gak Niat Oleh ${author} Karena Males Recode Jadi Pake Aja Apa Yang Ada Yah.\nKalau Ada Yg Error Bisa Langsung Report Ke Owner.\n @${creator.split("@")[0]} (Owner)`

}

let file = require.resolve(__filename)

fs.watchFile(file, () => {

fs.unwatchFile(file)

console.log(chalk.redBright(`Update ${__filename}`))

delete require.cache[file]

require(file)

})
