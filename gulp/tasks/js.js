import webpack from "webpack-stream"


export const JS = () => {
	return app.gulp.src(app.path.src.JS, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error <%= error.message %>"
			})
		))
		.pipe(webpack({
			mode: app.isBuild ? 'production' : 'development',
			output: {
				filename: 'app.min.js'
			}
		}))
		.pipe(app.gulp.dest(app.path.build.JS))
		.pipe(app.plugins.browserSync.stream())
}