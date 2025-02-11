import * as nodePath from "path"
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`;
const srcFolder = `./src`





export const path = {
	build: {
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		files: `${buildFolder}/files/`,
		fonts: `${buildFolder}/fonts/`
	},
	src: {
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		js: `${srcFolder}/js/app.js`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
	},
	watch: {
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		files: `${srcFolder}/files/**/*.*`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}