import type { Project } from '../models/project';
import pathPlanning from '$lib/assets/project-image-path-planning.png';
import studentRun from '$lib/assets/project-image-studentrun.png';
import raceTrack from '$lib/assets/project-image-racetrack.jpeg';
import issueTracker from '$lib/assets/project-image-issue-tracker.png';

let projects: Project[] = [
	{
		title: 'Path Planning',
		category: 'Python',
		image: pathPlanning,
		description: 'Path Planning package for the Autonomous System of Zurich UAS Racing.',
		badges: ['path-planning', 'python3', 'ros2-foxy'],
		links: [
			{
				icon: 'akar-icons:github-fill',
				text: 'GitHub',
				color: 'bg-[#24282f]',
				link: 'https://github.com/Beomar97/path-planning'
			}
		]
	},
	{
		title: 'StudentRun',
		category: 'JavaScript',
		image: studentRun,
		description:
			'StudentRun is a competitive multiplayer game. StudentRun enables you to play versus online opponents with the goal to reach the finish line as quickly as possible.',
		badges: [
			'nodejs',
			'javascript',
			'game',
			'express',
			'mongodb',
			'socket-io',
			'matter-js',
			'phaser3',
			'jumpnrun'
		],
		links: [
			{
				icon: 'akar-icons:github-fill',
				text: 'GitHub',
				color: 'bg-[#24282f]',
				link: 'https://github.com/Beomar97/student-run'
			}
		]
	},
	{
		title: 'RaceTrack',
		category: 'Java',
		image: raceTrack,
		description:
			"RaceTrack, originally a paper and pencil game, that simulates a car race, played by two players. The game is played on a squared sheet of paper, with a pencil line tracking each car's movement.",
		badges: ['game', 'java', 'javafx', 'racetrack'],
		links: [
			{
				icon: 'akar-icons:github-fill',
				text: 'GitHub',
				color: 'bg-[#24282f]',
				link: 'https://github.com/Beomar97/race-track'
			}
		]
	},
	{
		title: 'Issue Tracker',
		category: 'JavaScript',
		image: issueTracker,
		description: 'Simple Issue Tracker implemented with Riot v3.',
		badges: ['javascript', 'axios', 'riot'],
		links: [
			{
				icon: 'akar-icons:github-fill',
				text: 'GitHub',
				color: 'bg-[#24282f]',
				link: 'https://github.com/Beomar97/issue-tracker'
			}
		]
	}
];

export { projects };
