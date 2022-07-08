import type { Badge } from './badge';
import type { CardLink } from './card-link';

export type Project = {
	title: string;
	category: string;
	image: string;
	description: string;
	badges: string[];
	links: CardLink[];
};
