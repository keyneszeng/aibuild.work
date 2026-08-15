/* ═══════════════════════════════════════════════
   aibuild.work — 交互与动画 v2
   粒子网络 · 3D 倾斜 · 磁吸按钮 · 打字效果
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── 1. 粒子网络 Canvas ──
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: -9999, y: -9999 };
    let animId = null;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) { this.vx *= -1; }
        if (this.y < 0 || this.y > canvas.height) { this.vy *= -1; }
        // 鼠标交互
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200 * 0.02;
          this.vx -= dx / dist * force;
          this.vy -= dy / dist * force;
        }
        // 速度限制
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > 1.2) { this.vx = (this.vx / speed) * 1.2; this.vy = (this.vy / speed) * 1.2; }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(145, 180, 255, ${this.alpha})`;
        ctx.fill();
      }
    }

    // 粒子数量按屏幕大小调整
    function initParticles() {
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 80);
      particles = [];
      for (let i = 0; i < count; i++) particles.push(new Particle());
    }
    initParticles();
    window.addEventListener('resize', () => { resize(); initParticles(); });

    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(91, 141, 239, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawLines();
      animId = requestAnimationFrame(animate);
    }
    animate();

    // 鼠标追踪
    document.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    document.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
    // 触摸支持
    document.addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      mouse.x = t.clientX;
      mouse.y = t.clientY;
    });
    document.addEventListener('touchend', () => { mouse.x = -9999; mouse.y = -9999; });
  }

  // ── 2. 3D 倾斜卡片 (Parallax Tilt) ──
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform =
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
    });
  });

  // ── 3. 磁吸按钮 ──
  const magneticBtns = document.querySelectorAll('.btn-magnetic');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const dist = Math.sqrt(x * x + y * y);
      const maxDist = 150;
      if (dist < maxDist) {
        const strength = (1 - dist / maxDist) * 4;
        const angle = Math.atan2(y, x);
        const moveX = Math.cos(angle) * strength;
        const moveY = Math.sin(angle) * strength;
        btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // ── 4. 打字效果 ──
  const typeElements = document.querySelectorAll('.type-text');
  typeElements.forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    el.style.visibility = 'visible';
    let i = 0;
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 30 + Math.random() * 20);
      }
    }
    // 使用 Intersection Observer 触发打字
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            type();
            obs.unobserve(el);
          }
        });
      }, { threshold: 0.3 });
      obs.observe(el);
    } else {
      type();
    }
  });

  // ── 5. 导航栏滚动效果 ──
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

  // ── 6. Intersection Observer：滚动进入视口动画 ──
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
    animElements.forEach((el) => el.classList.add('visible'));
  }

  // ── 7. 数字跳动动画 ──
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

  // ── 8. 平滑锚点跳转 ──
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

  // ── 9. 新闻标签筛选 ──
  const filterBtns = document.querySelectorAll('.filters button');
  const posts = document.querySelectorAll('.post-item');
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
            void post.offsetWidth;
            post.classList.add('visible');
          } else {
            post.style.display = 'none';
          }
        });
      });
    });
  }

  // ── 10. 课程矩阵标签切换 ──
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

  // ── 11. 语言切换 ──
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

  // ── 12. 课程展开/折叠 ──
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