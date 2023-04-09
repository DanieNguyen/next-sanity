export default {
	// Setup a 'document' type to house the page builder field

	name: 'blog',
	type: 'document',
	title: 'Blog',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'title', maxLength: 96 },
		},
		{
			name: 'caseStudy',
			type: 'array',
			title: 'Case Study',
			of: [
				{ type: 'hero' },
				{ type: 'textWithIllustration' },
				{ type: 'callToAction' },
				{ type: 'gallery' },
				{ type: 'form' },
				{ type: 'video' },
			],
		},
	],
};
