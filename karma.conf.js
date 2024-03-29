
const path = require('path');
const { argv } = require('yargs').option('grep', {
	type: 'string',
	description: 'Grep test gllob pattern'
});

if (argv.grep) {
	console.info('Grep glob pattern: ', argv.grep);
}

const webpackConfFunc = require(path.resolve(
	process.cwd(),
	'./webpack.config'
));

const webpackConfig = (() => {
	const config = webpackConfFunc(
		[],
		{
			mode: 'production',
			isTest: true,
			uglify: true,
			es: 'es5'
		},
		process.cwd()
	);

	delete config.context;
	delete config.entry;

	delete config.output.path;
	delete config.output.filename;
	delete config.output.publicPath;
	// delete config.output;

	config.stats = {
		modules: false,
		colors: true
	};

	config.watch = false;

	config.optimization = {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			minSize: 0,
			cacheGroups: {
				commons: {
					name: 'commons',
					chunks: 'initial',
					minChunks: 1
				}
			}
		}
	};

	return config;
})();

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['mocha', 'chai', 'webpack'],

		mime: {
			'text/css': ['css'],
			'text/x-typescript': ['ts', 'tsx'],
			'image/jpeg': ['jpg']
		},

		files: [
			{
				pattern: './test/tests/artio.jpg',
				watched: false,
				included: false,
				served: true
			},
			{
				pattern: './test/test.index.html',
				watched: false,
				included: false,
				served: true
			},

			'app.css',
			'node_modules/synchronous-promise/dist/synchronous-promise.js',
			'src/index.ts',
			'test/bootstrap.js',
			{ pattern: argv.grep ?? 'src/**/*.test.js', watched: false },
			{
				pattern: argv.grep ?? 'test/tests/**/*.test.js',
				watched: false
			}
		],

		proxies: {
			'/tests/artio.jpg': '/base/test/tests/artio.jpg',
			'/test.index.html': '/base/test/test.index.html'
		},

		reporters: ['progress'],
		port: 2002,
		hostname: '127.0.0.1',
		colors: true,
		logLevel: config.LOG_INFO,
		browsers: ['ChromeHeadless', 'FirefoxHeadless', 'Firefox'],
		customLaunchers: {
			FirefoxHeadless: {
				base: 'Firefox',
				flags: ['-width', 1440, '-height', 900, '-headless']
			},

			ChromeHeadless: {
				base: 'Chrome',
				flags: [
					'--window-size=1440,900',
					'--disable-gpu',
					'--disable-extensions',
					'--disable-translate'
				]
			}
		},

		autoWatch: true,
		singleRun: true, // Karma captures browsers, runs the tests and exits
		concurrency: Infinity,

		preprocessors: {
			'src/index.ts': ['webpack']
		},

		plugins: [
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-webpack',
			'karma-mocha',
			'karma-chai',
			'karma-sourcemap-loader'
		],

		webpack: webpackConfig,

		client: {
			captureConsole: true,
			mocha: {
				bail: true
			}
		},

		webpackMiddleware: {
			quiet: true,
			stats: {
				chunks: false
			},
			noInfo: true
		}
	});
};
