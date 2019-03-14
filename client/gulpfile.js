const path = require("path");
const fs = require("fs");
const del = require("del");
const _ = require("underscore");
const { src, dest, series, parallel, symlink } = require("gulp");
const uglifyes = require("gulp-uglify-es").default;
const babel = require("gulp-babel");

const paths = {
    node_modules: "./node_modules",
    scripts: [
        "galaxy/scripts/**/*.js",
        "!galaxy/scripts/qunit/**/*",
        "!galaxy/scripts/entry/**/*",
        "!galaxy/scripts/libs/**/*"
    ],
    plugin_dirs: [
        "!../config/plugins/**/node_modules{,/**}",
        "../config/plugins/**/static/**/*"
    ],
    lib_locs: {
        // This is a stepping stone towards having all this staged
        // automatically.  Eventually, this dictionary and staging step will
        // not be necessary.
        backbone: ["backbone.js", "backbone.js"],
        "bootstrap-tour": ["build/js/bootstrap-tour.js", "bootstrap-tour.js"],
        d3: ["d3.js", "d3.js"],
        "bibtex-parse-js": ["bibtexParse.js", "bibtexParse.js"],
        jquery: ["dist/jquery.js", "jquery/jquery.js"],
        "jquery.complexify": ["jquery.complexify.js", "jquery/jquery.complexify.js"],
        "jquery.cookie": ["jquery.cookie.js", "jquery/jquery.cookie.js"],
        "jquery-migrate": ["dist/jquery-migrate.js", "jquery/jquery.migrate.js"],
        "jquery-mousewheel": ["jquery.mousewheel.js", "jquery/jquery.mousewheel.js"],
        "raven-js": ["dist/raven.js", "raven.js"],
        requirejs: ["require.js", "require.js"],
        underscore: ["underscore.js", "underscore.js"]
    },
    libs: ["galaxy/scripts/libs/**/*.js"]
};

function stageLibs(callback){
    _.each(_.keys(paths.lib_locs), function(lib) {
        var p1 = path.resolve(path.join(paths.node_modules, lib, paths.lib_locs[lib][0]));
        var p2 = path.resolve(path.join("galaxy", "scripts", "libs", paths.lib_locs[lib][1]));
        if (fs.existsSync(p1)) {
            del.sync(p2);
            fs.createReadStream(p1).pipe(fs.createWriteStream(p2));
        } else {
            callback(
                p1 +
                    " does not exist, yet it is a required library.  This is an error.  Check that the package in question exists in node_modules."
            );
        }
    });
    return callback();
}

function fonts() {
    return src(path.resolve(path.join(paths.node_modules, "font-awesome/fonts/**/*")))
        .pipe(dest("../static/images/fonts"));
}


// TODO: Remove script and lib tasks (for 19.05) once we are sure there are no
// external accessors (via require or explicit inclusion in templates)
function scripts(){
    return src(paths.scripts)
        .pipe(
            babel({
                plugins: ["transform-es2015-modules-amd"]
            })
        )
        .pipe(uglifyes())
        .pipe(dest("../static/scripts/"));
}

function libs() {
    return src(paths.libs)
        .pipe(uglifyes())
        .pipe(dest("../static/scripts/libs/"));
}

function plugins() {
    return src(paths.plugin_dirs).pipe(symlink("../static/plugins/"));
}

function clean(){
    //Wipe out all scripts that aren't handled by webpack
    return del(["../static/scripts/**/*.js", "!../static/scripts/bundled/**.*.js"], { force: true });
}

module.exports.fonts = fonts;
module.exports.libs = libs;
module.exports.scripts = scripts;
module.exports.clean= clean;
module.exports.stageLibs = stageLibs;
module.exports.plugins = plugins;
module.exports.staging = parallel(stageLibs, fonts);
module.exports.default = series(libs, scripts);
