import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yalun Dai — Researcher in Artificial Intelligence",
  description:
    "Yalun Dai's academic homepage: data-centric machine learning, efficient learning, computer vision, and 3D scene understanding.",
};

const papers = [
  {
    year: "2026", venue: "ACL", type: "Main Conference",
    title: "Demystifying Data Organization for Enhanced LLM Training",
    authors: <> <strong>Yalun Dai</strong>, Yangyu Huang, Tongshen Yang, Yonghan Wang, Xin Zhang, Wenshan Wu, Qihao Zhao, Hao Li, Yuanyuan Gao, Kim-Hui Yap, Scarlett Li</>,
    href: "https://arxiv.org/abs/2605.30334", accent: true,
  },
  {
    year: "2026", venue: "ICLR", type: "Conference",
    title: "From Spatial to Actions: Grounding Vision-Language-Action Model in Spatial Foundation Priors",
    authors: <>Zhengshen Zhang, Hao Li, <strong>Yalun Dai</strong>, Zhengbang Zhu, Lei Zhou, Chenchen Liu, Dong Wang, Francis E. H. Tay, Sijin Chen, Ziwei Liu, et al.</>,
    href: "https://arxiv.org/abs/2510.17439", accent: true,
  },
  {
    year: "2026", venue: "IJCV", type: "Journal",
    title: "CoSurfGS: Collaborative 3D Surface Gaussian Splatting with Distributed Learning for Large-scale Scene Reconstruction",
    authors: <>Yuanyuan Gao, <strong>Yalun Dai</strong>, Hao Li, Weicai Ye, Junyi Chen, Danpeng Chen, Dingwen Zhang, Tong He, Guofeng Zhang, Junwei Han</>,
    href: "https://arxiv.org/abs/2412.17612",
  },
  {
    year: "2026", venue: "IEEE TSC", type: "Journal",
    title: "Radiant: Efficient Timely Large-Scale Scene Analytics Based on Hierarchical Framework",
    authors: <>Haosong Peng, Tianyu Qi, Yufeng Zhan, Ren Jin, Hao Li, <strong>Yalun Dai</strong>, Yuanqing Xia</>,
    href: "https://arxiv.org/abs/2412.05546",
  },
  {
    year: "2025", venue: "ICLR", type: "Conference",
    title: "Training-Free Dataset Pruning for Instance Segmentation",
    authors: <><strong>Yalun Dai</strong>, Lingao Xiao, Ivor W. Tsang, Yang He</>,
    href: "https://proceedings.iclr.cc/paper_files/paper/2025/hash/4a5a9f5c15632e9f52c9c1ba4134f13c-Abstract-Conference.html", accent: true,
  },
  {
    year: "2025", venue: "arXiv", type: "Preprint",
    title: "Data Efficacy for Language Model Training",
    authors: <><strong>Yalun Dai</strong>, Yangyu Huang, Xin Zhang, Wenshan Wu, Chong Li, Wenhui Lu, Shijie Cao, Li Dong, Scarlett Li</>,
    href: "https://arxiv.org/abs/2506.21545", accent: true,
  },
  {
    year: "2024", venue: "ECCV", type: "Conference",
    title: "GGRt: Towards Pose-free Generalizable 3D Gaussian Splatting in Real-time",
    authors: <>Hao Li, Yuanyuan Gao, Chenming Wu, Dingwen Zhang, <strong>Yalun Dai</strong>, Chen Zhao, Haocheng Feng, Errui Ding, Jingdong Wang, Junwei Han</>,
    href: "https://arxiv.org/abs/2403.10147",
  },
  {
    year: "2024", venue: "CVPR", type: "Highlight",
    title: "GP-NeRF: Generalized Perception NeRF for Context-Aware 3D Scene Understanding",
    authors: <>Hao Li, Dingwen Zhang, <strong>Yalun Dai</strong>, Nian Liu, Lechao Cheng, Jingfeng Li, Jingdong Wang, Junwei Han</>,
    href: "https://arxiv.org/abs/2311.11863",
  },
  {
    year: "2024", venue: "CVPR", type: "Oral",
    title: "LTGC: Long-tail Recognition via Leveraging LLMs-driven Generated Content",
    authors: <>Qihao Zhao, <strong>Yalun Dai</strong>, Hao Li, Wei Hu, Fan Zhang, Jun Liu</>,
    href: "https://arxiv.org/abs/2403.05854",
  },
  {
    year: "2024", venue: "IEEE TGRS", type: "Journal",
    title: "SPGC: Shape-Prior-Based Generated Content Data Augmentation for Remote Sensing Object Detection",
    authors: <><strong>Yalun Dai</strong>, Fei Ma, Wei Hu, Fan Zhang</>,
    href: "https://dblp.org/rec/journals/tgrs/DaiMHZ24",
  },
  {
    year: "2023", venue: "CVPR", type: "Conference",
    title: "Boosting Low-Data Instance Segmentation by Unsupervised Pre-training with Saliency Prompt",
    authors: <>Hao Li, Dingwen Zhang, Nian Liu, Lechao Cheng, <strong>Yalun Dai</strong>, Chao Zhang, Xinggang Wang, Junwei Han</>,
    href: "https://arxiv.org/abs/2302.01171",
  },
];

const profileLinks = [
  ["Google Scholar", "https://scholar.google.com/citations?user=6XyNVowAAAAJ&hl=en"],
  ["DBLP", "https://dblp.org/pid/339/6426"],
  ["ORCID", "https://orcid.org/0009-0001-4260-4385"],
  ["GitHub", "https://github.com/Dai818"],
];

export default function Home() {
  return (
    <div className="academic-shell">
      <header className="academic-nav">
        <a className="academic-mark" href="#top" aria-label="Yalun Dai homepage"><span>YD</span><i>Research</i></a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a><a href="#research">Research</a><a href="#publications">Publications</a><a href="#news">News</a>
        </nav>
        <a className="nav-scholar" href="https://scholar.google.com/citations?user=6XyNVowAAAAJ&hl=en" target="_blank" rel="noreferrer">Scholar ↗</a>
      </header>

      <main id="top">
        <section className="academic-hero" id="about">
          <div className="hero-left">
            <div className="research-label"><span>Artificial Intelligence Researcher</span><span>Nanyang Technological University · Singapore</span></div>
            <h1>Yalun <em>Dai.</em></h1>
            <p className="academic-lede">I study how <strong>data</strong> shapes intelligent systems—from organizing training corpora for language models to efficient visual learning and 3D scene understanding.</p>
            <div className="profile-links">{profileLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label} <span>↗</span></a>)}</div>
          </div>
          <aside className="profile-panel">
            <div className="portrait-wrap"><img src="https://avatars.githubusercontent.com/Dai818?v=4" alt="Portrait of Yalun Dai" /></div>
            <div className="profile-note"><span>Research focus</span><p>Data-centric learning · Efficient AI · Computer vision · 3D reconstruction</p></div>
          </aside>
        </section>

        <section className="metric-strip" aria-label="Academic metrics">
          <div><strong>183</strong><span>Citations</span></div><div><strong>6</strong><span>h-index</span></div><div><strong>4</strong><span>i10-index</span></div><div className="metric-source"><span>Metrics indexed July 2026</span><a href="https://scholar.google.com/citations?user=6XyNVowAAAAJ&hl=en" target="_blank" rel="noreferrer">View live profile ↗</a></div>
        </section>

        <section className="academic-section intro-section">
          <div className="section-rail"><span>01</span><h2>About</h2></div>
          <div className="intro-body">
            <p className="intro-large">My research sits at the intersection of <em>data-centric machine learning</em>, efficient model training, and visual intelligence.</p>
            <div className="intro-columns"><p>My recent work asks a simple question: beyond selecting better data, how can we organize data to make learning more effective? This direction spans scoring, selection, ordering, and curriculum design for language-model training.</p><p>I also work on efficient computer vision and 3D scene understanding, including dataset pruning, low-data recognition, neural rendering, Gaussian splatting, and large-scale collaborative reconstruction.</p></div>
          </div>
        </section>

        <section className="academic-section research-section" id="research">
          <div className="section-rail"><span>02</span><h2>Research</h2></div>
          <div className="research-grid">
            <article><span className="research-index">A</span><h3>Data-Centric<br />Language Models</h3><p>Understanding how data scoring, selection, ordering, and curriculum design shape language-model training.</p><div className="topic-line">DELT · LQS · Data ordering</div></article>
            <article><span className="research-index">B</span><h3>Efficient<br />Visual Learning</h3><p>Reducing annotation, data, and compute requirements for recognition and instance segmentation.</p><div className="topic-line">Dataset pruning · Low-data learning</div></article>
            <article><span className="research-index">C</span><h3>3D Scene<br />Understanding</h3><p>Generalizable neural rendering, Gaussian splatting, and scalable collaborative reconstruction.</p><div className="topic-line">NeRF · 3DGS · Spatial intelligence</div></article>
          </div>
        </section>

        <section className="academic-section publication-section" id="publications">
          <div className="section-rail"><span>03</span><h2>Selected<br />Publications</h2><p>Selected work from 2023–2026. Visit Google Scholar for the full, current list.</p></div>
          <div className="paper-list">
            {papers.map((paper) => (
              <a className={`paper-row${paper.accent ? " featured" : ""}`} href={paper.href} target="_blank" rel="noreferrer" key={paper.title}>
                <div className="paper-year">{paper.year}</div>
                <div className="paper-copy"><div className="paper-meta"><span>{paper.venue}</span><i>{paper.type}</i></div><h3>{paper.title}</h3><p>{paper.authors}</p></div>
                <div className="paper-arrow" aria-hidden="true">↗</div>
              </a>
            ))}
            <a className="all-publications" href="https://scholar.google.com/citations?user=6XyNVowAAAAJ&hl=en" target="_blank" rel="noreferrer">View all publications on Google Scholar <span>↗</span></a>
          </div>
        </section>

        <section className="academic-section news-section" id="news">
          <div className="section-rail"><span>04</span><h2>News</h2></div>
          <div className="news-list">
            <article><time>2026</time><p><strong>Demystifying Data Organization for Enhanced LLM Training</strong> will appear at ACL 2026 Main Conference.</p></article>
            <article><time>2026</time><p><strong>FALCON</strong>, our work on grounding vision-language-action models in spatial foundation priors, appears at ICLR 2026.</p></article>
            <article><time>2026</time><p><strong>CoSurfGS</strong> and <strong>Radiant</strong> advance scalable 3D reconstruction in IJCV and IEEE TSC.</p></article>
            <article><time>2025</time><p><strong>Training-Free Dataset Pruning for Instance Segmentation</strong> presented at ICLR 2025.</p></article>
            <article><time>2024</time><p>Work on long-tail recognition, neural rendering, and 3D Gaussian splatting appeared at CVPR and ECCV.</p></article>
          </div>
        </section>

        <section className="academic-cta"><span>Open to conversations on data-centric AI and visual intelligence.</span><h2>Let’s build more effective learning systems.</h2><div>{profileLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}</div></section>
      </main>
      <footer className="academic-footer"><span>© 2026 Yalun Dai</span><span>Academic homepage · Singapore</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}
