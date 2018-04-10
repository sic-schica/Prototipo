document.getElementById('file-input-name').addEventListener('click', function() {
	document.getElementById('files-input-upload').click();
});

document.getElementById('files-input-upload').addEventListener('change', function() {
	document.getElementById('file-input-name').value = this.value;
});

document.getElementById('file-input-name-1').addEventListener('click', function() {
	document.getElementById('files-input-upload-1').click();
});

document.getElementById('files-input-upload-1').addEventListener('change', function() {
	document.getElementById('file-input-name-1').value = this.value;
});

document.getElementById('file-input-name-2').addEventListener('click', function() {
	document.getElementById('files-input-upload-2').click();
});

document.getElementById('files-input-upload-2').addEventListener('change', function() {
	document.getElementById('file-input-name-2').value = this.value;
});
