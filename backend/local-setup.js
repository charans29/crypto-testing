const SMTPServer = require("smtp-server").SMTPServer;
const server = new SMTPServer({});
server.listen(2525);
