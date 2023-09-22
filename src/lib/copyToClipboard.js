function copyToClipboard() {
	const myDiv = document.getElementById('content');
	const range = document.createRange();
	range.selectNode(myDiv);

	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");

	window.getSelection().removeAllRanges();
	alert('Conteúdo copiado!');
}