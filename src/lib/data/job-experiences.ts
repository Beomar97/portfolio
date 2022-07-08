import type { JobExperience } from '$lib/models/job-experience';

let jobExperiences: JobExperience[] = [
	{
		title: 'Professional Software Engineer',
		employments: [{ companyName: 'Zühlke Group', startDate: 'Aug 2022', endDate: 'present' }]
	},
	{
		title: 'Junior Software Engineer',
		employments: [
			{ companyName: 'mesoneer', startDate: 'Apr 2022', endDate: 'May 2022' },
			{ companyName: 'UMB', startDate: 'Apr 2020', endDate: 'Mar 2022' }
		]
	},
	{
		title: 'System Engineer',
		employments: [
			{ companyName: 'UMB', startDate: 'Apr 2018', endDate: 'Mar 2020' },
			{ companyName: 'UMB', startDate: 'Oct 2016', endDate: 'Feb 2017' }
		]
	},
	{
		title: 'Apprentice in Information Technology',
		employments: [{ companyName: 'Tamedia', startDate: 'Aug 2012', endDate: 'Jul 2016' }]
	}
];

export { jobExperiences };
