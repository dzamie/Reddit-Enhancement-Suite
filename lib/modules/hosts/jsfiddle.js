export default {
	moduleID: 'jsfiddle',
	name: 'jsfiddle',
	domains: ['jsfiddle.net'],
	logo: 'https://jsfiddle.net/favicon.png',
	detect: ({ href }) => (/^https?:\/\/jsfiddle.net(\/(?:\w+\/(?!embedded\/))?[a-z0-9]{5,}(?:\/\d+)?(?=\/|$))(\/embedded\/[\w,]+\/)?/i).exec(href),
	handleLink(href, [, path, categories]) {
		return {
			type: 'IFRAME',
			expandoClass: 'selftext',
			muted: true,
			embed: `//jsfiddle.net${path}${categories || '/embedded/result,js,resources,html,css/'}`,
			width: '100%',
			height: '500px',
		};
	},
};
