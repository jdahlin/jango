#!/usr/bin/env gjs-console
const GLib = imports.gi.GLib;

let runserver = function(args) {
    const HTTPServer = imports.jango.server.HTTPServer;
    const HTTPResponse = imports.jango.server.HTTPResponse;

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

let shell = function(args) {
    const Console = imports.console;
    Console.interact();
}

let main = function(args) {
    if (args.length == 0) {
        log("Usage manage command <options>");
        return;
    }
    try {
        const settings = imports.settings;
    } catch (e) {
        if (e.message == "No JS module 'settings' found in search path") {
            log("Error 'settings.js' not found");
            return;
        }
    }
    let command = args[0];
    switch (command) {
        case 'runserver':
            runserver(args);
            break;
        case 'shell':
            shell(args);
            break;
        default:
            log("Unknown command: " + args);
            break;
    }
};

main(ARGV);
