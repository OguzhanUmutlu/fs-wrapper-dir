module.exports = folder => {
    const fs = {};
    for (const i in require("fs")) fs[i] = typeof require("fs")[i] === "function" ? ((...args) => require("fs")[i](...[require("path").join(folder, args[0]), ...args.slice(1)])) : require("fs")[i];
    return fs;
};