const HTTPResponse = imports.jango.server.HTTPResponse;

let index = function(request) {
    return new HTTPResponse('Index page<br><a ref="/hello">Say hi</a>');
}

let hello = function(request) {
    return new HTTPResponse('Hello!<br><a ref="/">Go back</a>');
}
