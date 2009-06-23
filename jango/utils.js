function loadModule(moduleName) {
    log("loading: " + moduleName)
    let parts = moduleName.split('.');
    let module = imports;
    for (let i = 0; i < parts.length; ++i) {
        module = module[parts[i]];
    }
    return module;
}
