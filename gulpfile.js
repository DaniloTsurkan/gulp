import gulp from "gulp"
import { path } from "./gulp/config/path.js"
import { copy } from "./gulp/tasks/copy.js"
import { reset } from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js"
import { plugins } from "./gulp/config/plugins.js"
import { server } from "./gulp/tasks/server.js"
import { scss } from "./gulp/tasks/scss.js"
import { JS } from "./gulp/tasks/js.js"
import { images } from "./gulp/tasks/images.js"
import { fontsStyle, otfToTtf, ttfToWoff } from "./gulp/tasks/fonts.js"
import svgSprite from "gulp-svg-sprite"

global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins
}
function watcher() {
	gulp.watch(app.path.watch.files, copy)
	gulp.watch(app.path.watch.html, html)
	gulp.watch(app.path.watch.scss, scss)
	gulp.watch(app.path.watch.JS, JS)
	gulp.watch(app.path.watch.images, images)
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)
export { svgSprite }
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, JS, images))

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)

export { dev, build }
gulp.task('default', dev)