const fallbackProfile = {
  profile: {
    name: 'Ícaro Bastos',
    role: 'Assistente Administrativo',
    location: 'Ilhéus, Bahia, Brasil',
    status: 'Disponível para novas oportunidades',
    summary:
      'Profissional administrativo com vivência em rotinas de departamento pessoal, fiscal e financeiro, atuando com lançamento de títulos, conciliação bancária, gestão de contratos, obrigações fiscais (e-CAC, E115, CCE) e sistemas como Protheus, Workfinity e Lexio. Atualmente na Gertec aplicando automação de processos com Python, análise de dados e tabelas dinâmicas para ganho de precisão e redução de retrabalho operacional.',
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
      name: 'CaixaClaro — Aplicativo Web SaaS de Gestão Financeira PJ/PF',
      description:
        'Sistema SaaS multi-tenant em React, TypeScript, Tailwind CSS e Supabase (com Row Level Security) hospedado na Netlify: separação automática entre caixa PJ e retiradas pessoais PF, controle de estoque com leitor de código de barras, cadastro de clientes, comprovantes personalizados em PNG, contrato digital com registro de aceite, caixa de feedback, e-mails automáticos e painel de gestão integrado ao Telegram.',
      url: 'https://meunegocio-facil.netlify.app'
    },
    {
      name: 'Feriado — Assistente Pessoal de Produtividade com IA',
      description:
        'Ecossistema em Python integrado ao Gmail, Google Antigravity e API de Bots do Telegram: triagem inteligente de e-mails com extração de prazos e valores, boletins agendados (12h e 17h), previsão do tempo e curadoria de notícias fiscais e de IA.',
      url: ''
    },
    {
      name: 'Painel de Automações — Departamento Fiscal',
      description:
        'Dashboard interativo em HTML, Tailwind CSS e Chart.js com calculadora de economia de tempo: 12 processos mapeados, 9 automações em operação, 22h/mês economizadas e 84,5% de ganho médio de eficiência.',
      url: ''
    },
    {
      name: '1. Consulta e Download SEFAZ-AM',
      description:
        'Automação em Python (PyAutoGUI) que acessa o portal SEFAZ-AM, consulta extratos de DI por processo e realiza o download em PDF.',
      url: ''
    },
    {
      name: '2. Renomear Arquivos em Lote',
      description:
        'Script de automação para renomear arquivos em lote com base em regras operacionais.',
      url: ''
    },
    {
      name: '3. Organização de Extratos DI',
      description:
        'Automação para mover e organizar automaticamente os extratos de Declaração de Importação.',
      url: ''
    },
    {
      name: '4. Formatação de Etiquetas Zebra',
      description:
        'Geração e formatação automatizada de etiquetas térmicas para impressoras Zebra.',
      url: ''
    },
    {
      name: '5. Estruturação de Pastas Mensais',
      description:
        'Script para criação automática da estrutura de pastas mensais referentes a Notas Fiscais.',
      url: ''
    },
    {
      name: '6. Indicativo de Volumetria Fiscal',
      description:
        'Consolidação automática de dados fiscais de 8 filiais com exportação em CSV.',
      url: ''
    },
    {
      name: '7. Mover Arquivos no SharePoint',
      description:
        'Rotina automatizada de movimentação e organização de documentos no SharePoint.',
      url: ''
    },
    {
      name: '8. Relatório de Transferência entre Filiais (GT1444)',
      description:
        'Tratamento e formatação automatizada de relatórios do sistema Protheus utilizando Python e openpyxl.',
      url: ''
    },
    {
      name: '9. Correção de Inconsistências de Centro de Custo',
      description:
        'Execução de consultas SQL para identificação e correção de divergências contábeis no ERP Protheus.',
      url: ''
    },
    {
      name: 'Analisador de Compatibilidade de Vagas',
      description:
        'Ferramenta desenvolvida em Python que analisa a compatibilidade entre o perfil do candidato e as exigências de uma vaga de emprego.',
      url: ''
    }
  ]
};

let allProjects = [];
let activeFilter = 'all';

function escapeHtml(str) {
  return String(str ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

async function fetchProfile() {
  try {
    let res = await fetch('curriculo.json', { cache: 'no-store' });
    if (!res.ok) {
      res = await fetch('curriculo/curriculo.json', { cache: 'no-store' });
    }
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn('Usando perfil local de fallback:', err);
    return fallbackProfile;
  }
}

function classifyProject(project) {
  const text = `${project.name} ${project.description}`.toLowerCase();
  const tags = [];

  if (text.includes('react')) tags.push('React');
  if (text.includes('typescript')) tags.push('TypeScript');
  if (text.includes('supabase')) tags.push('Supabase');
  if (text.includes('netlify')) tags.push('Netlify');
  if (text.includes('python')) tags.push('Python');
  if (text.includes('pyautogui')) tags.push('PyAutoGUI');
  if (text.includes('openpyxl')) tags.push('openpyxl');
  if (text.includes('sql')) tags.push('SQL');
  if (text.includes('protheus')) tags.push('Protheus');
  if (text.includes('sefaz')) tags.push('SEFAZ-AM');
  if (text.includes('sharepoint')) tags.push('SharePoint');
  if (text.includes('csv')) tags.push('CSV');
  if (text.includes('zebra')) tags.push('Zebra ZPL');
  if (tags.length === 0) tags.push('Automação');

  const cats = [];
  if (text.includes('saas') || text.includes('react')) {
    cats.push('saas');
  }
  if (text.includes('python') || text.includes('sql') || text.includes('csv') || text.includes('compatibilidade')) {
    cats.push('python');
  }
  if (
    text.includes('fiscal') ||
    text.includes('protheus') ||
    text.includes('sefaz') ||
    text.includes('centro de custo') ||
    text.includes('notas fiscais') ||
    text.includes('di')
  ) {
    cats.push('fiscal');
  }
  if (
    text.includes('sharepoint') ||
    text.includes('renomear') ||
    text.includes('pastas') ||
    text.includes('etiquetas') ||
    text.includes('organização')
  ) {
    cats.push('arquivos');
  }
  if (cats.length === 0) cats.push('fiscal');

  const labelMap = {
    saas: 'SaaS & Web App',
    python: 'Python & Dados',
    fiscal: 'ERP & Fiscal',
    arquivos: 'Arquivos & Ops'
  };

  return {
    tags: tags.slice(0, 3),
    cats,
    primaryLabel: labelMap[cats[0]]
  };
}

function renderProfile(profile) {
  document.getElementById('p-name').textContent = profile.name;
  document.getElementById('p-role').textContent = profile.role;
  document.getElementById('p-location').textContent = profile.location;
  document.getElementById('p-status').textContent = profile.status;
  document.getElementById('p-summary').textContent = profile.summary;

  const emailLabel = document.getElementById('p-email-label');
  emailLabel.textContent = profile.email;
  emailLabel.dataset.email = profile.email;

  const emailLink = document.getElementById('p-email');
  emailLink.href = `mailto:${profile.email}`;

  const linkedin = document.getElementById('p-linkedin');
  linkedin.href = (profile.links && profile.links.linkedin) || '#';

  const github = document.getElementById('p-github');
  github.href = (profile.links && profile.links.github) || '#';
}

function renderSkills(containerId, countId, list) {
  const container = document.getElementById(containerId);
  const countEl = document.getElementById(countId);
  const items = list || [];
  if (countEl) countEl.textContent = `${items.length} skills`;

  container.innerHTML = items
    .map(
      (skill) => `
      <div class="skill-row">
        <div class="skill-label">
          <span>
            ${escapeHtml(skill.name)}
            ${skill.source ? `<span class="skill-source">— ${escapeHtml(skill.source)}</span>` : ''}
          </span>
          <span class="skill-pct">${Number(skill.level) || 0}%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" data-level="${Number(skill.level) || 0}"></div>
        </div>
      </div>
    `
    )
    .join('');
}

function renderExperience(list) {
  const container = document.getElementById('experience-log');
  container.innerHTML = (list || [])
    .map((job) => {
      const isCurrent = String(job.period || '').toLowerCase().includes('atual');
      return `
        <article class="timeline-item spotlight-card ${isCurrent ? 'is-current' : ''}">
          <span class="timeline-node" aria-hidden="true"></span>
          <div class="timeline-head">
            <div>
              <div class="timeline-role">${escapeHtml(job.role)}</div>
              <div class="timeline-company">${escapeHtml(job.company)} · ${escapeHtml(job.type)}</div>
            </div>
            <div class="timeline-badges">
              <span class="period-pill ${isCurrent ? 'current' : ''}">${escapeHtml(job.period)}</span>
            </div>
          </div>
          <div class="timeline-meta">${escapeHtml(job.location)}</div>
          <ul class="timeline-highlights">
            ${(job.highlights || []).map((h) => `<li>${escapeHtml(h)}</li>`).join('')}
          </ul>
        </article>
      `;
    })
    .join('');
}

function renderProjects(list, filter = 'all') {
  const featuredContainer = document.getElementById('featured-projects');
  const gridContainer = document.getElementById('projects-list');

  const isFeatured = (p) => !/^\d+\./.test(String(p.name || '').trim());
  const featured = list.filter(isFeatured);
  const numbered = list.filter((p) => !isFeatured(p));

  if (filter === 'all') {
    featuredContainer.hidden = false;
    featuredContainer.innerHTML = featured
      .map((project, idx) => {
        const meta = classifyProject(project);
        const isPanel = project.name.toLowerCase().includes('painel');
        return `
          <article class="featured-card spotlight-card">
            <div>
              <div class="featured-top">
                <span class="featured-tag">${idx <= 1 ? 'Destaque' : 'Ferramenta Python'}</span>
                <span class="project-cat">${meta.primaryLabel}</span>
              </div>
              <h3 class="featured-title">${escapeHtml(project.name)}</h3>
              <p class="featured-desc">${escapeHtml(project.description)}</p>
            </div>
            ${
              isPanel
                ? `
              <div class="automation-progress">
                <div class="automation-progress-meta">
                  <span>Progresso do Pipeline Fiscal</span>
                  <span>9 / 12 concluídas (75%)</span>
                </div>
                <div class="skill-bar-track">
                  <div class="skill-bar-fill" data-level="75" style="width: 75%"></div>
                </div>
              </div>`
                : `
              <div class="project-tags">
                ${meta.tags.map((t) => `<span class="project-tag">${escapeHtml(t)}</span>`).join('')}
              </div>`
            }
            ${
              project.url
                ? `<a class="project-link" href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer">Visitar projeto ↗</a>`
                : ''
            }
          </article>
        `;
      })
      .join('');
  } else {
    featuredContainer.hidden = true;
    featuredContainer.innerHTML = '';
  }

  const pool = filter === 'all' ? numbered : list;
  const filtered = pool.filter((p) => {
    if (filter === 'all') return true;
    return classifyProject(p).cats.includes(filter);
  });

  gridContainer.innerHTML = filtered
    .map((project, i) => {
      const meta = classifyProject(project);
      const match = String(project.name).match(/^(\d+)\.\s*(.*)$/);
      const numLabel = match ? `#${match[1].padStart(2, '0')}` : 'Destaque';
      const cleanName = match ? match[2] : project.name;

      return `
        <article class="project-card spotlight-card">
          <div>
            <div class="project-head">
              <span class="project-num">${numLabel}</span>
              <span class="project-cat">${meta.primaryLabel}</span>
            </div>
            <h3 class="project-name">${escapeHtml(cleanName)}</h3>
            <p class="project-desc">${escapeHtml(project.description)}</p>
          </div>
          <div class="project-tags">
            ${meta.tags.map((t) => `<span class="project-tag">${escapeHtml(t)}</span>`).join('')}
          </div>
          ${
            project.url
              ? `<a class="project-link" href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer">Visitar projeto ↗</a>`
              : ''
          }
        </article>
      `;
    })
    .join('');
}

function renderEducation(list) {
  const container = document.getElementById('education-list');
  container.innerHTML = (list || [])
    .map(
      (edu) => `
      <article class="edu-item spotlight-card">
        <div>
          <div class="edu-degree">${escapeHtml(edu.degree)}</div>
          <div class="edu-inst">${escapeHtml(edu.institution)}</div>
        </div>
        <div class="edu-period">${escapeHtml(edu.period)}</div>
      </article>
    `
    )
    .join('');
}

function animateSkillBars() {
  requestAnimationFrame(() => {
    document.querySelectorAll('.skill-bar-fill[data-level]').forEach((bar) => {
      bar.style.width = `${bar.dataset.level}%`;
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function setupTheme() {
  const saved = localStorage.getItem('ib_theme');
  const initial = saved === 'light' || saved === 'dark' ? saved : 'dark';
  document.documentElement.setAttribute('data-theme', initial);

  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ib_theme', next);
    showToast(next === 'light' ? 'Modo claro ativado' : 'Modo escuro ativado');
  });
}

function setupSpotlight() {
  document.addEventListener('pointermove', (e) => {
    const card = e.target.closest('.spotlight-card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
}

function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderProjects(allProjects, activeFilter);
    });
  });
}

function setupRevealAndScrollSpy() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01, rootMargin: '180px 0px' }
  );
  reveals.forEach((el) => observer.observe(el));

  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener(
    'scroll',
    () => {
      let currentId = 'sobre';
      sections.forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        if (top <= 140) currentId = sec.id;
      });
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
      });
    },
    { passive: true }
  );
}

function setupCommandPalette(profile) {
  const backdrop = document.getElementById('cmdBackdrop');
  const input = document.getElementById('cmdInput');
  const listEl = document.getElementById('cmdList');
  const trigger = document.getElementById('cmdTrigger');
  const closeBtn = document.getElementById('cmdClose');

  const commands = [
    { label: 'Ir para Sobre & Resumo', hint: '#sobre', action: () => location.assign('#sobre') },
    { label: 'Ir para Competências', hint: '#competencias', action: () => location.assign('#competencias') },
    { label: 'Ir para Experiência', hint: '#experiencia', action: () => location.assign('#experiencia') },
    { label: 'Ir para Projetos & Automações', hint: '#projetos', action: () => location.assign('#projetos') },
    { label: 'Ir para Formação', hint: '#formacao', action: () => location.assign('#formacao') },
    {
      label: `Copiar e-mail (${profile.email})`,
      hint: 'Clipboard',
      action: () => copyEmail(profile.email)
    },
    {
      label: 'Alternar tema Claro / Escuro',
      hint: 'Tema',
      action: () => document.getElementById('themeToggle').click()
    },
    { label: 'Exportar / Imprimir PDF', hint: 'Ctrl+P', action: () => window.print() },
    {
      label: 'Abrir LinkedIn',
      hint: 'Externo',
      action: () => window.open(profile.links?.linkedin || '#', '_blank', 'noopener,noreferrer')
    },
    {
      label: 'Abrir GitHub',
      hint: 'Externo',
      action: () => window.open(profile.links?.github || '#', '_blank', 'noopener,noreferrer')
    }
  ];

  function renderCmds(query = '') {
    const q = query.trim().toLowerCase();
    const matched = commands.filter((c) => c.label.toLowerCase().includes(q));
    listEl.innerHTML = matched
      .map(
        (c, idx) => `
        <button type="button" class="cmd-item" data-idx="${idx}">
          <span>${escapeHtml(c.label)}</span>
          <span class="cmd-item-hint">${escapeHtml(c.hint)}</span>
        </button>
      `
      )
      .join('');

    listEl.querySelectorAll('.cmd-item').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        close();
        matched[i].action();
      });
    });
  }

  function open() {
    backdrop.hidden = false;
    input.value = '';
    renderCmds('');
    setTimeout(() => input.focus(), 20);
  }

  function close() {
    backdrop.hidden = true;
  }

  trigger.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });
  input.addEventListener('input', () => renderCmds(input.value));

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (backdrop.hidden) open();
      else close();
    } else if (e.key === 'Escape' && !backdrop.hidden) {
      close();
    }
  });
}

async function copyEmail(email) {
  try {
    await navigator.clipboard.writeText(email);
    showToast(`E-mail copiado: ${email}`);
  } catch {
    showToast(email);
  }
}

async function init() {
  setupTheme();
  setupSpotlight();
  setupFilters();
  setupRevealAndScrollSpy();

  document.getElementById('footerYear').textContent = new Date().getFullYear();
  document.getElementById('printBtn').addEventListener('click', () => window.print());

  const data = await fetchProfile();
  const profile = data.profile || fallbackProfile.profile;
  const skills = data.skills || fallbackProfile.skills;
  const experience = data.experience || fallbackProfile.experience;
  allProjects = data.projects || fallbackProfile.projects;
  const education = data.education || fallbackProfile.education;

  renderProfile(profile);
  renderSkills('skills-mastered', 'masteredCount', skills.mastered);
  renderSkills('skills-learning', 'learningCount', skills.learning);
  renderExperience(experience);
  renderProjects(allProjects, activeFilter);
  renderEducation(education);
  setupCommandPalette(profile);

  document.getElementById('copyEmailBtn').addEventListener('click', () => copyEmail(profile.email));
  setTimeout(animateSkillBars, 150);
}

init();
