chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
  const filename = item.filename;
  const extension = filename.split('.').pop().toLowerCase();

  let folder = '';

  // Mapping ekstensi ke folder
  const folderMappings = {
    // Video
    'mp4': 'videos', 'mkv': 'videos', 'avi': 'videos', 'mov': 'videos',
    'wmv': 'videos', 'flv': 'videos', 'webm': 'videos', 'm4v': 'videos',
    '3gp': 'videos', 'mpeg': 'videos', 'mpg': 'videos', 'rmvb': 'videos',
    'vob': 'videos', 'ts': 'videos', 'm2ts': 'videos', 'f4v': 'videos',

    // Images
    'jpg': 'images', 'jpeg': 'images', 'png': 'images', 'gif': 'images',
    'bmp': 'images', 'tiff': 'images', 'svg': 'images', 'webp': 'images',
    'heic': 'images', 'raw': 'images', 'psd': 'images', 'ai': 'images',
    'ico': 'images', 'eps': 'images', 'indd': 'images',

    // Documents
    'pdf': 'documents', 'doc': 'documents', 'docx': 'documents', 'txt': 'documents',
    'xls': 'documents', 'xlsx': 'documents', 'ppt': 'documents', 'pptx': 'documents',
    'rtf': 'documents', 'odt': 'documents', 'ods': 'documents', 'odp': 'documents',
    'csv': 'documents', 'md': 'documents', 'epub': 'documents', 'azw': 'documents',
    'fb2': 'documents', 'tex': 'documents', 'log': 'documents', 'pages': 'documents',
    'numbers': 'documents', 'key': 'documents',

    // Audio
    'mp3': 'audio', 'wav': 'audio', 'flac': 'audio', 'aac': 'audio',
    'ogg': 'audio', 'wma': 'audio', 'alac': 'audio', 'aiff': 'audio',
    'm4a': 'audio', 'opus': 'audio', 'mid': 'audio', 'midi': 'audio',

    // Archives
    'zip': 'archives', 'rar': 'archives', '7z': 'archives', 'tar': 'archives',
    'gz': 'archives', 'bz2': 'archives', 'xz': 'archives', 'zst': 'archives',
    'lz': 'archives', 'lzma': 'archives', 'zpaq': 'archives', 'cab': 'archives',
    'iso': 'archives', 'img': 'archives', 'apk': 'archives',

    // Code / Developer files
    'html': 'code', 'htm': 'code', 'css': 'code', 'js': 'code', 'json': 'code',
    'ts': 'code', 'tsx': 'code', 'jsx': 'code', 'vue': 'code', 'php': 'code',
    'py': 'code', 'java': 'code', 'c': 'code', 'cpp': 'code', 'cs': 'code',
    'rb': 'code', 'go': 'code', 'rs': 'code', 'swift': 'code', 'kt': 'code',
    'sql': 'code', 'xml': 'code', 'yml': 'code', 'yaml': 'code', 'ini': 'code',
    'bat': 'code', 'sh': 'code', 'pl': 'code', 'lua': 'code', 'r': 'code',
    'ipynb': 'code', 'asm': 'code',

    // Fonts
    'ttf': 'fonts', 'otf': 'fonts', 'woff': 'fonts', 'woff2': 'fonts',
    'eot': 'fonts', 'fon': 'fonts',

    // Executables / Installers
    'exe': 'executables', 'msi': 'executables', 'dmg': 'executables',
    'pkg': 'executables', 'sh': 'executables', 'bat': 'executables',
    'com': 'executables', 'cmd': 'executables', 'vbs': 'executables',
    'pyc': 'executables', 'bin': 'executables', 'jar': 'executables',
    'class': 'executables', 'appimage': 'executables',

    // Torrents
    'torrent': 'torrents',

    // Disk Images / Virtual Machines
    'vhd': 'disk_images', 'vhdx': 'disk_images', 'vmdk': 'disk_images',
    'qcow2': 'disk_images', 'ova': 'disk_images', 'ovf': 'disk_images',

    // Design / 3D / CAD
    'blend': 'design', 'obj': 'design', 'fbx': 'design', 'stl': 'design',
    'dwg': 'design', 'dxf': 'design', 'skp': 'design',

    // Misc
    'srt': 'subtitles', 'ass': 'subtitles', 'vtt': 'subtitles',
  };

  if (folderMappings[extension]) {
    folder = folderMappings[extension] + '/';
  }

  suggest({ filename: folder + filename });
});
