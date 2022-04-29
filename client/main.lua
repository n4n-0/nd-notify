RegisterNetEvent('nd-notify:client:sendAlert', function(data)
    SendAlert(data.type, data.text, data.length)
end)

RegisterNetEvent('nd-notify:client:sendPoliceNotification', function(data)
    SendPoliceNotification(data.type, data.text)
end)

RegisterNetEvent('nd-notify:client:testNotifications', function()
    SendAlert('primary', 'This is just to test to see what it looks like when you have a really really really really really really really really really really really really long message')
    Wait(500)
    SendAlert('success', 'This is a success alert!', 3000)
    Wait(500)
    SendAlert('error', 'This is an error alert!', 3000)
    Wait(500)
    SendAlert('primary', 'This is an inform alert!', 3000)
    Wait(500)
    SendAlert('police', 'This is a police alert!', 3000)
end)


function SendPoliceNotification(type, text)
    SendNUIMessage({
        type = type,
        text = text,
        length = 3000
    })
end

function SendAlert(type, text, length, style)
    SendNUIMessage({
        type = type,
        text = text,
        length = length,
        style = style
    })
end