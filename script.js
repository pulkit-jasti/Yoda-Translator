document.getElementById('translate').addEventListener('click', () => {
	text = document.getElementById('input').value;

	fetch(`https://api.funtranslations.com/translate/yoda.json?text=${text}`)
		.then(response => response.json())
		.then(data => (document.getElementById('output').innerHTML = data.contents.translated))
		.catch(err => {
			alert('Too many requests buddy, you need to wait for an hour');
			console.log(err.code);
		});
});
