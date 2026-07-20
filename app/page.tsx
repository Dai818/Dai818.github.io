"use client";

import { Fragment, useState } from "react";

function GitHubStars({ repo, href }: { repo: string; href: string }) {
  return (
    <a className="star-badge" href={href} target="_blank" rel="noreferrer" aria-label={`View ${repo} on GitHub`}>
      <img src={`https://img.shields.io/github/stars/${repo}?style=social`} alt={`${repo} GitHub stars`} loading="lazy" />
    </a>
  );
}

const news = [
  {
    year: "2026",
    items: [
      <><a href="https://arxiv.org/abs/2607.04438">ResearchStudio-Reel</a> and <a href="https://arxiv.org/abs/2607.04439">ResearchStudio-Idea</a> <GitHubStars repo="microsoft/ResearchStudio" href="https://github.com/microsoft/ResearchStudio" /> released.</>,
      <><a href="https://arxiv.org/abs/2606.20515">S-Agent</a> and <a href="https://arxiv.org/abs/2605.27367">SpatialBench</a> <GitHubStars repo="Ropedia/SpatialBench" href="https://github.com/Ropedia/SpatialBench" /> released.</>,
      <>One paper was accepted to <strong>ACL 2026</strong> Main Conference: <a href="https://aclanthology.org/2026.acl-long.1262/">Data Organization</a>.</>,
      <>One paper was accepted to <strong>CVPR 2026</strong>: <a href="https://arxiv.org/abs/2511.10560">OmniVGGT</a> <GitHubStars repo="Livioni/OmniVGGT-official" href="https://github.com/Livioni/OmniVGGT-official" /> (<strong className="award">Highlight</strong>).</>,
      <>One paper was accepted to <strong>ICLR 2026</strong>: <a href="https://arxiv.org/abs/2510.17439">From Spatial to Actions</a>.</>,
      <>One paper was accepted to IJCV: <a href="https://doi.org/10.1007/s11263-025-02627-9">CoSurfGS</a>.</>,
      <>One paper was accepted to IEEE TSC: <a href="https://doi.org/10.1109/TSC.2026.3671739">Radiant</a>.</>,
    ],
  },
  {
    year: "2025",
    items: [
      <>One paper was accepted to <strong>ICLR 2025</strong>: <a href="https://openreview.net/forum?id=rvxWEbTtRY">TFDP</a>.</>,
    ],
  },
  {
    year: "2024",
    items: [
      <>Two papers were accepted to <strong>CVPR 2024</strong>: <a href="https://openaccess.thecvf.com/content/CVPR2024/papers/Zhao_LTGC_Long-tail_Recognition_via_Leveraging_LLMs-driven_Generated_Content_CVPR_2024_paper.pdf">LTGC</a> (<strong className="award">Oral</strong>) and <a href="https://openaccess.thecvf.com/content/CVPR2024/papers/Li_GP-NeRF_Generalized_Perception_NeRF_for_Context-Aware_3D_Scene_Understanding_CVPR_2024_paper.pdf">GP-NeRF</a> (<strong className="award">Highlight</strong>).</>,
      <>Two papers were accepted to <strong>ECCV 2024</strong>: <a href="https://arxiv.org/abs/2407.12568">LTRL</a> (<strong className="award">Oral</strong>) and <a href="https://arxiv.org/abs/2403.10147">GGRt</a> <GitHubStars repo="lifuguan/GGRt_official" href="https://github.com/lifuguan/GGRt_official" />.</>,
      <>One paper was accepted to IEEE TGRS: <a href="https://doi.org/10.1109/TGRS.2024.3373442">SPGC</a>.</>,
    ],
  },
  {
    year: "2023",
    items: [
      <>One paper was accepted to <strong>CVPR 2023</strong>: <a href="https://openaccess.thecvf.com/content/CVPR2023/papers/Li_Boosting_Low-Data_Instance_Segmentation_by_Unsupervised_Pre-Training_With_Saliency_Prompt_CVPR_2023_paper.pdf">Saliency Prompt</a>.</>,
    ],
  },
];

const publicationGroups = [
  {
    title: "Embodied AI",
    papers: [
      {
        title: "S-Agent: Spatial Tool-Use Elicits Reasoning for Spatial Intelligence",
        authors: <><strong>Yalun Dai</strong>, Hao Li, Shulin Tian, Runmao Yao, Yuhao Dong, Fangzhou Hong, Zhaoxi Chen, Fangfu Liu, Baoliang Tian, Dingwen Zhang, Tao Wang, Kim-Hui Yap, Ziwei Liu</>,
        venue: "arXiv, 2026",
        links: [["Project", "https://ropedia.github.io/S-Agent/"], ["Paper", "https://arxiv.org/abs/2606.20515"]],
      },
      {
        title: "SpatialBench: Is Your Spatial Foundation Model an All-Round Player?",
        authors: <>Haosong Peng, Hao Li, Jiaqi Chen, Yuhao Pan, Runmao Yao, <strong>Yalun Dai</strong>, Fushuo Huo, Fangzhou Hong, Zhaoxi Chen, Haozhao Wang, Dingwen Zhang, Ziwei Liu, Wenchao Xu</>,
        venue: "arXiv, 2026",
        links: [["Paper", "https://arxiv.org/abs/2605.27367"]],
        stars: { repo: "Ropedia/SpatialBench", href: "https://github.com/Ropedia/SpatialBench" },
      },
      {
        title: "OmniVGGT: Omni-Modality Driven Visual Geometry Grounded Transformer",
        authors: <>Haosong Peng, Hao Li, <strong>Yalun Dai</strong>, Yushi Lan, Yihang Luo, Tianyu Qi, Zhengshen Zhang, Yufeng Zhan, Junfei Zhang, Wenchao Xu, Ziwei Liu</>,
        venue: <><strong>CVPR 2026</strong>, <strong className="award">Highlight</strong></>,
        links: [["Paper", "https://arxiv.org/abs/2511.10560"]],
        stars: { repo: "Livioni/OmniVGGT-official", href: "https://github.com/Livioni/OmniVGGT-official" },
      },
      {
        title: "From Spatial to Actions: Grounding Vision-Language-Action Model in Spatial Foundation Priors",
        authors: <>Zhengshen Zhang*, Hao Li*, <strong>Yalun Dai</strong>, Zhengbang Zhu, Lei Zhou, Chenchen Liu, Dong Wang, Francis E. H. Tay, Sijin Chen, Ziwei Liu</>,
        venue: <strong>ICLR 2026</strong>,
        links: [["Paper", "https://arxiv.org/abs/2510.17439"], ["Project", "https://falcon-vla.github.io/"]],
      },
      {
        title: "CoSurfGS: Collaborative 3D Surface Gaussian Splatting with Distributed Learning for Large Scene Reconstruction",
        authors: <>Yuanyuan Gao*, <strong>Yalun Dai</strong>*, Hao Li*, Weicai Ye, Jiaqi Chen, Dingwen Zhang, Tong He, Guofeng Zhang, Junwei Han</>,
        venue: "International Journal of Computer Vision, 2026",
        links: [["Paper", "https://arxiv.org/abs/2412.17612"]],
        type: "journal",
      },
      {
        title: "Radiant: Large-scale 3D Gaussian Rendering based on Hierarchical Framework",
        authors: <>Haosong Peng, Tianyu Qi, Yufeng Zhan, Hao Li, <strong>Yalun Dai</strong>, Yuanqing Xia</>,
        venue: "IEEE Transactions on Services Computing, 2026",
        links: [["Paper", "https://arxiv.org/abs/2412.05546"]],
        type: "journal",
      },
      {
        title: "GGRt: Towards Pose-free Generalizable 3D Gaussian Splatting in Real-time",
        authors: <>Hao Li, Yuanyuan Gao, Chenming Wu, Dingwen Zhang, <strong>Yalun Dai</strong>, Chen Zhao, Haocheng Feng, Errui Ding, Jingdong Wang, Junwei Han</>,
        venue: <strong>ECCV 2024</strong>,
        links: [["Paper", "https://arxiv.org/abs/2403.10147"]],
        stars: { repo: "lifuguan/GGRt_official", href: "https://github.com/lifuguan/GGRt_official" },
      },
      {
        title: "GP-NeRF: Generalized Perception NeRF for Context-Aware 3D Scene Understanding",
        authors: <>Hao Li, Dingwen Zhang, <strong>Yalun Dai</strong>, Nian Liu, Lechao Cheng, Jingfeng Li, Jingdong Wang, Junwei Han</>,
        venue: <><strong>CVPR 2024</strong>, <strong className="award">Highlight</strong></>,
        links: [["Paper", "https://arxiv.org/abs/2311.11863"]],
      },
    ],
  },
  {
    title: "Data-Centric AI",
    papers: [
      {
        title: "ResearchStudio-Reel: Automate the Last Mile of Research from Paper to Poster, Video, and Blog",
        authors: <>Lingao Xiao*, <strong>Yalun Dai</strong>*, Yangyu Huang*, Qihao Zhao, Wenshan Wu, Hugo He, Ruishuo Chen, Jin Jiang, Qianli Ma, Jiahuan Zhang, Xin Zhang, Ying Xin, Yang Ou, Yan Xia, Scarlett Li, Longbo Huang, Zhipeng Zhang, Yang He, Kim-Hui Yap, Yan Lu</>,
        venue: "arXiv, 2026",
        links: [["Paper", "https://arxiv.org/abs/2607.04438"]],
        stars: { repo: "microsoft/ResearchStudio", href: "https://github.com/microsoft/ResearchStudio" },
      },
      {
        title: "ResearchStudio-Idea: An Evidence-Grounded Research-Ideation Skill Suite from ML Conference Outcomes",
        authors: <>Qihao Zhao, Yangyu Huang, <strong>Yalun Dai</strong>, Lingao Xiao, Jianjun Gao, Xin Zhang, Wenshan Wu, Scarlett Li, Yang He, Yan Lu, Kim-Hui Yap</>,
        venue: "arXiv, 2026",
        links: [["Paper", "https://arxiv.org/abs/2607.04439"]],
        stars: { repo: "microsoft/ResearchStudio", href: "https://github.com/microsoft/ResearchStudio" },
      },
      {
        title: "Demystifying Data Organization for Enhanced LLM Training",
        authors: <><strong>Yalun Dai</strong>, Yangyu Huang, Tongshen Yang, Yonghan Wang, Xin Zhang, Wenshan Wu, Qihao Zhao, Hao Li, Yuanyuan Gao, Kim-Hui Yap, Scarlett Li</>,
        venue: <><strong>ACL 2026</strong>, Main Conference</>,
        links: [["Paper", "https://arxiv.org/abs/2605.30334"], ["Code", "https://github.com/microsoft/data-efficacy"]],
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
        venue: <strong>ICLR 2025</strong>,
        links: [["Paper", "https://proceedings.iclr.cc/paper_files/paper/2025/hash/4a5a9f5c15632e9f52c9c1ba4134f13c-Abstract-Conference.html"]],
      },
      {
        title: "LTRL: Boosting Long-tail Recognition via Reflective Learning",
        authors: <>Qihao Zhao*, <strong>Yalun Dai</strong>*, Shen Lin, Wei Hu, Fan Zhang, Jun Liu</>,
        venue: <><strong>ECCV 2024</strong>, <strong className="award">Oral</strong></>,
        links: [["Paper", "https://arxiv.org/abs/2407.12568"]],
      },
      {
        title: "LTGC: Long-tail Recognition via Leveraging LLMs-driven Generated Content",
        authors: <>Qihao Zhao*, <strong>Yalun Dai</strong>*, Hao Li, Wei Hu, Fan Zhang, Jun Liu</>,
        venue: <><strong>CVPR 2024</strong>, <strong className="award">Oral</strong></>,
        links: [["Paper", "https://arxiv.org/abs/2403.05854"]],
      },
      {
        title: "Boosting Low-Data Instance Segmentation by Unsupervised Pre-training with Saliency Prompt",
        authors: <>Hao Li, Dingwen Zhang, Nian Liu, Lechao Cheng, <strong>Yalun Dai</strong>, Chao Zhang, Xinggang Wang, Junwei Han</>,
        venue: <strong>CVPR 2023</strong>,
        links: [["Paper", "https://arxiv.org/abs/2302.01171"]],
      },
      {
        title: "SPGC: Shape-Prior-Based Generated Content Data Augmentation for Remote Sensing Object Detection",
        authors: <><strong>Yalun Dai</strong>, Fei Ma, Wei Hu, Fan Zhang</>,
        venue: "IEEE Transactions on Geoscience and Remote Sensing, 2024",
        links: [["Paper", "https://doi.org/10.1109/TGRS.2024.3373442"]],
        type: "journal",
      },
    ],
  },
];

const publicationOrder = [
  "S-Agent: Spatial Tool-Use Elicits Reasoning for Spatial Intelligence",
  "Demystifying Data Organization for Enhanced LLM Training",
  "ResearchStudio-Reel: Automate the Last Mile of Research from Paper to Poster, Video, and Blog",
  "ResearchStudio-Idea: An Evidence-Grounded Research-Ideation Skill Suite from ML Conference Outcomes",
  "SpatialBench: Is Your Spatial Foundation Model an All-Round Player?",
  "OmniVGGT: Omni-Modality Driven Visual Geometry Grounded Transformer",
  "From Spatial to Actions: Grounding Vision-Language-Action Model in Spatial Foundation Priors",
  "Data Efficacy for Language Model Training",
  "Training-Free Dataset Pruning for Instance Segmentation",
  "LTRL: Boosting Long-tail Recognition via Reflective Learning",
  "LTGC: Long-tail Recognition via Leveraging LLMs-driven Generated Content",
  "GGRt: Towards Pose-free Generalizable 3D Gaussian Splatting in Real-time",
  "GP-NeRF: Generalized Perception NeRF for Context-Aware 3D Scene Understanding",
  "Boosting Low-Data Instance Segmentation by Unsupervised Pre-training with Saliency Prompt",
  "CoSurfGS: Collaborative 3D Surface Gaussian Splatting with Distributed Learning for Large Scene Reconstruction",
  "Radiant: Large-scale 3D Gaussian Rendering based on Hierarchical Framework",
  "SPGC: Shape-Prior-Based Generated Content Data Augmentation for Remote Sensing Object Detection",
];

const publicationRank = new Map(publicationOrder.map((title, index) => [title, index]));
const papers = publicationGroups
  .flatMap((group) => group.papers.map((paper) => ({ ...paper, category: group.title, type: paper.type ?? "conference" })))
  .sort((a, b) => (publicationRank.get(a.title) ?? 999) - (publicationRank.get(b.title) ?? 999));

const publicationFilters = ["All", "Data-Centric AI", "Embodied AI"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visiblePapers = activeFilter === "All" ? papers : papers.filter((paper) => paper.category === activeFilter);
  const publicationSections = [
    { title: "Conference", papers: visiblePapers.filter((paper) => paper.type !== "journal") },
    { title: "Journal", papers: visiblePapers.filter((paper) => paper.type === "journal") },
  ].filter((section) => section.papers.length > 0);

  return (
    <div className="site-container">
      <main id="top">
        <section className="page-section about-section" id="about">
          <div className="about-grid">
            <figure className="profile-figure">
              <img className="profile-photo" src="/profile.jpeg" alt="Yalun Dai at Mount Rainier" />
              <figcaption>Mount Rainier, Washington</figcaption>
            </figure>
            <div className="about-copy">
              <h1>Yalun Dai</h1>
              <p>
                I am a second-year PhD student at Nanyang Technological University (NTU Research Scholarship), supervised by <a href="https://www.ntu.edu.sg/research/faculty-directory/detail/Yap-Kim-Hui" target="_blank" rel="noreferrer">Prof. Kim-Hui Yap</a>.
                I also collaborate on several research works with <a href="https://liuziwei7.github.io/" target="_blank" rel="noreferrer">Prof. Ziwei Liu</a>.
                My research focuses on <strong>Data-centric AI</strong> and <strong>Embodied AI</strong>.
                I interned at <strong>Microsoft Research and ByteDance</strong> and SenseTime.
              </p>
              <div className="bio-links">
                <a href="mailto:yalun001@e.ntu.edu.sg">Email: yalun001 [at] e.ntu.edu.sg</a>
                <a href="https://scholar.google.com/citations?user=6XyNVowAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
              </div>
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
          <h2>Selected Publications (<a href="https://scholar.google.com/citations?user=6XyNVowAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>)</h2>
          <div className="publication-filter" role="tablist" aria-label="Filter publications by research area">
            {publicationFilters.map((filter) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
                key={filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="publication-list">
            {publicationSections.map((section) => (
              <Fragment key={section.title}>
                <div className="publication-type-heading"><span>{section.title}</span></div>
                {section.papers.map((paper) => (
                  <article className="publication" key={paper.title}>
                    <div className="publication-details">
                      <h4>{paper.title}</h4>
                      <p className="authors">{paper.authors}</p>
                      <p className="publication-meta">
                        <span className="venue">{paper.venue}</span>
                        <span className="paper-links">
                          {paper.links.map(([label, href]) => <a key={`${paper.title}-${label}`} href={href} target="_blank" rel="noreferrer">[{label}]</a>)}
                          {paper.stars && <GitHubStars repo={paper.stars.repo} href={paper.stars.href} />}
                        </span>
                      </p>
                    </div>
                  </article>
                ))}
              </Fragment>
            ))}
          </div>
        </section>
      </main>

      <footer>© 2026 Yalun Dai</footer>
    </div>
  );
}
