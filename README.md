# NULL Development Notifications 
This is a simple Notification System that was inspired by NoPixel. I will continue to update this as I need to. Support will be limited but you're free to join the discord to get help if you need it. 

*This is an edited version of Alzar's "Mythic Notify"*

## Features
- Nice Styling
- Police Notifications
- QBCore Intergration
- FontAwesome Icons



## This clip shows a little preview
### [Click Me](https://streamable.com/m1diij)
---
## How to Use
```lua
-- Client Side
TriggerEvent('nd-notify:client:sendAlert', { 
    type = 'primary', -- Types = [primary, success, error, police]
    text = 'This is a test primary notification!',
    length = 3000,
    style = {['background-color'] = '#FFFFFF', ['color'] = '#000000' } -- This is optional
})
```

```lua
-- Server Side
TriggerClientEvent('nd-notify:client:sendAlert', source, { 
    type = 'primary', -- Types = [primary, success, error, police]
    text = 'This is a test primary notification!',
    length = 3000,
    style = {['background-color'] = '#FFFFFF', ['color'] = '#000000' } -- This is optional
})
```

## QBCore Intergration
Do this only if you want to be able to use this style with `QBCore.Functions.Notify`

*In Functions.lua in qb-core change your line 142 to look like this*
```lua
function QBCore.Functions.Notify(text, texttype, length)
    if type(text) == "table" then -- Notifcations using these tables will still use QBCores Default Notifications since I have provided support for titles and captions at the moment. Next update?
        local ttext = text.text or 'Placeholder'
        local caption = text.caption or 'Placeholder'
        texttype = texttype or 'primary'
        length = length or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            length = length,
            text = ttext,
            caption = caption
        })
    else
        TriggerEvent('nd-notify:client:sendAlert', {
            type = texttype or 'inform',
            text = text,
            length = length or 5000
        })
    end
end
```
[![Null Dev Discord](https://badgen.net/discord/members/JakcH9a5qW
)](https://discord.gg/JakcH9a5qW
)
> Note: Removed Persistant Notifications for the time being. I will be adding them back soon.