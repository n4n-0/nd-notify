fx_version 'cerulean'
games { 'gta5' }

author 'Null Dev | DanFrmSpace'
description 'Notification System for LifeWire Roleplay'
version '1.0.0'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/css/style.css',
    'html/js/main.js'
}

client_script 'client/main.lua'

server_script 'server/main.lua'

exports {
    'sendAlert',
}