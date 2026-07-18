const news = [
  {
    year: "2026",
    items: [
      <>One paper was accepted to CVPR 2026: <a href="https://arxiv.org/abs/2511.10560">OmniVGGT</a> (Highlight).</>,
      <>One paper was accepted to ICLR 2026: <a href="https://arxiv.org/abs/2510.17439">From Spatial to Actions</a>.</>,
      <>One paper was accepted to ACL 2026 Main Conference: <a href="https://aclanthology.org/2026.acl-long.1262/">Demystifying Data Organization for Enhanced LLM Training</a>.</>,
      <>One paper was accepted to IJCV: <a href="https://doi.org/10.1007/s11263-025-02627-9">CoSurfGS</a>.</>,
      <>One paper was accepted to IEEE TSC: <a href="https://doi.org/10.1109/TSC.2026.3671739">Radiant</a>.</>,
    ],
  },
  {
    year: "2025",
    items: [
      <>One paper was accepted to ICLR 2025: <a href="https://openreview.net/forum?id=rvxWEbTtRY">Training-Free Dataset Pruning for Instance Segmentation</a>.</>,
    ],
  },
  {
    year: "2024",
    items: [
      <>Two papers were accepted to CVPR 2024: <a href="https://doi.org/10.1109/CVPR52733.2024.01845">LTGC</a> (Oral) and <a href="https://doi.org/10.1109/CVPR52733.2024.02051">GP-NeRF</a> (Highlight).</>,
      <>Two papers were accepted to ECCV 2024: <a href="https://doi.org/10.1007/978-3-031-73209-6_19">GGRt</a> and <a href="https://doi.org/10.1007/978-3-031-72855-6_1">LTRL</a> (Oral).</>,
      <>One paper was accepted to IEEE TGRS: <a href="https://doi.org/10.1109/TGRS.2024.3373442">SPGC</a>.</>,
    ],
  },
  {
    year: "2023",
    items: [
      <>One paper was accepted to CVPR 2023: <a href="https://doi.org/10.1109/CVPR52729.2023.01486">Boosting Low-Data Instance Segmentation by Unsupervised Pre-training with Saliency Prompt</a>.</>,
    ],
  },
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
          <div className="about-grid">
            <div className="photo-placeholder" role="img" aria-label="Portrait placeholder"><span>Photo</span></div>
            <div className="about-copy">
              <h1>Yalun Dai</h1>
              <p>
                I am a second-year PhD student at Nanyang Technological University (NTU Research Scholarship), supervised by <a href="https://www.ntu.edu.sg/research/faculty-directory/detail/Yap-Kim-Hui" target="_blank" rel="noreferrer">Prof. Yap Kim-Hui</a>.
                I also collaborate on several research projects with <a href="https://liuziwei7.github.io/" target="_blank" rel="noreferrer">Prof. Ziwei Liu</a>.
                My research focuses on <strong>Data-centric AI</strong> and <strong>Embodied AI</strong>.
                Previously, I interned at <strong>ByteDance</strong> and <strong>Microsoft Research</strong>.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section" id="news">
          <h2>News</h2>
          <div className="news-list">
            {news.map((group) => (
              <div className="news-year" key={group.year}>
                <time>{group.year}</time>
                <div className="news-year-items">
                  {group.items.map((item, index) => <p key={`${group.year}-${index}`}>{item}</p>)}
                </div>
              </div>
            ))}
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
                <p className="publication-meta">
                  <span className="venue">{paper.venue}</span>
                  <span className="paper-links">{paper.links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">[{label}]</a>)}</span>
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>© 2026 Yalun Dai</footer>
    </div>
  );
}
