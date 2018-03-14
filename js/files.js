document.getElementById('file-input-name').addEventListener('click', function() {
	document.getElementById('files-input-upload').click();
});

document.getElementById('files-input-upload').addEventListener('change', function() {
	document.getElementById('file-input-name').value = this.value;
});