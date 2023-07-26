export const pagesFunction = (data, total) => {
	const arrPage = [];
	let page = 0;
	for (let i = 0; i < data.length; i++) {
		if(i%total===0){
			arrPage.push(page+1)
			page+=1
		}
		
	}
	return arrPage
}