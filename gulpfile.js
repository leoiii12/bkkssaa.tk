var gulp = require("gulp");
var gutil = require("gulp-util");
var concat = require("gulp-concat");
var sass = require("gulp-sass");
var nano = require('gulp-cssnano');
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var htmlmin = require('gulp-htmlmin');
var sh = require("shelljs");
var liveServer = require("live-server");

var paths = {
    workingStyles: "./development/scss/",
    styles: [
        "./development/scss/application.scss",
        "./development/pages/*/*.scss"
    ],
    libraries: [
        "./node_modules/angular/angular.min.js",
        "./node_modules/angular-animate/angular-animate.min.js",
        "./node_modules/angular-touch/angular-touch.min.js",
        "./node_modules/angular-ui-router/release/angular-ui-router.min.js",
        "./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js"
    ],
    scripts: [
        "./development/js/app.js",
        "./development/js/directives/*.js",
        "./development/js/services/*.js",
        "./development/pages/*/*.js"
    ],
    pages: [
        "./development/pages/*/*.html"
    ],
    index: [
        "./development/index.html"
    ]
};

// Options

var cssnanoOptions = {
    discardComments: {removeAll: true}
};

var uglifyOptions = {mangle: true};

var liverServerOptions = {
    root: "www/",
    file: "index.html",
    quite: true
};

// Default

gulp.task("default", ["watch", "styles", "libraries", "scripts", "pages", "index"]);

// Private functions : default

gulp.task("watch", function () {
    // To make sub styles changed with
    var stylesWatchingPath = paths.styles;
    stylesWatchingPath.push("./development/scss/*/*.scss");
    gulp.watch(stylesWatchingPath, ["styles"]);

    gulp.watch(paths.scripts, ["scripts"]);
    gulp.watch(paths.pages, ["pages"]);
    gulp.watch(paths.index, ["index"]);

    liveServer.start(liverServerOptions);
});

gulp.task("styles", function (done) {
    gulp.src(paths.styles)
        .pipe(concat("application.scss"))
        .pipe(sass({
            errLogToConsole: true,
            includePaths: [paths.workingStyles]
        }))
        .pipe(nano(cssnanoOptions))
        .pipe(rename({extname: ".min.css"}))
        .pipe(gulp.dest("./www/"))
        .on("end", done);
});

gulp.task("libraries", function (done) {
    gulp.src(paths.libraries)
        .pipe(concat("libraries.min.js"))
        .pipe(gulp.dest("./www/"))
        .on("end", done);
});

gulp.task("scripts", function (done) {
    gulp.src(paths.scripts)
        .pipe(concat("application.min.js"))
        .pipe(uglify(uglifyOptions))
        .pipe(gulp.dest("./www/"))
        .on("end", done);
});

gulp.task("index", function (done) {
    gulp.src(paths.index)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("./www/"))
        .on("end", done);
});

gulp.task("pages", function (done) {
    gulp.src(paths.pages)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("./www/pages/"))
        .on("end", done);
});

// Private functions : install

gulp.task("git-check", function (done) {
    if (!sh.which("git")) {
        console.log(
            "  " + gutil.colors.red("Git is not installed."),
            "\n  Git, the version control system, is required to download.",
            "\n  Download git here:", gutil.colors.cyan("http://git-scm.com/downloads") + ".",
            "\n  Once git is installed, run \"" + gutil.colors.cyan("gulp install") + "\" again."
        );
        process.exit(1);
    }
    done();
});