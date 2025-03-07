import fs from "fs"


export const otfToTtf = async () => {
	const fonter = (await import('gulp-fonter')).default;

	return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "FONTS",
				message: "Error <%= error.message %>"
			})
		))
		.pipe(fonter({ formats: ['ttf'] }))
		.pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

export const ttfToWoff = async () => {
	const fonter = (await import('gulp-fonter')).default;
	const ttf2woff2 = (await import('gulp-ttf2woff2')).default;

	return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "FONTS",
				message: "Error <%= error.message %>"
			})
		))
		.pipe(fonter({ formats: ['woff'] }))
		.pipe(app.gulp.dest(`${app.path.build.fonts}`))
		.pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(`${app.path.build.fonts}`));
};



export const fontsStyle = () => {
	let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`

	fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
		if (fontsFiles) {
			if (!fs.existsSync(fontsFIle)) {
				fs.writeFile(fontsFile, '', cb)
				let newFileOnly
				for (let i = 0; i < fontsFiles.length; i++) {
					let fontFileName = fontsFiles[i].split('.')[0];
					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName
						let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName
						if (fontWeight.toLowerCase() === 'thin') {
							fontWeight = 100;
						} else if (fontWeight.toLowerCase() === 'extralight') {
							fontWeight = 200;
						} else if (fontWeight.toLowerCase() === 'ligth') {
							fontWeight = 300;
						} else if (fontWeight.toLowerCase() === 'medium') {
							fontWeight = 400;
						} else if (fontWeight.toLowerCase() === 'semibold') {
							fontWeight = 500;
						} else if (fontWeight.toLowerCase() === 'bold') {
							fontWeight = 600;
						} else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavyś') {
							fontWeight = 700;
						} else if (fontWeight.toLowerCase() === 'black') {
							fontWeight = 800;
						} else {
							fontWeight = 400;
						}
						fs.appendFile(fontsFile, `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
						newFileOnly = fontFileName;
					}
				}
			} else {
				console.log('Файл scss/fonts.scss уже существует. Удалите его для редактирования');
			}
		}
	})
	return app.gulp.src(`${app.path.srcFolder}`)
	function cb() { }
}