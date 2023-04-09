import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
	projectId: '0e47t3xs',
	dataset: 'production',
	title: 'Daniel: Portfolio',
	apiVersion: '2023-03-09',
	basePath: '/admin',
	plugins: [deskTool()],
	schema: { types: schemas },
});

export default config;
