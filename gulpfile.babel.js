import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';


// Options
const $ = gulpLoadPlugins({
  pattern : ['gulp-*', 'gulp.*', 'main-bower-files', 'browser-sync']
});
const browserSync = $.browserSync.create();
const dir = {
  src : './src',
  dest : './public'
};

// HTML
gulp.task('html', () => {
  return gulp.src(`${dir.src}/app/**/*.+(html|css)`)
  .pipe(gulp.dest( `${dir.dest}/app` ));
});
// Styles
gulp.task('styles', () => {
  return gulp.src( `${dir.src}/**/*.sass` )
  .pipe($.sass({
    outputStyle : 'compressed'
  }).on('error', $.sass.logError))
  .pipe($.autoprefixer( { browser: ['last 2 versions', '> 2%'] } ))
  .pipe(gulp.dest( `${dir.dest}` ))
  .pipe(browserSync.stream());
});

// Typescript
gulp.task('ts', () => {
  return gulp.src( `${dir.src}/**/*.ts` )
    .pipe($.typescript({
      "noImplicitAny": true,
      "module": "system",
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true
    }))
    .pipe(gulp.dest( `${dir.dest}` ));
});

// Build
gulp.task('build', ['html', 'ts', 'styles'], () => {
  return gulp.src( `${dir.src}/*.html` )
  .pipe( $.useref() )
  // TODO:0 fix angular injection when minified.
  // .pipe( $.if('*.js', $.uglify()) )
  .pipe( $.if('*.css', $.minifyCss()) )
  .pipe( $.if('*.css', $.autoprefixer()) )
  .pipe( gulp.dest(dir.dest) );
});

// Browser Sync
gulp.task('serve', ['nodemon','html', 'ts', 'styles'], () => {
  browserSync.init({
    proxy: 'localhost:5000',
    port: 3000
  });

gulp.watch(`${dir.src}/**/*.sass`, ['styles']);
gulp.watch(`${dir.src}/**/*.ts`, ['ts'] );
gulp.watch(`${dir.src}/**/*.html`, ['html'] );
gulp.watch(`${dir.dest}/**/*.html`).on('change', browserSync.reload);
});


// Nodemon
gulp.task('nodemon', function (cb) {
	var started = false;
	return $.nodemon({
		script: 'server.js',
    ignore: [
      'gulpfile.babel.js'
    ]
	})
  .on('start', function () {
		if (!started) {
			cb();
			started = true;
		}
	})
  .on('restart', () => {
    console.log('server restarting...');
  });
});
