local QBCore = exports['qb-core']:GetCoreObject()

QBCore.Commands.Add('testNotifs', 'Test command for notifications', {}, false, function(source)
    TriggerClientEvent('nd-notify:client:testNotifications', source)
end, 'admin')

QBCore.Commands.Add('sendAlert', 'Sends alert to seld', { { name = 'type', help = 'Type of alert' }, { name = 'text', help = 'Text in alert' }, { name = 'length', help = 'How long the alert lasts' } }, false, function(source, args)
    if not args[1] or not args[2] then return end
    TriggerClientEvent('nd-notify:client:sendAlert', source, {
        type = args[1],
        text = args[2],
        length = args[3] or 3000
    })
end, 'admin')