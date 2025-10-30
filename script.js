document.addEventListener('DOMContentLoaded', function() {
  const mappings = {
    'Videos': ['mp4', 'mkv', 'avi', 'mov', 'wmv', 'flv', 'webm'],
    'Images': ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'svg'],
    'Documents': ['pdf', 'doc', 'docx', 'txt', 'xls', 'xlsx', 'ppt', 'pptx'],
    'Audio': ['mp3', 'wav', 'flac', 'aac', 'ogg'],
    'Archives': ['zip', 'rar', '7z', 'tar', 'gz'],
    'Executables': ['exe', 'msi', 'dmg']
  };

  const ul = document.getElementById('mappings');
  for (const [folder, exts] of Object.entries(mappings)) {
    const li = document.createElement('li');
    li.textContent = `${folder}: ${exts.join(', ')}`;
    ul.appendChild(li);
  }
});