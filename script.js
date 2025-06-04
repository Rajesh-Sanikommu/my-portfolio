async function loadRepos() {
  const list = document.getElementById('repo-list');
  try {
    const res = await fetch('https://api.github.com/users/rajesh-sanikommu/repos?sort=updated');
    const repos = await res.json();
    repos.slice(0,6).forEach(repo => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = repo.html_url;
      a.textContent = repo.name;
      a.target = '_blank';
      li.appendChild(a);
      list.appendChild(li);
    });
  } catch {
    list.textContent = 'Failed to load repositories.';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadRepos();
  new Typed('#typed', {
    strings: ['Data Engineer', 'ML Enthusiast', 'Cloud Specialist'],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  });
});
