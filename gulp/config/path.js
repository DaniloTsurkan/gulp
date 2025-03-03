import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`
const srcFolder = `./src`




export const path = {
	build: {
		files: `${buildFolder}/files/**/*.*`,
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		JS: `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`
	},
	src: {
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/style.scss`,
		JS: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		svgicons: `${srcFolder}/svgicons/*.svg`
	},
	watch: {
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		JS: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
	},
	clean: buildFolder,
	srcFolder: srcFolder,
	buildFolder: buildFolder,
	rootFolder: rootFolder,
	ftp: ``
}