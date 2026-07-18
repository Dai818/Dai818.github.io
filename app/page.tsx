const profileLinks = [
  ["Google Scholar", "https://scholar.google.com/citations?user=6XyNVowAAAAJ&hl=en"],
  ["GitHub", "https://github.com/Dai818"],
  ["DBLP", "https://dblp.org/pid/339/6426"],
  ["ORCID", "https://orcid.org/0009-0001-4260-4385"],
];

const news = [
  { date: "Jun 2026", text: <>We released <a href="https://ropedia.github.io/S-Agent/">S-Agent</a>, a spatial tool-use agent for continuous multi-view and video reasoning.</> },
  { date: "May 2026", text: <><a href="https://arxiv.org/abs/2605.30334">Demystifying Data Organization for Enhanced LLM Training</a> was accepted to ACL 2026 Main Conference.</> },
  { date: "Jan 2026", text: <><a href="https://arxiv.org/abs/2510.17439">From Spatial to Actions</a> was accepted to ICLR 2026.</> },
  { date: "Apr 2025", text: <><a href="https://proceedings.iclr.cc/paper_files/paper/2025/hash/4a5a9f5c15632e9f52c9c1ba4134f13c-Abstract-Conference.html">Training-Free Dataset Pruning for Instance Segmentation</a> was presented at ICLR 2025.</> },
];

const papers = [
  {
    title: "S-Agent: Spatial Tool-Use Elicits Reasoning for Spatial Intelligence",
    authors: <><strong>Yalun Dai</strong>*, Hao Li*, Shulin Tian, Runmao Yao, Yuhao Dong, Fangzhou Hong, Zhaoxi Chen, Fangfu Liu, Baoliang Tian, Dingwen Zhang, Tao Wang, Kim-Hui Yap, Ziwei Liu</>,
    venue: "Technical Report, 2026",
    links: [["Project", "https://ropedia.github.io/S-Agent/"], ["Paper", "https://arxiv.org/abs/2606.20515"]],
  },
  {
    title: "Demystifying Data Organization for Enhanced LLM Training",
    authors: <><strong>Yalun Dai</strong>, Yangyu Huang, Tongshen Yang, Yonghan Wang, Xin Zhang, Wenshan Wu, Qihao Zhao, Hao Li, Yuanyuan Gao, Kim-Hui Yap, Scarlett Li</>,
    venue: "ACL 2026, Main Conference",
    links: [["Paper", "https://arxiv.org/abs/2605.30334"], ["Code", "https://github.com/microsoft/data-efficacy"]],
  },
  {
    title: "From Spatial to Actions: Grounding Vision-Language-Action Model in Spatial Foundation Priors",
    authors: <>Zhengshen Zhang*, Hao Li*, <strong>Yalun Dai</strong>, Zhengbang Zhu, Lei Zhou, Chenchen Liu, Dong Wang, Francis E. H. Tay, Sijin Chen, Ziwei Liu, et al.</>,
    venue: "ICLR 2026",
    links: [["Paper", "https://arxiv.org/abs/2510.17439"], ["Project", "https://falcon-vla.github.io/"]],
  },
  {
    title: "CoSurfGS: Collaborative 3D Surface Gaussian Splatting with Distributed Learning for Large Scene Reconstruction",
    authors: <>Yuanyuan Gao*, <strong>Yalun Dai</strong>*, Hao Li*, Weicai Ye, Jiaqi Chen, Dingwen Zhang, Tong He, Guofeng Zhang, Junwei Han</>,
    venue: "International Journal of Computer Vision, 2026",
    links: [["Paper", "https://arxiv.org/abs/2412.17612"]],
  },
  {
    title: "Data Efficacy for Language Model Training",
    authors: <><strong>Yalun Dai</strong>, Yangyu Huang, Xin Zhang, Wenshan Wu, Chong Li, Wenhui Lu, Shijie Cao, Li Dong, Scarlett Li</>,
    venue: "arXiv, 2025",
    links: [["Paper", "https://arxiv.org/abs/2506.21545"], ["Code", "https://github.com/microsoft/data-efficacy"]],
  },
  {
    title: "Training-Free Dataset Pruning for Instance Segmentation",
    authors: <><strong>Yalun Dai</strong>, Lingao Xiao, Ivor W. Tsang, Yang He</>,
    venue: "ICLR 2025",
    links: [["Paper", "https://proceedings.iclr.cc/paper_files/paper/2025/hash/4a5a9f5c15632e9f52c9c1ba4134f13c-Abstract-Conference.html"]],
  },
  {
    title: "GGRt: Towards Pose-free Generalizable 3D Gaussian Splatting in Real-time",
    authors: <>Hao Li, Yuanyuan Gao, Chenming Wu, Dingwen Zhang, <strong>Yalun Dai</strong>, Chen Zhao, Haocheng Feng, Errui Ding, Jingdong Wang, Junwei Han</>,
    venue: "ECCV 2024",
    links: [["Paper", "https://arxiv.org/abs/2403.10147"]],
  },
  {
    title: "GP-NeRF: Generalized Perception NeRF for Context-Aware 3D Scene Understanding",
    authors: <>Hao Li, Dingwen Zhang, <strong>Yalun Dai</strong>, Nian Liu, Lechao Cheng, Jingfeng Li, Jingdong Wang, Junwei Han</>,
    venue: "CVPR 2024, Highlight",
    links: [["Paper", "https://arxiv.org/abs/2311.11863"]],
  },
  {
    title: "LTGC: Long-tail Recognition via Leveraging LLMs-driven Generated Content",
    authors: <>Qihao Zhao, <strong>Yalun Dai</strong>, Hao Li, Wei Hu, Fan Zhang, Jun Liu</>,
    venue: "CVPR 2024, Oral",
    links: [["Paper", "https://arxiv.org/abs/2403.05854"]],
  },
];

export default function Home() {
  return (
    <div className="site-container">
      <main id="top">
        <section className="page-section about-section" id="about">
          <h2>About me</h2>
          <div className="about-grid">
            <div className="photo-placeholder" role="img" aria-label="Portrait placeholder"><span>Photo</span></div>
            <div className="about-copy">
              <h1>Yalun Dai</h1>
              <p className="position">Second-year PhD Student, Nanyang Technological University</p>
              <p>
                I am supported by the <strong>NTU Research Scholarship</strong> and supervised by <a href="https://www.ntu.edu.sg/research/faculty-directory/detail/Yap-Kim-Hui" target="_blank" rel="noreferrer">Prof. Yap Kim-Hui</a>.
                I also collaborate on several research projects with <a href="https://liuziwei7.github.io/" target="_blank" rel="noreferrer">Prof. Ziwei Liu</a>.
              </p>
              <p>My research focuses on <strong>Data-centric AI</strong> and <strong>Embodied AI</strong>.</p>
              <p>Previously, I interned at <strong>ByteDance</strong> and <strong>Microsoft Research</strong>.</p>
              <div className="profile-links">
                {profileLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>)}
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="news">
          <h2>News</h2>
          <div className="news-list">
            {news.map((item) => <div className="news-item" key={item.date}><time>{item.date}</time><p>{item.text}</p></div>)}
          </div>
        </section>

        <section className="page-section" id="publications">
          <h2>Selected Publications</h2>
          <p className="publication-note">For a complete list of publications, please see my <a href="https://scholar.google.com/citations?user=6XyNVowAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a> profile. * indicates equal contribution.</p>
          <div className="publication-list">
            {papers.map((paper) => (
              <article className="publication" key={paper.title}>
                <h3>{paper.title}</h3>
                <p className="authors">{paper.authors}</p>
                <p className="venue">{paper.venue}</p>
                <p className="paper-links">{paper.links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">[{label}]</a>)}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>© 2026 Yalun Dai</footer>
    </div>
  );
}
