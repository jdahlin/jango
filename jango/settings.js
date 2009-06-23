const Utils = imports.jango.utils;

function Settings(ns) {
    this._init(ns);
}

Settings.prototype = {
    _init : function(ns) {
        this._ns = ns;
    },

    getUrlHandlers : function() {
        let module = Utils.loadModule(this._ns['URLS']);
        return module['URLHANDLERS'];
    }
};

var _globalSettings = undefined;

let getSettings = function() {
    if (_globalSettings !== undefined)
        return _globalSettings

    try {
        const settings = imports.settings;
    } catch (e) {
        if (e.message == "No JS module 'settings' found in search path") {
            log("Error 'settings.js' not found");
            return null;
        } else {
            throw e;
        }
    }
    _globalSettings = new Settings(settings);
    return _globalSettings
}

