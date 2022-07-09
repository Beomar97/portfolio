import type { Experience } from '$lib/models/experience';

const educationExperiences: Experience[] = [
	{
		title: 'Zurich University of Applied Sciences',
		employments: [
			{
				companyName: 'Bachelor of Science ZFH, Computer Science',
				startDate: '2018',
				endDate: '2022'
			}
		]
	},
	{
		title: 'Drexel University',
		employments: [
			{
				companyName: 'Exchange Semester, Computer Science',
				startDate: 'Sep 2021',
				endDate: 'Dec 2021'
			}
		]
	},
	{
		title: 'Kaplan International Auckland',
		employments: [
			{
				companyName: 'CAE Intensive Exam Preparation',
				startDate: 'Jan 2018',
				endDate: 'Mar 2018'
			}
		]
	},
	{
		title: 'Berufsmaturitätsschule Zürich',
		employments: [
			{
				companyName: 'Federal Vocational Baccalaureate',
				startDate: '2012',
				endDate: '2016'
			}
		]
	},
	{
		title: 'Technische Berufsschule Zürich',
		employments: [
			{
				companyName: 'Federeal VET Diploma in Information Technology',
				startDate: '2012',
				endDate: '2016'
			}
		]
	}
];

export { educationExperiences };
