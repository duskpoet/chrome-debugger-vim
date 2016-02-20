fs = require "fs"

LOG_FILE = "plugin.log"

module.exports = {
  log: (args...) ->
    fs.appendFileSync LOG_FILE, args.join("\n")

  error: (args...) ->
    fs.appendFileSync LOG_FILE, ["ERROR:"].concat(args).join("\n")
}
