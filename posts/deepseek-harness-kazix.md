<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>卡兹克：DeepSeek Harness 深度解读 · 创新资讯</title>
<style>
:root{--bg:#070b1a;--bg2:#0d1430;--card:rgba(255,255,255,.035);--line:rgba(120,160,255,.14);
--txt:#e8edff;--sub:#94a3c8;--accent:#5b8def;--accent2:#4ecdc4;
--glow:rgba(91,141,239,.30);--radius:16px}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",Segoe UI,sans-serif;
background:var(--bg);color:var(--txt);line-height:1.75;overflow-x:hidden;-webkit-font-smoothing:antialiased}
.bg-grid{position:fixed;inset:0;z-index:-2;
background-image:linear-gradient(rgba(91,141,239,.06) 1px,transparent 1px),
linear-gradient(90deg,rgba(91,141,239,.06) 1px,transparent 1px);
background-size:48px 48px;
mask-image:radial-gradient(ellipse 75% 55% at 50% 0%,#000 35%,transparent 100%)}
.bg-glow{position:fixed;inset:0;z-index:-1;
background:radial-gradient(55% 38% at 82% 8%,rgba(91,141,239,.16),transparent),
radial-gradient(45% 35% at 12% 16%,rgba(78,205,196,.12),transparent)}
.wrap{max-width:800px;margin:0 auto;padding:0 22px}
.topbar{padding:22px 0;display:flex;align-items:center;justify-content:space-between}
.topbar a{color:var(--accent);text-decoration:none;font-size:14px;font-weight:600}
.topbar a:hover{text-decoration:underline}
.topbar .brand{font-weight:800;font-size:15px;color:var(--txt)}
.badge{display:inline-flex;align-items:center;gap:8px;padding:7px 15px;border:1px solid var(--line);
border-radius:30px;font-size:13px;color:var(--accent2);background:var(--card);margin:30px 0 18px}
.badge .dot{width:7px;height:7px;border-radius:50%;background:var(--accent2);box-shadow:0 0 9px var(--accent2)}
h1{font-size:clamp(24px,4.4vw,36px);line-height:1.28;font-weight:800;margin-bottom:14px}
.meta{color:var(--sub);font-size:13.5px;margin-bottom:10px}
.meta a{color:var(--accent);text-decoration:none}
.lead{color:var(--sub);font-size:16px;background:var(--card);border:1px solid var(--line);
border-radius:14px;padding:18px 22px;margin:22px 0 30px}
h2{font-size:21px;margin:34px 0 12px;color:var(--accent);font-weight:800}
h3{font-size:16.5px;margin:22px 0 8px;color:var(--txt)}
p{margin:12px 0;color:var(--txt);opacity:.92}
ul,ol{margin:12px 0 12px 22px;color:var(--txt);opacity:.92}
li{margin:7px 0}
.box{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px 22px;margin:20px 0}
.box .h{color:var(--accent2);font-weight:700;font-size:14px;margin-bottom:8px}
.tagline{color:var(--sub);font-size:13px;border-left:3px solid var(--accent);padding-left:12px;margin:18px 0}
.code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;background:rgba(0,0,0,.3);
border:1px solid var(--line);border-radius:8px;padding:8px 12px;font-size:13px;color:var(--accent2)}
.foot{margin-top:40px;padding:20px 22px;border:1px dashed var(--line);border-radius:14px;color:var(--sub);font-size:13px}
.foot b{color:var(--accent2)}
footer{text-align:center;padding:40px 0 56px;color:var(--sub);font-size:13px;border-top:1px solid var(--line);margin-top:46px}
footer a{color:var(--accent);text-decoration:none}
@media(max-width:680px){.wrap{padding:0 18px}}
</style>
</head>
<body>
<div class="bg-grid"></div>
<div class="bg-glow"></div>

<div class="wrap">
  <div class="topbar">
    <a href="../news.html">← 返回创新资讯</a>
    <span class="brand">🧪 AI 技能升级课程体系</span>
  </div>

  <div class="badge"><span class="dot"></span> 创新资讯 · 国产 Agent / 模型</div>
  <h1>卡兹克：DeepSeek Harness 深度解读——一切皆插件</h1>
  <div class="meta">作者：数字生命卡兹克（@Khazix0918） · 发布：2026-08-14 ·
    <a href="https://x.com/Khazix0918/status/2088074732730208592" target="_blank" rel="noopener">查看原文 ↗</a></div>

  <div class="lead">
    DeepSeek 在 V4 Pro 正式版发布后，推出了自家 Agent 产品 <strong>DeepSeek Harness</strong>。它的核心理念是「一切皆插件」——所有能力都拆成可插拔的模块，由一个极简内核 Cordis 统一调度。本文是卡兹克体验 + 扒完开发者文档后的深度解读，帮你搞懂：它是什么、为什么叫 Harness 不叫 Code、以及到底怎么用。
  </div>

  <div class="box">
    <div class="h">📌 本文要点速览</div>
    <ul>
      <li><b>定位</b>：不是「Agent 产品」，而是展示 Cordis 内核的<strong>科研型基础设施</strong>；发布即「开发者预览版」，鼓励开发者进来造插件、共建生态。</li>
      <li><b>核心理念</b>：<code class="code">Agent = Model + Harness</code>。Harness 是 Agent 的「外壳 + 工具 + 调度」，各家产品（Claude Code / Codex / WorkBuddy）本质都是 Harness。</li>
      <li><b>最大不同</b>：别人的 Harness 把工具/Skills/沙箱全封装好；DeepSeek 把它们<strong>全拆成插件</strong>，你都能自定义。</li>
      <li><b>四种模式</b>：标准 / PTC / 极简 / 创造——其中「创造模式」能让 Agent 现场造插件、改造自己。</li>
      <li><b>作者判语</b>：概念很牛，但对普通用户<strong>非常不友好</strong>（术语多、门槛高、功能少、体验差）；适合开发者与研究，不适合小白日常。</li>
    </ul>
  </div>

  <h2>一、先搞懂：Harness 是什么</h2>
  <p>DeepSeek 官网上放了一条公式：</p>
  <div class="box"><div class="h" style="text-align:center">Agent = Model + Harness</div></div>
  <p>这个公式源自 LangChain 聊 Agent Harness 时的提法：一个好的 Agent，必然由 Harness 和模型一起构成。你用的 Claude Code、Codex、WorkBuddy，本质都是 Harness，得搭配 Claude Fable 5、GPT 5.6-Sol 这类模型才能跑，否则就是空壳。</p>
  <p>一个 Harness 的构成很复杂：工具、Skills 系统、会话、沙箱、存储、Agent 循环、调度、子 Agent、工作流……过去这些全被厂商封装在软件壳里，普通用户看不到也不需要知道，能自定义的只有 Skill、MCP 这类。</p>

  <h2>二、DeepSeek 的做法：一切皆插件</h2>
  <p>在 DeepSeek Harness 里，上面<strong>所有东西都被包装成插件</strong>，你全都可以自定义。很像以前玩过的模块化手机——所有部件都能随便改。</p>
  <p>真正的核心只有一个，叫 <b>Cordis 内核</b>（作者已加入 DeepSeek，配套发了一篇 88 页论文）。它干的事极其克制：<strong>只负责插件的加载、卸载和依赖管理</strong>，其他什么都不管。</p>
  <p>最牛的是：<b>Agent 运行过程中可以随时更换插件，且不崩</b>。靠两个特性：</p>
  <ul>
    <li><b>时间可组合性（Temporal composability）</b>：一个插件卸载后，它之前产生的副作用能否完整撤销。</li>
    <li><b>空间可组合性（Spatial composability）</b>：插件依赖其他插件时，当依赖出现 / 消失 / 改变，它能动态重新处理自己的依赖。</li>
  </ul>
  <p>这两个特性让 Agent 能在运行中不断给自己插拔能力、开发安装卸载插件，形成某种意义的<strong>自进化</strong>。所以说它更像一个展示 Cordis 内核、预置了 100 多个一方插件的科研成果，而不是成品 Agent 产品。</p>

  <h2>三、为什么叫 Harness，不叫 Code</h2>
  <p>因为它做的不是 Agent 产品，而是一个<strong>基建 / Harness 系统</strong>。它需要全世界开发者进来一起插拔、造各种插件，丰富生态，形成新时代平台，同时完成 Agent 自进化。所以这次版本叫「开发者预览版」。</p>
  <p class="tagline">也因此社区争议很大：一边说理念太牛，一边说「鬼才用，我为什么要没事插拔」。</p>

  <h2>四、怎么上手</h2>
  <ul>
    <li>官网：<code class="code">deepseek.com/harness</code>（文内为原文链接，以官网实际为准）</li>
    <li>装好后会弹出一个本地网址，复制到浏览器打开。</li>
    <li>首次运行填 DeepSeek API（去 <code class="code">platform.deepseek.com</code> 搞一个，记得充钱）。</li>
    <li>模型可选 Flash / Pro，也能选思考强度。</li>
  </ul>
  <div class="box">
    <div class="h">⚠️ 价格提醒（作者重点吐槽）</div>
    <p style="margin:0">DeepSeek V4 Pro <strong>正式涨价</strong>，涨幅明显：V4 Pro 缓存命中价格直接涨了约 12 倍，高峰期输出价到约 27 元/单位，性价比对比 GLM、Qwen 3.8 Max 已拉不开差距。作者直言「曾的价格屠夫少了很多吸引力」。</p>
  </div>
  <p>但 Harness 并<strong>没把你锁死在 DeepSeek 模型上</strong>：支持添加目录里的模型提供方，也支持自定义提供方、Base URL、协议和模型列表——以后完全可以把别家模型（如 GLM）接进来用。</p>

  <h2>五、四种模式（最让普通用户懵的地方）</h2>
  <p>作者强调：这四种不是 Cordis 内核本身，而是<strong>开箱即用的模板预设</strong>。</p>
  <h3>1. 标准模式</h3>
  <p>第一次用或不懂底层机制，<strong>无脑选它</strong>。拥有完整代码 Agent 能力：文件读写、Shell、文件搜索、网页搜索、Skills、计划、目标、后台任务、子 Agent、工作流——都已预设好。</p>
  <h3>2. PTC 模式</h3>
  <p>拥有标准模式全部能力，区别在工具呈现方式：给模型一套 Code Mode SDK，让模型写一段 TypeScript 程序，在一次 <code class="code">run_code</code> 里组合多个工具操作。把原本可能需要五次模型往返的活压进一次程序执行，更省 Token。但需要模型有稳定代码规划能力、调试难，<strong>小白先别碰</strong>。</p>
  <h3>3. 极简模式</h3>
  <p>只给两个核心工具：一个持久 Bash + 一个文件编辑器。系统提示词固定成「你是一个有帮助的软件工程助手」，去掉上下文压缩和大量额外能力。主要用于<strong>最小环境下的模型基准测试</strong>，日常别用。</p>
  <h3>4. 创造模式（最特别）</h3>
  <p>拥有标准模式完整能力，还能检查正在运行的 Cordis 环境、在内存中试验插件、帮你创建新的 Agent 和插件——<strong>让 Agent 直接改造自己</strong>。比如：</p>
  <ul>
    <li>「帮我做一个只允许读代码、不允许改文件的安全审计模式。」</li>
    <li>「帮我做一个接入公司内部搜索、固定某模型、有三种专属 Skills 的研究 Agent。」</li>
  </ul>
  <p>比喻：Agent 发现自己没有扳手，于是现场造了一把扳手、插到自己手上，接着干。这是 Harness 最核心的特点，也是 Cordis 最棒的体现。</p>

  <h2>六、对开发者友好的两点</h2>
  <ul>
    <li><b>会话即只追加的事件日志</b>：系统提示词、用户消息、推理、工具调用与结果、权限变化、上下文注入、压缩、子 Agent 调度都成日志事件，下一轮历史从日志重新推导。轨迹视图可按来源查看每次运行——<strong>可观测、可审计、可复现</strong>，非常适合研究（很多 Agent 失败后你根本不知道在哪步跑偏）。</li>
    <li><b>社区插件入口</b>：作者推荐了 5 个三方插件增强体验：
      <ul>
        <li><code class="code">dsh-at-file</code>：输入框 @ 直接调用文件。</li>
        <li><code class="code">dsh-genui</code>：回复里直接渲染图表/表格/表单/Diff/Mermaid/交互面板。</li>
        <li><code class="code">dsh-automation</code>：补上自动化能力。</li>
        <li><code class="code">DSH-better-sidebar</code>：补一套类 VS Code 工作台（文件管理、终端、Git、Diff、内嵌浏览器、后台任务、子代理状态）。</li>
        <li><code class="code">ModLens</code>：给纯文本 DeepSeek 模型补上视觉能力（粘贴图片即可读图）。</li>
      </ul>
    </li>
  </ul>

  <h2>七、写在最后（作者判语）</h2>
  <p>DeepSeek Harness 是一个非常有趣的系统，插件插拔概念很棒，但从产品角度对普通用户<strong>非常不友好</strong>——过多开发者术语、过高使用门槛、过少功能、过差体验，每一步都劝退。但 DeepSeek 可能本就是更重科研与探索的团队，正如其 Slogan：<b>探索未至之境</b>。</p>

  <div class="box">
    <div class="h">🛡️ 阅读时的安全 / 选型提醒（与课程体系红线一致）</div>
    <ul>
      <li>它支持接任意自定义模型提供方与 Base URL——注意只接你<strong>信任的来源</strong>，避免把密钥交给不明服务。</li>
      <li>「创造模式」能让 Agent 现场改自己、装未知插件，运行前确认插件来源可信，避免引入有副作用的第三方代码。</li>
      <li>涉及公司数据、客户信息、密钥，不要无脑交给任何 AI 工具——人判断、AI 辅助。</li>
      <li>价格与功能更新极快，以官网 <code class="code">deepseek.com/harness</code> 和客户端实际显示为准。</li>
    </ul>
  </div>

  <div class="foot">
    📌 本文由《AI 技能升级课程体系》根据数字生命卡兹克 @Khazix0918 原帖（2026-08-14）<b>重新整理</b>，保留原意、补充结构化要点与安全提示，非逐字转载。
    原帖：<a href="https://x.com/Khazix0918/status/2088074732730208592" target="_blank" rel="noopener">x.com/Khazix0918/status/2088074732730208592</a>
  </div>
</div>

<footer class="wrap">
  <p>创新资讯 · 公益免费、开源共享</p>
  <p style="margin-top:6px;opacity:.7">开源仓库：<a href="https://github.com/keyneszeng/aibuild.work" target="_blank">github.com/keyneszeng/aibuild.work</a> · 更新于 2026-08-14</p>
</footer>
</body>
</html>
