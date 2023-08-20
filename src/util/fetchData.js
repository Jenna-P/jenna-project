//https://rapidapi.com/kaushalsharma880-GAglnDIvTy/api/programming-memes-images

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
     const data = await res.json();

  return data;
};