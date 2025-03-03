import webp from "gulp-webp";
import imagemin from "gulp-imagemin";


export const images = (done) => {
	app.gulp.src(app.path.src.images, { encoding: false })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "IMG",
				message: "Error <%= error.message %>"
			})
		))
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(
			app.plugins.if(
				app.isBuild,
				webp()
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				app.gulp.dest(app.path.build.images)
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				app.gulp.src(app.path.src.images, { encoding: false })
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				app.plugins.newer(app.path.build.images)
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				imagemin()
			)
		)

		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.svg))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browserSync.stream());

	done(); // Сигнал завершення
};
