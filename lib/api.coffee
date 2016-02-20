logger  = require "./logger"
Session = require "msgpack5rpc"
spawn   = require("child_process").spawn
_       = require "lodash"
fs      = require "fs"

nvim = spawn("nvim", ["--embed"])

session = new Session()

session.attach(nvim.stdin, nvim.stdout)

session.on "notification", (method, args) ->
  logger.log arguments

try
  session.request "vim_get_api_info", [], (err, resp) ->
    if err
      logger.error err
    else
      logger.log JSON.stringify(resp[1])
      funcs = resp[1].functions
      _.sortBy(funcs, "name")
      wstream = fs.createWriteStream "api.md"
      wstream.write "| Function name | Parameters | Return |\n"
      wstream.write "| ------------- | ---------- | ------ |\n"
      for fdesc in funcs
        wstream.write "| #{fdesc.name} | #{fdesc.parameters.join(' ')} |
          #{fdesc.return_type} |\n"
      wstream.end null, null, ->
        process.exit()

catch ex
  logger.error ex
  process.exit()

