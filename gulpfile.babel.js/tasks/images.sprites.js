import gulp from 'gulp';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import cheerio from 'gulp-cheerio';
import svgstore from 'gulp-svgstore';

import { SVGO } from '../config/params';
import { SPRITES_SRC, SPRITES_DEST } from '../config/routes';

const SPRITES_FILES = `${SPRITES_SRC}/*.svg`;

const sprites = () => {
  return gulp
    .src(SPRITES_FILES)
    .pipe(rename({ prefix: 'icon-' }))
    .pipe(imagemin([imagemin.svgo(SVGO)]))
    .pipe(
      cheerio({
        run: $ => {
          $('[fill]').removeAttr('fill');
        },
        parserOptions: { xmlMode: true }
      })
    )
    .pipe(svgstore())
    .pipe(gulp.dest(SPRITES_DEST));
};

export { SPRITES_FILES };
export default sprites;
