import type { Skill } from '$lib/models/skill';

let skills: Skill[] = [
	{
		category: 'Frontend',
		text: 'Svelte',
		textColor: 'text-orange-600',
		icon: 'logos:svelte-icon',
		description: 'Used in personal projects.'
	},
	{
		category: 'Frontend',
		text: 'Angular',
		textColor: 'text-red-600',
		icon: 'logos:angular-icon',
		description: 'Used in professional environments.'
	},
	{
		category: 'Frontend',
		text: 'React',
		textColor: 'text-cyan-400',
		icon: 'logos:react',
		description: 'Used in personal and school projects.'
	},
	{
		category: 'Backend',
		text: 'Java',
		textColor: 'text-yellow-700',
		icon: 'logos:java',
		description: 'Primarily used in business projects with SpringBoot.'
	},
	{
		category: 'Backend',
		text: 'Python',
		textColor: 'text-blue-900',
		icon: 'logos:python',
		description: 'Used in school projects about AI, Data Science and Robotics.'
	},
	{
		category: 'Robotics',
		text: 'ROS 2',
		textColor: 'text-gray-600',
		icon: 'simple-icons:ros',
		description: 'Used in my Bachelor Thesis, developing a Path Planner for an autonomous vehicle.'
	},
	{
		category: 'Backend',
		text: 'Kotlin',
		textColor: 'text-violet-700',
		icon: 'logos:kotlin-icon',
		description: 'Used in professional environments.'
	},
	{
		category: 'Styling',
		text: 'CSS / SCSS',
		textColor: 'text-pink-400',
		icon: 'logos:sass',
		description: 'Styled components using CSS and SCSS.'
	},
	{
		category: 'Database',
		text: 'SQL',
		textColor: 'text-sky-800',
		icon: 'logos:postgresql',
		description: 'Experience working with SQL databases like PostgreSQL and MySQL.'
	},
	{
		category: 'Styling',
		text: 'Material UI',
		textColor: 'text-sky-500',
		icon: 'logos:material-ui',
		description: 'Worked with Angular Material UI.'
	},
	{
		category: 'Backend',
		text: 'Spring',
		textColor: 'text-green-600',
		icon: 'logos:spring-icon',
		description: 'Professional Experience with Java Spring Boot Projects.'
	},
	{
		category: 'Frontend',
		text: 'TypeScript',
		textColor: 'text-black',
		icon: 'logos:typescript-icon',
		description: 'Used within UI Frameworks.'
	},
	{
		category: 'Frontend',
		text: 'JavaScript',
		textColor: 'text-black',
		icon: 'logos:javascript',
		description: 'Used within UI Frameworks.'
	}
];

export { skills };
