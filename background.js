chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
  const filename = item.filename;
  const extension = filename.split('.').pop().toLowerCase();

  let folder = '';

  // Mapping ekstensi ke folder
  const folderMappings = {
    // Video
    'mp4': 'videos',
    'mkv': 'videos',
    'avi': 'videos',
    'mov': 'videos',
    'wmv': 'videos',
    'flv': 'videos',
    'webm': 'videos',
    'm4v': 'videos',
    '3gp': 'videos',

    // Images
    'jpg': 'images',
    'jpeg': 'images',
    'png': 'images',
    'gif': 'images',
    'bmp': 'images',
    'tiff': 'images',
    'svg': 'images',
    'webp': 'images',

    // Documents
    'pdf': 'documents',
    'doc': 'documents',
    'docx': 'documents',
    'txt': 'documents',
    'xls': 'documents',
    'xlsx': 'documents',
    'ppt': 'documents',
    'pptx': 'documents',
    'rtf': 'documents',
    'odt': 'documents',

    // Audio
    'mp3': 'audio',
    'wav': 'audio',
    'flac': 'audio',
    'aac': 'audio',
    'ogg': 'audio',
    'wma': 'audio',

    // Archives
    'zip': 'archives',
    'rar': 'archives',
    '7z': 'archives',
    'tar': 'archives',
    'gz': 'archives',
    'bz2': 'archives',

    // Executables
    'exe': 'executables',
    'msi': 'executables',
    'dmg': 'executables',
    'pkg': 'executables',

    // Others default to root
  };

  if (folderMappings[extension]) {
    folder = folderMappings[extension] + '/';
  }

  suggest({ filename: folder + filename });
});