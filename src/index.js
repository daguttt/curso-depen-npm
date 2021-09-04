const messages = [
    'Oscar',
    'Ana',
    'Nicol',
    'Diego',
    'Daniel',
    'Santiago',
]
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = {
    randomMsg
}
