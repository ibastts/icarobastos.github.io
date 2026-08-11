const bootLines = [
  '> GET /api/profile',
  '> status: 200 OK',
  '> parsing curriculo.json ...',
  '> renderizando interface ...'
];

async function boot() {
  const bootLog = document.getElementById('bootLog');
  for (const line of bootLines) {
    bootLog.textContent += line + '\n';
    await sleep(320);
  }
  await sleep(250);

  const data = await fetchProfile();
  render(data);

  document.getElementById('bootScreen').hidden = true;
  document.getElementById('app').hidden = false;
  document.getElementById('statusLine').textContent = '200 OK';

  animateSkillBars();
  setupPanels();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchProfile() {
  const res = await fetch('curriculo.json');
  return res.json();
}

function render(data) {
  const { profile, education, skills, experience, projects } = data;

  document.getElementById('p-name').textContent = profile.name;
  document.getElementById('p-role').textContent = profile.role;
  document.getElementById('p-location').textContent = profile.location;
  document.getElementById('p-status').textContent = profile.status;
  document.getElementById('p-summary').textContent = profile.summary;

  const emailEl = document.getElementById('p-email');
  emailEl.textContent = profile.email;
  emailEl.href = `mailto:${profile.email}`;

  const linkedinEl = document.getElementById('p-linkedin');
  linkedinEl.href = profile.links.linkedin;

  renderSkills('skills-mastered', skills.mastered);
  renderSkills('skills-learning', skills.learning);
  renderExperience(experience);
  renderProjects(projects);
  renderEducation(education);

  const totalSkills = skills.mastered.length + skills.learning.length;
  setSummary('skills-summary', `200 OK · ${totalSkills} competências · passe o mouse ou toque para ver`);
  setSummary('experience-summary', `200 OK · ${experience.length} experiências registradas · passe o mouse ou toque para ver`);
  setSummary('projects-summary', `200 OK · ${projects.length} projeto${projects.length === 1 ? '' : 's'} documentado${projects.length === 1 ? '' : 's'} · passe o mouse ou toque para ver`);
  setSummary('education-summary', `200 OK · ${education.length} formação registrada · passe o mouse ou toque para ver`);
}

function setSummary(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function renderSkills(containerId, list) {
  const container = document.getElementById(containerId);
  container.innerHTML = list.map(skill => `
    <div class="skill-row">
      <div class="skill-label">
        <span>${skill.name}${skill.source ? ` <span style="color:var(--text-faint)">— ${skill.source}</span>` : ''}</span>
        <span>${skill.level}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-level="${skill.level}"></div>
      </div>
    </div>
  `).join('');
}

function renderExperience(list) {
  const container = document.getElementById('experience-log');
  container.innerHTML = list.map(job => `
    <div class="timeline-item">
      <div class="timeline-head">
        <div>
          <div class="timeline-role">${job.role}</div>
          <div class="timeline-company">${job.company} · ${job.type}</div>
        </div>
        <div class="timeline-period">${job.period}</div>
      </div>
      <div class="timeline-meta">${job.location}</div>
      <ul class="timeline-highlights">
        ${job.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderProjects(list) {
  const container = document.getElementById('projects-list');
  container.innerHTML = list.map(project => `
    <div class="project-card">
      <p class="project-name">${project.name}</p>
      <p class="project-desc">${project.description}</p>
    </div>
  `).join('');
}

function renderEducation(list) {
  const container = document.getElementById('education-list');
  container.innerHTML = list.map(edu => `
    <div class="edu-item">
      <div>
        <div class="edu-degree">${edu.degree}</div>
        <div class="edu-inst">${edu.institution}</div>
      </div>
      <div class="edu-period">${edu.period}</div>
    </div>
  `).join('');
}

function setupPanels() {
  document.querySelectorAll('[data-panel]').forEach(panel => {
    const title = panel.querySelector('.panel-title');
    const body = panel.querySelector('.panel-body');

    const open = () => {
      panel.classList.add('is-open');
      title.setAttribute('aria-expanded', 'true');
      body.style.maxHeight = body.scrollHeight + 'px';
    };

    const close = () => {
      panel.classList.remove('is-open');
      title.setAttribute('aria-expanded', 'false');
      body.style.maxHeight = '0px';
    };

    // Hover no desktop: abre ao entrar, fecha ao sair (a menos que esteja fixado)
    panel.addEventListener('mouseenter', open);
    panel.addEventListener('mouseleave', () => {
      if (!panel.classList.contains('is-pinned')) close();
    });

    // Clique/toque: fixa aberto (bom para celular, onde não existe hover)
    title.addEventListener('click', () => {
      const pinned = panel.classList.toggle('is-pinned');
      if (pinned) {
        open();
      } else {
        close();
      }
    });

    // Acessibilidade: Enter/Espaço também alternam
    title.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        title.click();
      }
    });
  });

  // Recalcula a altura de painéis abertos ao redimensionar a janela/girar o celular
  window.addEventListener('resize', () => {
    document.querySelectorAll('[data-panel].is-open').forEach(panel => {
      const body = panel.querySelector('.panel-body');
      body.style.maxHeight = body.scrollHeight + 'px';
    });
  });
}

function animateSkillBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const level = bar.getAttribute('data-level');
    requestAnimationFrame(() => {
      bar.style.width = `${level}%`;
    });
  });
}

boot();
