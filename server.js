const express = require("express") // Constant: Require express

const server = express() // Constant: The server uses express in operation

server.all("/", (req, res) => { // Then the server will be on "/" which means the first page or homepage
  res.send("Bot is running!") // Informs that the server is running which will appear on the website
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is ready.") // The console logs that the server has been ready
  })
}

module.exports = keepAlive // make it a module
