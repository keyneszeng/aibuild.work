/* ═══════════════════════════════════════════════
   aibuild.work — 交互与动画
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── 导航栏滚动效果 ──
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          navbar.classList.toggle('scrolled', window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ── Intersection Observer：滚动进入视口动画 ──
  const animElements = document.querySelectorAll('.anim-fade, .anim-fade-up, .anim-scale, .anim-stagger');

  if (animElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    animElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: 直接显示
    animElements.forEach((el) => el.classList.add('visible'));
  }

  // ── 数字跳动动画 ──
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target, 10);
            if (isNaN(target)) return;
            const duration = 1500;
            const start = performance.now();

            function update(now) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // easeOutExpo
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const current = Math.round(eased * target);
              el.textContent = current.toLocaleString();
              if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => counterObserver.observe(el));
  }

  // ── 平滑锚点跳转（兼容移动端） ──
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── 新闻标签筛选 ──
  const filterBtns = document.querySelectorAll('.filters button');
  const posts = document.querySelectorAll('.post');
  if (filterBtns.length > 0 && posts.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('on'));
        btn.classList.add('on');
        const cat = btn.dataset.cat || 'all';
        posts.forEach((post) => {
          if (cat === 'all' || post.dataset.cat === cat) {
            post.style.display = 'flex';
            post.classList.add('anim-fade');
            // 触发重排以重启动画
            void post.offsetWidth;
            post.classList.add('visible');
          } else {
            post.style.display = 'none';
          }
        });
      });
    });
  }

  // ── 课程矩阵标签切换 ──
  const navBtns = document.querySelectorAll('.cur-nav button');
  const sections = document.querySelectorAll('.cur-section');
  if (navBtns.length > 0 && sections.length > 0) {
    navBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        navBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.section;
        sections.forEach((sec) => {
          sec.classList.toggle('show', sec.id === target);
        });
      });
    });
  }

  // ── 语言切换 ──
  const langBtns = document.querySelectorAll('.lang-btn');
  if (langBtns.length > 0) {
    langBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        langBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const lang = btn.dataset.lang;
        document.querySelectorAll('.lang-zh, .lang-en').forEach((el) => {
          el.style.display = el.classList.contains('lang-' + lang) ? '' : 'none';
        });
      });
    });
  }

  // ── 课程展开/折叠 ──
  document.querySelectorAll('.cur-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.target);
      if (target) {
        const isOpen = target.classList.toggle('open');
        btn.textContent = isOpen ? '收起 −' : '展开 +';
      }
    });
  });

})();