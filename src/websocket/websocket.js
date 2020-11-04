import code from "../constants/msg-code"
import receive from "./receive-api"

const url = `ws://${location.hostname}:5556/ws`
let ws = {}

export function initWebSocket() {
    ws = new WebSocket(url)
    ws.onmessage = onMessage
    ws.onerror = onError
    ws.onclose = onClose
}

function onMessage(e) {
    let msg = JSON.parse(e.data)
    let data = msg.data
    console.log(e)
    console.log('msg:',msg)
    console.log('data',data)
    switch(msg.code) {
        case code.Fail:
            receive.fail(data)
            break
        case code.HallChat:
            receive.hallChat(data)
            break
        case code.GetHallDialog:
            receive.getHallDialog(data)
            break
        case code.GetRooms:
            receive.getRooms(data)
            break
        case code.CreateRoom:
            receive.createRoom(data)
            break
        case code.EnterRoom:
            receive.enterRoom(data)
            break
        case code.LeaveRoom:
            receive.leaveRoom(data)
            break
        case code.DelRoom:
            receive.delRoom(data)
            break
        case code.RoomChat:
            receive.roomChat(data)
            break
        case code.GetPlayer:
            receive.getPlayer(data)
            break
        case code.GetPlayers:
            receive.getPlayers(data)
            break
        case code.SetReady:
            receive.setReady(data)
            break
        case code.MakeStep:
            receive.makeStep(data)
            break
        case code.GameOver:
            receive.gameOver(data)
            break
        case code.AskDraw:
            receive.askDraw(data)
            break
        case code.RetractStep:
            receive.retractStep(data)
            break
        default:
            break
    }
}

function onError() {
    alert('WebSocket connection to \'' + url + '\' failed')
}

function onClose() {
    console.log("连接已断开1111111111111")

}

export function send(code, data) {
    ws.send(JSON.stringify({
        code,
        data
    }))
}

