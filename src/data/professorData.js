export const professor = {
  name: "Dr. Jane A. Smith",
  title: "Professor of Computer Science",
  department: "Department of Computer Science",
  university: "State University of Technology",
  email: "j.smith@sut.edu",
  phone: "+1 (555) 234-5678",
  office: "Turing Hall, Room 314",
  officeHours: "Mon & Wed 2:00 PM – 4:00 PM",
  website: "https://cs.sut.edu/~jsmith",
  googleScholar: "https://scholar.google.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  avatar: null,
  bio: `Dr. Jane A. Smith is a Professor of Computer Science at the State University of Technology, where she has been a faculty member since 2010. She earned her Ph.D. from MIT in 2008 and her B.S. from Carnegie Mellon University in 2002.

Her research focuses on the intersection of machine learning, distributed systems, and privacy-preserving computation. She leads the Secure & Intelligent Systems Lab (SISL), a group of 12 graduate students and 3 postdoctoral researchers working on foundational and applied problems in these areas.

Dr. Smith is a recipient of the NSF CAREER Award, the ACM SIGOPS Mark Weiser Award, and has been recognized as an IEEE Fellow. She has published over 90 peer-reviewed papers and holds 7 patents. She actively serves on program committees for top venues such as NeurIPS, ICML, SOSP, and OSDI.`,

  researchInterests: [
    "Machine Learning & Deep Learning",
    "Distributed Systems",
    "Privacy-Preserving Computation",
    "Federated Learning",
    "Differential Privacy",
    "Systems Security",
  ],

  education: [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Massachusetts Institute of Technology",
      year: "2008",
      advisor: "Prof. Alan Turing Jr.",
      thesis: "Scalable Privacy-Preserving Machine Learning over Distributed Data",
    },
    {
      degree: "B.S. in Computer Science (with Honors)",
      institution: "Carnegie Mellon University",
      year: "2002",
    },
  ],

  positions: [
    {
      title: "Professor",
      department: "Department of Computer Science",
      institution: "State University of Technology",
      period: "2018 – Present",
    },
    {
      title: "Associate Professor",
      department: "Department of Computer Science",
      institution: "State University of Technology",
      period: "2014 – 2018",
    },
    {
      title: "Assistant Professor",
      department: "Department of Computer Science",
      institution: "State University of Technology",
      period: "2010 – 2014",
    },
    {
      title: "Postdoctoral Researcher",
      department: "Computer Science & Artificial Intelligence Laboratory (CSAIL)",
      institution: "Massachusetts Institute of Technology",
      period: "2008 – 2010",
    },
  ],

  publications: [
    {
      id: 1,
      type: "conference",
      year: 2024,
      title: "FedPriv: Efficient Federated Learning with Adaptive Differential Privacy Guarantees",
      authors: "J. A. Smith, R. Patel, L. Chen, M. Williams",
      venue: "Proceedings of the 38th Conference on Neural Information Processing Systems (NeurIPS 2024)",
      pages: "pp. 1821–1834",
      award: "Best Paper Award",
      doi: "https://doi.org/10.xxxx/neurips2024",
      abstract:
        "We propose FedPriv, a federated learning framework that adaptively calibrates differential privacy noise to local data distributions, achieving up to 18% accuracy improvement over baselines while providing formal privacy guarantees.",
    },
    {
      id: 2,
      type: "journal",
      year: 2024,
      title: "A Survey of Privacy-Preserving Machine Learning: Techniques, Challenges, and Open Problems",
      authors: "J. A. Smith, L. Chen",
      venue: "ACM Computing Surveys",
      pages: "vol. 57, no. 3, pp. 1–48",
      doi: "https://doi.org/10.xxxx/acmcs2024",
      abstract:
        "We survey the landscape of privacy-preserving ML, covering differential privacy, secure multi-party computation, federated learning, and homomorphic encryption, identifying key open research challenges.",
    },
    {
      id: 3,
      type: "conference",
      year: 2023,
      title: "Hermes: Scalable Consistent Hashing for Heterogeneous Distributed Systems",
      authors: "M. Williams, J. A. Smith, K. Nguyen",
      venue: "Proceedings of the 29th ACM Symposium on Operating Systems Principles (SOSP 2023)",
      pages: "pp. 402–418",
      doi: "https://doi.org/10.xxxx/sosp2023",
      abstract:
        "Hermes introduces a novel consistent hashing scheme tolerant to heterogeneous node capacities, reducing load imbalance by 43% on commodity clusters.",
    },
    {
      id: 4,
      type: "conference",
      year: 2023,
      title: "DP-SGD Revisited: Tight Accounting and Improved Utility via Rényi Differential Privacy",
      authors: "J. A. Smith, T. Brown, R. Patel",
      venue: "Proceedings of the 40th International Conference on Machine Learning (ICML 2023)",
      pages: "pp. 32011–32029",
      doi: "https://doi.org/10.xxxx/icml2023",
      abstract:
        "We revisit the privacy accounting of DP-SGD, providing tighter Rényi DP bounds and demonstrating improved utility on benchmark datasets.",
    },
    {
      id: 5,
      type: "journal",
      year: 2022,
      title: "Secure Aggregation for Federated Learning: A Systematic Review",
      authors: "L. Chen, J. A. Smith, H. Zhang",
      venue: "IEEE Transactions on Information Forensics and Security",
      pages: "vol. 17, pp. 3450–3469",
      doi: "https://doi.org/10.xxxx/tifs2022",
      abstract:
        "This systematic review examines secure aggregation protocols for federated learning, comparing communication cost, threat models, and utility trade-offs.",
    },
    {
      id: 6,
      type: "conference",
      year: 2022,
      title: "Veritas: Verifiable Distributed Training with Minimal Overhead",
      authors: "K. Nguyen, J. A. Smith",
      venue: "Proceedings of the 19th USENIX Symposium on Networked Systems Design and Implementation (NSDI 2022)",
      pages: "pp. 887–904",
      doi: "https://doi.org/10.xxxx/nsdi2022",
      abstract:
        "Veritas enables workers in a distributed training job to verify each other's gradient contributions with less than 3% throughput overhead using lightweight cryptographic proofs.",
    },
    {
      id: 7,
      type: "conference",
      year: 2021,
      title: "PrivSplit: Communication-Efficient Split Learning with Differential Privacy",
      authors: "J. A. Smith, R. Patel, L. Chen",
      venue: "Proceedings of the 35th Conference on Neural Information Processing Systems (NeurIPS 2021)",
      pages: "pp. 14302–14315",
      doi: "https://doi.org/10.xxxx/neurips2021",
      abstract:
        "PrivSplit partitions neural network layers across edge devices while injecting calibrated noise to preserve differential privacy, reducing communication by 60% versus traditional FL.",
    },
    {
      id: 8,
      type: "journal",
      year: 2020,
      title: "Adaptive Gradient Compression for Distributed Deep Learning",
      authors: "J. A. Smith, M. Williams, K. Nguyen",
      venue: "Journal of Machine Learning Research (JMLR)",
      pages: "vol. 21, no. 148, pp. 1–42",
      doi: "https://doi.org/10.xxxx/jmlr2020",
      abstract:
        "We present AdaGrad-Compress, an adaptive compression scheme that selectively sparsifies gradients based on estimated contribution, matching dense-gradient convergence with 12× bandwidth reduction.",
    },
    {
      id: 9,
      type: "conference",
      year: 2019,
      title: "SHIELD: Efficient Runtime Architecture for Secure Enclaves in Distributed Systems",
      authors: "T. Brown, J. A. Smith",
      venue: "Proceedings of the 14th USENIX Symposium on Operating Systems Design and Implementation (OSDI 2019)",
      pages: "pp. 451–469",
      doi: "https://doi.org/10.xxxx/osdi2019",
      abstract:
        "SHIELD introduces a runtime architecture for Intel SGX enclaves in distributed settings, offering transparent memory encryption and efficient attestation at scale.",
    },
    {
      id: 10,
      type: "conference",
      year: 2018,
      title: "DeepAudit: Interpretable Auditing of Deep Neural Networks",
      authors: "J. A. Smith, L. Chen, T. Brown",
      venue: "Proceedings of the 35th International Conference on Machine Learning (ICML 2018)",
      pages: "pp. 4703–4712",
      award: "Honorable Mention",
      doi: "https://doi.org/10.xxxx/icml2018",
      abstract:
        "DeepAudit provides a model-agnostic auditing framework that generates human-interpretable certificates for neural network predictions under distributional shift.",
    },
  ],

  awards: [
    {
      id: 1,
      year: 2023,
      name: "IEEE Fellow",
      organization: "Institute of Electrical and Electronics Engineers (IEEE)",
      description:
        "Elevated to IEEE Fellow for contributions to privacy-preserving machine learning and distributed systems.",
    },
    {
      id: 2,
      year: 2022,
      name: "ACM SIGOPS Mark Weiser Award",
      organization: "ACM Special Interest Group on Operating Systems",
      description:
        "Awarded for creative and influential research in operating systems, specifically for the SHIELD and Veritas projects.",
    },
    {
      id: 3,
      year: 2021,
      name: "NSF CAREER Award",
      organization: "National Science Foundation",
      description:
        'Five-year $600,000 grant supporting the project "Foundations of Privacy-Preserving Distributed Machine Learning".',
    },
    {
      id: 4,
      year: 2021,
      name: "Google Faculty Research Award",
      organization: "Google Research",
      description: "Unrestricted research gift recognizing work on federated learning and differential privacy.",
    },
    {
      id: 5,
      year: 2020,
      name: "Best Paper Award – NeurIPS 2020",
      organization: "Neural Information Processing Systems Foundation",
      description:
        "Awarded to the paper 'On the Convergence of Federated Optimization Under Heterogeneous Data'.",
    },
    {
      id: 6,
      year: 2019,
      name: "Distinguished Alumna Award",
      organization: "Carnegie Mellon University, School of Computer Science",
      description:
        "Recognizing exceptional professional achievements and contributions to the field of computer science.",
    },
    {
      id: 7,
      year: 2018,
      name: "MIT Technology Review Innovators Under 45 (TR35)",
      organization: "MIT Technology Review",
      description: "Named one of the 35 most innovative technologists under the age of 45.",
    },
    {
      id: 8,
      year: 2016,
      name: "Microsoft Research Faculty Fellowship",
      organization: "Microsoft Research",
      description: "Two-year fellowship supporting innovative research in computer science.",
    },
    {
      id: 9,
      year: 2024,
      name: "Best Paper Award – NeurIPS 2024",
      organization: "Neural Information Processing Systems Foundation",
      description:
        "Awarded to the paper 'FedPriv: Efficient Federated Learning with Adaptive Differential Privacy Guarantees'.",
    },
  ],

  courses: [
    {
      code: "CS 6780",
      name: "Machine Learning",
      level: "Graduate",
      description:
        "Covers supervised, unsupervised, and reinforcement learning; deep learning; probabilistic models; and recent advances in large language models.",
      term: "Fall 2024",
    },
    {
      code: "CS 5340",
      name: "Distributed Systems",
      level: "Graduate",
      description:
        "Fault tolerance, consistency, replication, consensus protocols (Paxos, Raft), distributed transactions, and modern cloud infrastructure.",
      term: "Spring 2024",
    },
    {
      code: "CS 4880",
      name: "Privacy & Security in Computing",
      level: "Undergraduate",
      description:
        "Cryptographic foundations, access control, threat modeling, and privacy-enhancing technologies including differential privacy and secure computation.",
      term: "Fall 2024",
    },
    {
      code: "CS 3200",
      name: "Introduction to Algorithms",
      level: "Undergraduate",
      description:
        "Design and analysis of algorithms: sorting, graph algorithms, dynamic programming, greedy algorithms, NP-completeness, and approximation.",
      term: "Spring 2024",
    },
    {
      code: "CS 7920",
      name: "Advanced Topics: Federated Learning",
      level: "Graduate Seminar",
      description:
        "Reading seminar covering the latest research in federated learning, covering optimization, privacy, fairness, and systems design.",
      term: "Spring 2024",
    },
  ],

  students: {
    phd: [
      {
        name: "Raj Patel",
        topic: "Adaptive Differential Privacy for Federated Learning",
        year: "2021–Present",
        status: "current",
      },
      { name: "Li Chen", topic: "Secure Aggregation Protocols", year: "2020–Present", status: "current" },
      { name: "Maya Williams", topic: "Distributed Systems Scheduling", year: "2022–Present", status: "current" },
      {
        name: "Kevin Nguyen",
        topic: "Verifiable Distributed Training",
        year: "2019–2023",
        status: "graduated",
        position: "Research Scientist, Google DeepMind",
      },
      {
        name: "Tanya Brown",
        topic: "Secure Enclave Architectures",
        year: "2017–2022",
        status: "graduated",
        position: "Assistant Professor, UC Berkeley",
      },
    ],
    postdoc: [
      {
        name: "Dr. Hiroshi Zhang",
        topic: "Privacy-Preserving Optimization",
        year: "2023–Present",
        status: "current",
      },
    ],
  },

  grants: [
    {
      title: "Foundations of Privacy-Preserving Distributed Machine Learning",
      agency: "National Science Foundation (NSF CAREER)",
      amount: "$600,000",
      period: "2021–2026",
      role: "Principal Investigator",
    },
    {
      title: "Trustworthy AI in Healthcare: Privacy, Fairness, and Accountability",
      agency: "National Institutes of Health (NIH R01)",
      amount: "$1,200,000",
      period: "2022–2027",
      role: "Principal Investigator",
    },
    {
      title: "Scalable Secure Computation for Genomic Data",
      agency: "DARPA",
      amount: "$900,000",
      period: "2020–2024",
      role: "Co-Principal Investigator",
    },
  ],
};
