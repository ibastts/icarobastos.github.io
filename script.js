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
      name: 'CaixaClaro — Gestão Simples PJ e PF (App Web / SaaS)',
      description:
        'Aplicativo financeiro completo para PMEs e autônomos: separa o caixa da empresa (PJ) do pessoal (PF), controla estoque com leitor de código de barras, gerencia entregas, gera comprovantes e relatórios em PNG e oferece 2 abas sob medida. Construído com React, TypeScript, Tailwind CSS, Supabase e publicado no Netlify.',
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
    .map((job, idx) => {
      const isCurrent = String(job.period || '').toLowerCase().includes('atual');
      return `
        <article class="timeline-item spotlight-card ${isCurrent ? 'is-current' : ''}" data-exp-idx="${idx}">
          <span class="timeline-node" aria-hidden="true"></span>
          <div class="timeline-head">
            <div>
              <div class="timeline-role">${escapeHtml(job.role)} <span class="timeline-toggle-hint">${isCurrent ? '▾' : '▾'}</span></div>
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

  container.querySelectorAll('.timeline-item').forEach((item) => {
    item.addEventListener('click', () => {
      const collapsed = item.classList.toggle('is-collapsed');
      const hint = item.querySelector('.timeline-toggle-hint');
      if (hint) hint.textContent = collapsed ? '▸' : '▾';
    });
  });
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
        const pIdx = list.indexOf(project);
        return `
          <article class="featured-card spotlight-card" data-project-idx="${pIdx}" tabindex="0" role="button" aria-label="Ver detalhes de ${escapeHtml(project.name)}">
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

      const pIdx = list.indexOf(project);
      return `
        <article class="project-card spotlight-card" data-project-idx="${pIdx}" tabindex="0" role="button" aria-label="Ver detalhes de ${escapeHtml(cleanName)}">
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

function easeOutQuad(t) {
  return 1 - (1 - t) * (1 - t);
}

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function getPillEdges(target, container) {
  const t = target.offsetTop;
  const l = target.offsetLeft;
  const r = Math.max(0, container.clientWidth - (l + target.offsetWidth));
  const b = Math.max(0, container.clientHeight - (t + target.offsetHeight));
  return { t, r, b, l };
}

function applyPillClip(pill, st) {
  pill.style.clipPath = `inset(${st.t.toFixed(2)}px ${st.r.toFixed(2)}px ${st.b.toFixed(2)}px ${st.l.toFixed(2)}px round 9999px)`;
}

function slidePill(pill, target, container, instant = false) {
  if (!pill || !target || !container || target.offsetWidth === 0) return;

  const to = getPillEdges(target, container);
  if (instant || !pill._st) {
    pill._st = { ...to };
    applyPillClip(pill, pill._st);
    pill.classList.add('ready');
    return;
  }

  const from = { ...pill._st };
  const vertical = Math.abs(to.t - from.t) > Math.abs(to.l - from.l);
  const fwd = vertical ? to.t > from.t : to.l > from.l;
  const [lead, trail] = vertical
    ? (fwd ? ['b', 't'] : ['t', 'b'])
    : (fwd ? ['r', 'l'] : ['l', 'r']);

  if (pill._raf) cancelAnimationFrame(pill._raf);
  const start = performance.now();
  const leadDur = 310;
  const trailDur = 480;

  function step(now) {
    const elapsed = now - start;
    const pLead = Math.min(1, elapsed / leadDur);
    const pTrail = Math.min(1, elapsed / trailDur);
    const eLead = easeOutQuad(pLead);
    const eTrail = easeInOutQuad(pTrail);

    pill._st[lead] = from[lead] + (to[lead] - from[lead]) * eLead;
    pill._st[trail] = from[trail] + (to[trail] - from[trail]) * eTrail;
    const otherA = vertical ? 'l' : 't';
    const otherB = vertical ? 'r' : 'b';
    pill._st[otherA] = from[otherA] + (to[otherA] - from[otherA]) * eLead;
    pill._st[otherB] = from[otherB] + (to[otherB] - from[otherB]) * eLead;

    applyPillClip(pill, pill._st);

    if (pTrail < 1) {
      pill._raf = requestAnimationFrame(step);
    } else {
      pill._st = { ...to };
      applyPillClip(pill, pill._st);
      pill._raf = null;
    }
  }

  pill._raf = requestAnimationFrame(step);
}

function setupFilters() {
  const filterBar = document.querySelector('.filter-bar');
  const filterPill = document.getElementById('filterPill');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      slidePill(filterPill, btn, filterBar);
      activeFilter = btn.dataset.filter;
      renderProjects(allProjects, activeFilter);
    });
  });

  const activeBtn = filterBar?.querySelector('.filter-btn.active');
  if (activeBtn) {
    requestAnimationFrame(() => slidePill(filterPill, activeBtn, filterBar, true));
  }
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
  const navBar = document.querySelector('.nav-links');
  const navPill = document.getElementById('navPill');
  const navLinks = document.querySelectorAll('.nav-link');

  function syncNavPill(instant = false) {
    const activeLink = navBar?.querySelector('.nav-link.active');
    if (activeLink) slidePill(navPill, activeLink, navBar, instant);
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
      syncNavPill(false);
    });
  });

  requestAnimationFrame(() => syncNavPill(true));
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      syncNavPill(true);
      const filterBar = document.querySelector('.filter-bar');
      const filterPill = document.getElementById('filterPill');
      const activeFilterBtn = filterBar?.querySelector('.filter-btn.active');
      if (activeFilterBtn) slidePill(filterPill, activeFilterBtn, filterBar, true);
    });
  }

  window.addEventListener(
    'scroll',
    () => {
      let currentId = 'sobre';
      sections.forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        if (top <= 140) currentId = sec.id;
      });
      let changed = false;
      navLinks.forEach((link) => {
        const shouldBeActive = link.getAttribute('href') === `#${currentId}`;
        if (shouldBeActive && !link.classList.contains('active')) changed = true;
        link.classList.toggle('active', shouldBeActive);
      });
      if (changed) syncNavPill(false);
    },
    { passive: true }
  );

  window.addEventListener('resize', () => {
    syncNavPill(true);
    const filterBar = document.querySelector('.filter-bar');
    const filterPill = document.getElementById('filterPill');
    const activeFilterBtn = filterBar?.querySelector('.filter-btn.active');
    if (activeFilterBtn) slidePill(filterPill, activeFilterBtn, filterBar, true);
  });
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
      label: 'Abrir CaixaClaro (App Web ao vivo)',
      hint: 'Produto',
      action: () => window.open('https://meunegocio-facil.netlify.app', '_blank', 'noopener,noreferrer')
    },
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

function setupKpiAnimations() {
  document.querySelectorAll('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count) || 0;
    const suffix = el.dataset.suffix || '';
    const dur = 850;
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / dur);
      const val = Math.round(target * easeOutQuad(p));
      el.textContent = `${val}${suffix}`;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });

  document.querySelectorAll('[data-jump-filter], [data-filter-jump]').forEach((el) => {
    el.addEventListener('click', () => {
      const filter = el.dataset.jumpFilter || el.dataset.filterJump;
      const btn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
      if (btn) btn.click();
      document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function setupEfficiencyChart() {
  const svg = document.getElementById('splineSvg');
  const tooltip = document.getElementById('chartTooltip');
  const tLabel = document.getElementById('tooltipLabel');
  const tVal = document.getElementById('tooltipVal');
  const mainVal = document.getElementById('chartMainVal');
  const deltaEl = document.getElementById('chartDelta');
  const switchBar = document.getElementById('chartMetricSwitch');
  const chartPill = document.getElementById('chartPill');
  if (!svg || !switchBar) return;

  const datasets = {
    hours: {
      headline: '22h/mês',
      delta: '+84,5% eficiência',
      points: [
        { label: 'Mês 1 · SEFAZ', val: 4, text: '4h / mês' },
        { label: 'Mês 2 · Lote & DI', val: 8, text: '8h / mês' },
        { label: 'Mês 3 · Zebra ZPL', val: 12, text: '12h / mês' },
        { label: 'Mês 4 · Volumetria', val: 16, text: '16h / mês' },
        { label: 'Mês 5 · SharePoint', val: 19, text: '19h / mês' },
        { label: 'Mês 6 · Feriado IA', val: 22, text: '22h / mês' }
      ],
      max: 25
    },
    efficiency: {
      headline: '84,5%',
      delta: 'Redução de retrabalho',
      points: [
        { label: 'Mês 1 · SEFAZ', val: 45, text: '45,0% ganho' },
        { label: 'Mês 2 · Lote & DI', val: 58, text: '58,0% ganho' },
        { label: 'Mês 3 · Zebra ZPL', val: 67, text: '67,5% ganho' },
        { label: 'Mês 4 · Volumetria', val: 76, text: '76,0% ganho' },
        { label: 'Mês 5 · SharePoint', val: 81, text: '81,2% ganho' },
        { label: 'Mês 6 · Feriado IA', val: 84.5, text: '84,5% ganho' }
      ],
      max: 100
    },
    automations: {
      headline: '9 / 12',
      delta: '3 em desenvolvimento',
      points: [
        { label: 'Mês 1 · SEFAZ', val: 2, text: '2 automações' },
        { label: 'Mês 2 · Lote & DI', val: 4, text: '4 automações' },
        { label: 'Mês 3 · Zebra ZPL', val: 5, text: '5 automações' },
        { label: 'Mês 4 · Volumetria', val: 7, text: '7 automações' },
        { label: 'Mês 5 · SharePoint', val: 8, text: '8 automações' },
        { label: 'Mês 6 · Feriado IA', val: 9, text: '9 automações' }
      ],
      max: 12
    }
  };

  function renderChart(key) {
    const ds = datasets[key];
    mainVal.textContent = ds.headline;
    deltaEl.textContent = ds.delta;

    const w = 540;
    const h = 165;
    const padX = 24;
    const padTop = 26;
    const padBot = 24;
    const plotH = h - padTop - padBot;

    const coords = ds.points.map((pt, i) => {
      const x = padX + (i / (ds.points.length - 1)) * (w - padX * 2);
      const y = padTop + plotH - (pt.val / ds.max) * plotH;
      return { x, y, ...pt };
    });

    let lineD = `M ${coords[0].x} ${coords[0].y}`;
    for (let i = 0; i < coords.length - 1; i++) {
      const c1x = (coords[i].x + coords[i + 1].x) / 2;
      lineD += ` C ${c1x} ${coords[i].y}, ${c1x} ${coords[i + 1].y}, ${coords[i + 1].x} ${coords[i + 1].y}`;
    }
    const areaD = `${lineD} L ${coords[coords.length - 1].x} ${h - padBot} L ${coords[0].x} ${h - padBot} Z`;
    const baseY = (padTop + plotH * 0.62).toFixed(1);

    svg.innerHTML = `
      <defs>
        <linearGradient id="kerfaAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f27c54" stop-opacity="0.38" />
          <stop offset="100%" stop-color="#f27c54" stop-opacity="0.0" />
        </linearGradient>
      </defs>
      <line x1="${padX}" y1="${baseY}" x2="${w - padX}" y2="${baseY}" stroke="rgba(255,255,255,0.12)" stroke-dasharray="4 5" stroke-width="1.2" />
      <path d="${areaD}" fill="url(#kerfaAreaGrad)" />
      <path d="${lineD}" fill="none" stroke="#f27c54" stroke-width="2.8" stroke-linecap="round" />
      ${coords
        .map(
          (c, idx) => `
        <g>
          <circle class="chart-point" cx="${c.x}" cy="${c.y}" r="${idx === coords.length - 1 ? 5.5 : 4}" fill="${idx === coords.length - 1 ? '#ffffff' : '#f27c54'}" stroke="#f27c54" stroke-width="2.5" data-idx="${idx}" />
          <circle cx="${c.x}" cy="${c.y}" r="16" fill="transparent" class="chart-hit" data-idx="${idx}" style="cursor:pointer" />
        </g>
      `
        )
        .join('')}
    `;

    function showPt(idx) {
      const pt = coords[idx];
      if (!pt) return;
      tLabel.textContent = pt.label;
      tVal.textContent = pt.text;
      tooltip.style.left = `${(pt.x / w) * 100}%`;
      tooltip.style.top = `${(pt.y / h) * 100}%`;
      tooltip.hidden = false;
    }

    svg.querySelectorAll('.chart-hit').forEach((hit) => {
      hit.addEventListener('mouseenter', () => showPt(Number(hit.dataset.idx)));
      hit.addEventListener('click', () => showPt(Number(hit.dataset.idx)));
    });
    svg.addEventListener('mouseleave', () => {
      tooltip.hidden = true;
    });
  }

  const buttons = switchBar.querySelectorAll('.seg-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      slidePill(chartPill, btn, switchBar);
      renderChart(btn.dataset.metric);
    });
  });

  renderChart('hours');
  const activeSeg = switchBar.querySelector('.seg-btn.active');
  if (activeSeg) {
    requestAnimationFrame(() => slidePill(chartPill, activeSeg, switchBar, true));
    document.fonts?.ready?.then(() => slidePill(chartPill, activeSeg, switchBar, true));
  }
}

function setupPillarBars() {
  const container = document.getElementById('pillarBars');
  const valEl = document.getElementById('pillarActiveVal');
  const nameEl = document.getElementById('pillarActiveName');
  const detailEl = document.getElementById('pillarDetail');
  if (!container) return;

  const pillars = [
    { short: 'Excel', name: 'Excel Avançado', pct: 90, detail: 'Tabelas dinâmicas, conciliação e controle de retrabalho operacional.' },
    { short: 'Protheus', name: 'ERP Protheus', pct: 80, detail: 'Lançamento de títulos, cadastros, centros de custo e relatórios GT1444.' },
    { short: 'Workf.', name: 'Workfinity', pct: 80, detail: 'Geração de relatórios operacionais e acompanhamento de ordens de serviço.' },
    { short: 'Lexio', name: 'Lexio Contratos', pct: 80, detail: 'Criação e monitoramento completo de contratos do envio à assinatura.' },
    { short: 'Fiscal', name: 'e-CAC / E115', pct: 75, detail: 'Lançamentos de impostos federais, CCE e conformidade fiscal.' },
    { short: 'Python', name: 'Python & SQL', pct: 55, detail: 'Automação SEFAZ-AM, openpyxl, PyAutoGUI, APIs e consultas SQL.' }
  ];

  container.innerHTML = pillars
    .map(
      (p, i) => `
      <button type="button" class="pillar-col ${i === 0 ? 'active' : ''}" data-pillar="${i}">
        <div class="pillar-track">
          <div class="pillar-bar" style="height: ${p.pct}%"></div>
        </div>
        <span class="pillar-label">${p.short}</span>
      </button>
    `
    )
    .join('');

  function selectPillar(idx) {
    const p = pillars[idx];
    container.querySelectorAll('.pillar-col').forEach((c, i) => c.classList.toggle('active', i === idx));
    valEl.textContent = `${p.pct}%`;
    nameEl.textContent = p.name;
    detailEl.textContent = p.detail;
  }

  container.querySelectorAll('.pillar-col').forEach((col) => {
    col.addEventListener('click', () => selectPillar(Number(col.dataset.pillar)));
    col.addEventListener('mouseenter', () => selectPillar(Number(col.dataset.pillar)));
  });
}

function setupProjectModal() {
  const backdrop = document.getElementById('projectModalBackdrop');
  const closeBtn = document.getElementById('pmClose');
  const prevBtn = document.getElementById('pmPrev');
  const nextBtn = document.getElementById('pmNext');
  const numEl = document.getElementById('pmNum');
  const catEl = document.getElementById('pmCat');
  const titleEl = document.getElementById('pmTitle');
  const descEl = document.getElementById('pmDesc');
  const tagsEl = document.getElementById('pmTags');
  const linkEl = document.getElementById('pmLink');
  if (!backdrop) return;

  let currentIdx = 0;

  function showProject(idx) {
    if (!allProjects.length) return;
    currentIdx = (idx + allProjects.length) % allProjects.length;
    const p = allProjects[currentIdx];
    const meta = classifyProject(p);
    const match = String(p.name).match(/^(\d+)\.\s*(.*)$/);
    numEl.textContent = match ? `#${match[1].padStart(2, '0')}` : 'Destaque';
    catEl.textContent = meta.primaryLabel;
    titleEl.textContent = match ? match[2] : p.name;
    descEl.textContent = p.description;
    tagsEl.innerHTML = meta.tags.map((t) => `<span class="project-tag">${escapeHtml(t)}</span>`).join('');
    if (p.url) {
      linkEl.href = p.url;
      linkEl.hidden = false;
    } else {
      linkEl.hidden = true;
    }
    backdrop.hidden = false;
  }

  function closeModal() {
    backdrop.hidden = true;
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('a.project-link')) return;
    const card = e.target.closest('[data-project-idx]');
    if (!card) return;
    showProject(Number(card.dataset.projectIdx));
  });

  document.addEventListener('keydown', (e) => {
    if (backdrop.hidden) return;
    if (e.key === 'Escape') closeModal();
    else if (e.key === 'ArrowLeft') showProject(currentIdx - 1);
    else if (e.key === 'ArrowRight') showProject(currentIdx + 1);
  });

  closeBtn.addEventListener('click', closeModal);
  prevBtn.addEventListener('click', () => showProject(currentIdx - 1));
  nextBtn.addEventListener('click', () => showProject(currentIdx + 1));
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  const caixaDetailsBtn = document.getElementById('caixaclaroDetailsBtn');
  if (caixaDetailsBtn) {
    caixaDetailsBtn.addEventListener('click', () => showProject(0));
  }
}

async function init() {
  setupTheme();
  setupSpotlight();
  setupFilters();
  setupRevealAndScrollSpy();
  setupKpiAnimations();
  setupEfficiencyChart();
  setupPillarBars();
  setupProjectModal();

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
