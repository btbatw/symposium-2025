import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

const tsv_str = `Role	Name	Position	Image filename	Links
Co-President	Yu-Tien Hsu	PhD candidate, Harvard University	Yu-Tien_Hsu.jpg 	https://www.linkedin.com/in/yu-tien-hsu-04043241/
Co-President	Chih-Hung Chou	Postdoc, Broad Institute of MIT and Harvard	Chih-Hung_Chou.jpg	https://www.linkedin.com/in/chih-hung-chou/`;

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
