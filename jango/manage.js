#!/usr/bin/env gjs-console

const HTTPServer = imports.jango.server.HTTPServer;
const HTTPResponse = imports.jango.server.HTTPResponse;

let runserver = function(args) {
    let SERVER_PORT = 1080;
    let handler = function(request) {
        return new HTTPResponse('Index page<br><a href="/hello">Say hi</a>\n', undefined, 200);
    };
    let server = new HTTPServer({ port: SERVER_PORT });
    server.addHandler("^/$", handler);
    server.addHandler("^/hello$", function() new HTTPResponse('Hello!<br><a href="/">Go back</a>'));

    log("Running server on localhost:" + SERVER_PORT);
    server.run();
}

let main = function(args) {
    if (args.length == 0) {
        log("Usage manage command <options>");
        return;
    }
    let command = args[0];
    switch (command) {
        case 'runserver':
            runserver();
            break;
        default:
            log("Unknown command: " + args);
            break;
    }
};

main(ARGV);
