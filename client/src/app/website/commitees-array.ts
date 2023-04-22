import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

const tsv_str = `Role	Name	Position	Image filename	Links
Co-President	Liang-Yuan Chiu	Research Scientist at Vertex Pharmaceuticals	Liang-Yuan_Chiu.jpg	https://www.linkedin.com/in/liang-yuan-chiu-0307678b/
Co-President	Yi-Yun Ho	Postdoctoral Researcher at Massachusetts Institute of Technology	Yi-Yun_Ho.jpg	https://www.linkedin.com/in/yi-yun-ho-476b995b/`;

const tsv_array = tsv_str
	.split('\n')
	.map(el => el.split('\t'))
	.filter(el => el[1])
	.map(el => {
		return {
			'name': el[1] || null,
			'affiliations': el[2] ? el[2].split(';') : [],
			'imgFileName': el[3] || 'placeholder.jpg',
			'role': el[0] || '',
			'links': el[4] ? el[4].split(';') : [],
		};
	});

const tsv_dict = {};

tsv_array.forEach(el => {
	el.name.trim() in Object.keys(tsv_dict)
		? false
		:  tsv_dict[el.name.trim()] = el;
});

export const commiteesArray = tsv_array.slice(1);
export const commiteesObj = tsv_dict;
