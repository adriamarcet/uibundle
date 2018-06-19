import gulp from 'gulp';

import { DEST_PATH, IMAGES_DEST } from '../config/routes';

const favicon = () => gulp.src(`${IMAGES_DEST}/favicon/favicon.ico`).pipe(gulp.dest(DEST_PATH));

export default favicon;
