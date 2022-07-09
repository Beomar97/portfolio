import type { CardLink } from './card-link';

export type Project = {
	title: string;
	date?: string;
	image: string;
	description: string;
	badges: string[];
	links: CardLink[];
};
