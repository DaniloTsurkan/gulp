import svgSprite from "gulp-svg-sprite"

export const svgSprite = () => {
	return app.gulp.src(app.path.src.svgicons, { sourcemaps: true })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG",
				message: "Error <%= error.message %>"
			})
		))
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: `../icons/icons.svg`,
					example: true
				}
			}
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browserSync.stream())
}