const folders = document.querySelectorAll('.folder');

const folderObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        folders.forEach((folder) => folder.classList.toggle('active', folder === entry.target));
      }
    });
  },
  {
    root: null,
    threshold: [0.3, 0.6, 0.9],
    rootMargin: '0px 0px -15% 0px'
  }
);

folders.forEach((folder) => folderObserver.observe(folder));
