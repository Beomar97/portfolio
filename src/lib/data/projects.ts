import type { Project } from '../models/project';
import pathPlanning from '$lib/assets/project-image-path-planning.png';
import studentRun from '$lib/assets/project-image-studentrun.png';
import raceTrack from '$lib/assets/project-image-racetrack.jpeg';
import issueTracker from '$lib/assets/project-image-issue-tracker.png';

const projects: Project[] = [
	{
		title: 'Path Planning',
		date: '2022/06',
		image: pathPlanning,
		description:
			'Path Planning package for the Autonomous System of Zurich UAS Racing. The implemented path planning algorithms manoeuvre the vehicle inside the track marked by cones.',
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
		date: '2021/05',
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
		date: '2020/05',
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
		date: '2019/12',
		image: issueTracker,
		description:
			'Simple Issue Tracker implemented with Riot v3. Created issues are assigned to a project. Projects can be created and deleted, and new issues can be created, edited and deleted for a project.',
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
