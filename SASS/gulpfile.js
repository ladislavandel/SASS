// Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
// Set-ExecutionPolicy -ExecutionPolicy Restricted -Scope CurrentUser

const { src, watch, series, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const purgecss = require("gulp-purgecss");

let stylesSRC = "./SRC/styles/styles.scss";
let stylesShop = "./SRC/styles/shop.scss";
let stylesSproduct = "./SRC/styles/sproduct.scss";
let stylesWatch = "./SRC/styles/**/*.scss";
let stylesDist = "./dist/css/";

function buildStyles() {
  return src(stylesShop)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        errorLogToConsole: true,
        outputStyle: "compressed",
      })
    )
    .pipe(
      purgecss({
        content: ["*.html"],
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )

    .pipe(sourcemaps.write("./"))
    .pipe(dest(stylesDist));
}

function watchTask() {
  watch([stylesWatch, "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
