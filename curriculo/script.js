const bootLines = [
  '> GET /api/profile',
  '> status: 200 OK',
  '> parsing curriculo.json ...',
  '> renderizando interface ...'
];

const fallbackProfile = {
  profile: {
    name: 'Ícaro Bastos',
    role: 'Profissional Administrativo',
    location: 'Ilhéus, Bahia, Brasil',
    status: 'Disponível para novas oportunidades',
    summary: 'Profissional administrativo com sólida vivência em rotinas de departamento pessoal, fiscal e financeiro. Atuação com lançamento de títulos, conciliação bancária, gestão de contratos e obrigações fiscais em sistemas como Protheus, Workfinity e Lexio. Em transição para a área de dados, desenvolvendo Python, SQL e automação de processos.',
    email: 'icarocaue79@gmail.com',
    links: {
      linkedin: 'https://www.linkedin.com/in/ícaro-bastos',
      github: 'https://github.com/ibastts'
    }
  },
  education: [
    {
      institution: 'Anhanguera',
      degree: 'Bacharelado em Administração',
      period: 'Em andamento — 4º semestre'
    }
  ],
  skills: {
    mastered: [
      { name: 'Excel Avançado / Tabelas Dinâmicas', level: 90 },
      { name: 'Power BI', level: 75 },
      { name: 'Protheus', level: 80 },
      { name: 'Workfinity', level: 80 },
      { name: 'Lexio', level: 80 },
      { name: 'Pacote Office', level: 90 },
      { name: 'Rotinas Fiscais (e-CAC / E115 / CCE)', level: 75 },
      { name: 'Conciliação Bancária', level: 80 }
    ],
    learning: [
      { name: 'Python', source: 'Hashtag Treinamentos', level: 35 },
      { name: 'SQL', source: 'Hashtag Treinamentos', level: 30 },
      { name: 'Power Automate', source: 'Microsoft', level: 30 }
    ]
  },
  experience: [
    {
      role: 'Assistente Administrativo',
      company: 'Gertec',
      type: 'Estágio',
      period: 'jun/2026 — atual',
      location: 'Presencial',
      highlights: [
        'Lançamento de títulos financeiros no sistema, assegurando o correto processamento das informações',
        'Elaboração de tabelas dinâmicas para mensuração de retrabalhos operacionais',
        'Ajuste de centro de custo, assegurando a correta alocação das informações contábeis',
        'Lançamentos de impostos federais via e-CAC e E115, mantendo a conformidade fiscal',
        'Elaboração de CCE (Carta de Correção Eletrônica) para correção de informações fiscais'
      ]
    },
    {
      role: 'Assistente Administrativo',
      company: 'GéRun',
      type: 'Estágio',
      period: 'fev/2025 — jun/2026',
      location: 'Ilhéus, Bahia',
      highlights: [
        'Manutenção e atualização de planilhas no Excel',
        'Geração de relatórios de ordem de serviço no sistema Workfinity',
        'Criação e monitoramento de contratos no sistema Lexio, do envio até a assinatura',
        'Cadastro de clientes, vendedores e parceiros no sistema Protheus'
      ]
    },
    {
      role: 'Assistente Administrativo',
      company: 'Prefeitura Municipal de Ilhéus',
      type: 'Estágio',
      period: 'mar/2023 — ago/2023',
      location: 'Ilhéus, Bahia',
      highlights: [
        'Confecção de planilhas para controle e organização de informações administrativas',
        'Organização e arquivamento de documentos, seguindo padrões de arquivologia',
        'Acompanhamento e controle de despesas do setor',
        'Organização e manutenção de contratos públicos'
      ]
    },
    {
      role: 'Assistente Administrativo',
      company: 'Kemigas',
      type: 'Meio período / Aprendiz',
      period: 'mar/2022 — jun/2023',
      location: 'Ilhéus, Bahia',
      highlights: [
        'Conciliação bancária, garantindo consistência entre registros internos e extratos',
        'Processamento de lançamentos e estornos de cartões no sistema',
        'Suporte ao RH no recolhimento de assinaturas de funcionários',
        'Digitalização e organização documental para apoio às rotinas administrativas'
      ]
    }
  ],
  projects: [
    {
      name: 'Currículo Digital — API',
      description: 'Este próprio currículo: dados servidos via JSON e renderizados como uma interface interativa, publicado no GitHub Pages.',
      url: 'https://ibastts.github.io'
    },
    {
      name: 'Analisador de Compatibilidade de Vagas',
      description: 'Ferramenta desenvolvida em Python que analisa a compatibilidade entre o perfil do candidato e as exigências de uma vaga de emprego, fornecendo insights sobre pontos fortes e áreas de melhoria.',
      url: 'https://github.com/ibastts/icarobastos.github.io/tree/main/automacao'
    }
  ]
};

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
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchProfile() {
  try {
    const res = await fetch('curriculo.json', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.warn('Falha ao carregar curriculo.json. Usando dados locais.', error);
    return fallbackProfile;
  }
}

function render(data) {
  const payload = data || fallbackProfile;
  const { profile, education, skills, experience, projects } = payload;

  const safeProfile = profile || fallbackProfile.profile;
  const safeSkills = skills || fallbackProfile.skills;
  const safeExperience = experience || fallbackProfile.experience;
  const safeProjects = projects || fallbackProfile.projects;
  const safeEducation = education || fallbackProfile.education;

  document.getElementById('p-name').textContent = safeProfile.name;
  document.getElementById('p-role').textContent = safeProfile.role;
  document.getElementById('p-location').textContent = safeProfile.location;
  document.getElementById('p-status').textContent = safeProfile.status;
  document.getElementById('p-summary').textContent = safeProfile.summary;

  const emailEl = document.getElementById('p-email');
  emailEl.textContent = safeProfile.email;
  emailEl.href = `mailto:${safeProfile.email}`;

  const linkedinEl = document.getElementById('p-linkedin');
  linkedinEl.href = (safeProfile.links && safeProfile.links.linkedin) || '#';
  linkedinEl.textContent = 'LinkedIn ↗';

  const githubEl = document.getElementById('p-github');
  githubEl.href = (safeProfile.links && safeProfile.links.github) || '#';
  githubEl.textContent = 'GitHub ↗';

  renderSkills('skills-mastered', safeSkills.mastered || []);
  renderSkills('skills-learning', safeSkills.learning || []);
  renderExperience(safeExperience || []);
  renderProjects(safeProjects || []);
  renderEducation(safeEducation || []);
}

function renderSkills(containerId, list) {
  const container = document.getElementById(containerId);
  container.innerHTML = (list || []).map(skill => `
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
  container.innerHTML = (list || []).map(job => `
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
        ${(job.highlights || []).map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderProjects(list) {
  const container = document.getElementById('projects-list');
  container.innerHTML = (list || []).map(project => `
    <div class="project-card">
      <p class="project-name">${project.name}</p>
      <p class="project-desc">${project.description}</p>
      ${project.url ? `<a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">Visitar projeto ↗</a>` : ''}
    </div>
  `).join('');
}

function renderEducation(list) {
  const container = document.getElementById('education-list');
  container.innerHTML = (list || []).map(edu => `
    <div class="edu-item">
      <div>
        <div class="edu-degree">${edu.degree}</div>
        <div class="edu-inst">${edu.institution}</div>
      </div>
      <div class="edu-period">${edu.period}</div>
    </div>
  `).join('');
}

function animateSkillBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const level = bar.getAttribute('data-level');
    requestAnimationFrame(() => {
      bar.style.width = `${level}%`;
    });
  });
}

function setupSkillTilt() {
  const panels = document.querySelectorAll('.panel, .profile-card');

  panels.forEach((panel) => {
    panel.addEventListener('pointermove', (event) => {
      const rect = panel.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      const rotateY = (px - 0.5) * 8;
      const rotateX = (0.5 - py) * 8;

      if (panel.classList.contains('skill-panel')) {
        panel.style.setProperty('--rx', `${rotateX}deg`);
        panel.style.setProperty('--ry', `${rotateY}deg`);
        panel.style.setProperty('--lift', `${-1 + Math.abs(rotateY) * 0.12}px`);
      }

      panel.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px) scale(1.004)`;
      panel.style.boxShadow = `0 18px 30px rgba(5, 10, 18, 0.46), ${rotateY * -0.7}px ${rotateX * 1}px 24px rgba(102, 233, 255, 0.09)`;
    });

    panel.addEventListener('pointerleave', () => {
      if (panel.classList.contains('skill-panel')) {
        panel.style.setProperty('--rx', '0deg');
        panel.style.setProperty('--ry', '0deg');
        panel.style.setProperty('--lift', '0px');
      }

      panel.style.transform = '';
      panel.style.boxShadow = '';
    });
  });
}

boot();
setupSkillTilt();
