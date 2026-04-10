const DATA = {
  "title": "RETRAI 2025 Paper Repository",
  "subtitle": "Workshop on Requirements Engineering for Trustworthy AI",
  "event": "Co-located with RE'25",
  "year": 2025,
  "total_papers": 14,
  "classification_scheme": {
    "Universal": "Applicable to any AI system, regardless of domain or deployment context.",
    "Domain-Specific": "Applies within a specific application domain.",
    "Customizable": "Configurable to an individual user's profile, preferences, accessibility needs, or deployment contexts."
  },

  "requirements_for_trustworthy_ai": {
    "universal": [
      {
        "rule": "When an AI system makes a high-stakes decision (where 'high-stakes' is a threshold defined by the deployment domain), a human shall be able to review and approve before execution (human-in-the-loop mode).",
        "papers": ["P01"]
      },
      {
        "rule": "The system shall provide mechanisms enabling human oversight personnel to detect anomalies, dysfunctions, and unexpected variations in AI output.",
        "papers": ["P01", "P06"]
      },
      {
        "rule": "When an AI system interacts directly with a human user, the system shall make it explicit that the user is interacting with an AI system and not a human.",
        "papers": ["P06", "P09"]
      },
      {
        "rule": "When an AI system generates or manipulates audio, image, video, or text content, the content shall be marked as AI-generated in machine-readable format.",
        "papers": ["P06"]
      },
      {
        "rule": "Each governance risk narrative (e.g., opacity, systemic bias) shall be decomposed into verifiable trust requirements traceable to the corresponding regulatory obligation.",
        "papers": ["P07", "P12"]
      },
      {
        "rule": "The system shall maintain a traceability matrix linking each governance goal to sub-goals, system requirements, test cases, and verification methods.",
        "papers": ["P07", "P12"]
      },
      {
        "rule": "When regulatory frameworks (e.g., EU AI Act, ISO/IEC 42001) are updated, the corresponding system requirements shall be reviewed and updated accordingly.",
        "papers": ["P06", "P07"]
      },
      {
        "rule": "Trustworthiness requirements shall be explicitly classified as technical (functional correctness), ethical (value alignment), or perceived (user experience), each with distinct validation criteria.",
        "papers": ["P03", "P12"]
      },
      {
        "rule": "The system shall undergo runtime verification to continuously demonstrate its trustworthiness properties throughout its operational lifecycle, not only at design time.",
        "papers": ["P03", "P04"]
      },
      {
        "rule": "AI-generated requirements artifacts (e.g., ethics requirements) shall be reviewed and validated by human requirements engineers before integration into the system specification.",
        "papers": ["P11"]
      },
      {
        "rule": "The system shall not be presented as a normative agent capable of human-level judgment; it shall be explicitly labeled as a functional computational tool.",
        "papers": ["P09"]
      }
    ],
    "domain_specific": [
      {
        "rule": "When the system generates a content recommendation, it shall display a visual or textual explanation of how the user's past activity influenced that recommendation.",
        "domain": "Recommender Systems / Social Media",
        "papers": ["P02"]
      },
      {
        "rule": "When homogeneity or repetition is detected in a user's recommendation feed, the system shall surface a prompt inviting the user to reassess and diversify content exposure.",
        "domain": "Recommender Systems / Social Media",
        "papers": ["P02"]
      },
      {
        "rule": "The system shall provide interactive controls (e.g., adjustable parameters, what-if sliders) enabling users to shape or diversify their recommendation feed.",
        "domain": "Recommender Systems / Social Media",
        "papers": ["P02"]
      },
      {
        "rule": "The system shall provide simulation tools that visualize how changes in user behavior would shift future recommendation outputs.",
        "domain": "Recommender Systems / Social Media",
        "papers": ["P02"]
      },
      {
        "rule": "The safety monitor shall run on isolated computing resources and shall not rely on the primary AI controller's correct operation for its own functioning (monitor-controller independence).",
        "domain": "Robotics / Physical AI",
        "papers": ["P04", "P05"]
      },
      {
        "rule": "The system shall define a set of explicit safety constraints (e.g., maximum speed, force limits, geo-fence boundaries). The monitor shall continuously evaluate these constraints at runtime.",
        "domain": "Robotics / Physical AI",
        "papers": ["P04"]
      },
      {
        "rule": "When a safety constraint is violated or an unsafe state is imminent, the system shall immediately execute a pre-defined fallback action and override the primary AI controller's commands.",
        "domain": "Robotics / Physical AI",
        "papers": ["P04", "P05"]
      },
      {
        "rule": "The safety monitor shall have a bounded response time guaranteed to be shorter than the time required for the identified hazard to reach a critical unsafe state.",
        "domain": "Robotics / Physical AI",
        "papers": ["P04"]
      },
      {
        "rule": "When the safety monitor fails or loses power, the system shall default to a safe state (fail-safe by default); it shall never continue uncontrolled operation.",
        "domain": "Robotics / Physical AI",
        "papers": ["P04"]
      },
      {
        "rule": "All LLM-generated commands shall be validated against predefined safety envelopes by a runtime assurance module before being passed to the flight controller.",
        "domain": "UAV / Autonomous Systems",
        "papers": ["P05"]
      },
      {
        "rule": "All inputs and outputs to/from the LLM component shall be sanitized and validated before transmission to any safety-critical subsystem.",
        "domain": "UAV / Autonomous Systems",
        "papers": ["P05"]
      },
      {
        "rule": "The AI perception component shall be tested against all combinations of sensor degradation factors defined in the Operational Design Domain (situation coverage), expressed as performance requirements qualified by operational context conditions.",
        "domain": "Computer Vision / Autonomous",
        "papers": ["P08"]
      },
      {
        "rule": "High-risk AI systems shall implement automatic logging of events throughout the system's lifetime to ensure traceability and support post-market monitoring.",
        "domain": "High-Risk AI (EU AI Act)",
        "papers": ["P06"]
      },
      {
        "rule": "High-risk AI system training, validation, and testing data shall be subject to documented bias detection and mitigation procedures, including measures for protected attributes.",
        "domain": "High-Risk AI (EU AI Act)",
        "papers": ["P06"]
      },
      {
        "rule": "When an AI decision significantly affects a natural person's health, safety, or fundamental rights, the deployer shall provide a clear and meaningful explanation of the AI's role and the main elements of the decision.",
        "domain": "High-Risk AI (EU AI Act)",
        "papers": ["P06"]
      },
      {
        "rule": "When the agent provides assistance on medical, legal, or high-stakes topics, the system shall identify itself as an AI and recommend that the user consult a qualified human professional.",
        "domain": "Conversational AI",
        "papers": ["P10"]
      },
      {
        "rule": "When a user's request exceeds the agent's competence, the agent shall refer the user to a competent professional or appropriate service, and shall not proceed beyond its validated scope.",
        "domain": "Conversational AI",
        "papers": ["P10"]
      },
      {
        "rule": "When a user submits a complaint, the agent shall explain the complaint-handling process and state the expected timeline for resolution.",
        "domain": "Conversational AI",
        "papers": ["P10"]
      },
      {
        "rule": "When selecting a sentiment analysis tool for use in SE contexts, the tool shall be evaluated against SE-specific datasets, not generic benchmark datasets.",
        "domain": "Software Engineering",
        "papers": ["P13"]
      },
      {
        "rule": "The dataset used to evaluate or train the sentiment analysis tool shall be documented with its domain-specific characteristics (size, source, label distribution, known biases).",
        "domain": "Software Engineering",
        "papers": ["P13"]
      }
    ],
    "customizable": [
      {
        "rule": "The level of human oversight shall be configurable based on the risk profile of individual decisions, the user's cognitive mode (skill-based, rule-based, knowledge-based), and the operational context.",
        "papers": ["P01"]
      },
      {
        "rule": "The system shall allow users to set explicit learning goals or informational preferences that override engagement-based optimization in recommendation algorithms.",
        "papers": ["P02"]
      },
      {
        "rule": "When illustrating a concept or generating content, the agent shall tailor its response to align with the individual user's stated demographics, cultural background, or maturity level.",
        "papers": ["P10"]
      },
      {
        "rule": "When a user expresses a challenge or issue, the agent shall offer collaborative problem-solving support; it shall adapt its interaction style to the user's accessibility needs and individual contextual variables (e.g., maturity level, socioeconomic status), in addition to any stated preferences.",
        "papers": ["P10"]
      },
      {
        "rule": "When using LLMs for requirements engineering tasks, the prompt shall specify the target domain, stakeholder perspective, and applicable ethical framework to reduce ambiguity and improve relevance.",
        "papers": ["P11", "P14"]
      },
      {
        "rule": "LLM-generated ethics requirements drafts shall be customizable by requirements engineers with domain-specific ethical frameworks (e.g., ECCOLA, RE4HCAI) before acceptance.",
        "papers": ["P11"]
      },
      {
        "rule": "Counterfactual explanations generated for adverse AI decisions (e.g., credit refusal, access denial) shall be tailored to the affected individual's specific case with a defined confidence threshold.",
        "papers": ["P07"]
      }
    ]
  },

  "challenges_for_trustworthy_ai": {
    "universal": [
      {
        "challenge": "Determining the appropriate level of human oversight for a given AI system without degrading performance or safety requires context-specific trade-off frameworks not yet standardized across domains.",
        "papers": ["P01"]
      },
      {
        "challenge": "Translating abstract trustworthiness properties (ethical, perceived) into machine-readable, formally verifiable requirements remains methodologically unsolved.",
        "papers": ["P03", "P12"]
      },
      {
        "challenge": "Operationalizing vague governance language from EU AI Act / ISO 42001 into concrete, testable engineering artifacts lacks standardized tools and processes.",
        "papers": ["P06", "P07"]
      },
      {
        "challenge": "Building and maintaining a complete traceability chain from governance policy to system requirement to test case is resource-intensive and prone to compliance drift during system evolution.",
        "papers": ["P07", "P12"]
      },
      {
        "challenge": "Runtime verification of trustworthiness properties (fairness, transparency, accountability) in deployed AI systems requires new techniques beyond traditional V&V methods.",
        "papers": ["P03"]
      },
      {
        "challenge": "Integrating AI systems into human normative practices without replacing or bypassing human judgment requires new sociotechnical design frameworks.",
        "papers": ["P09"]
      },
      {
        "challenge": "AI-generated requirements (ethics, functional) exhibit reliability and hallucination risks that require human oversight protocols before integration.",
        "papers": ["P11", "P14"]
      }
    ],
    "domain_specific": [
      {
        "challenge": "Designing interface affordances that promote epistemic reflection (e.g., echo chamber detection, diversity nudges) without disrupting usability or engagement is an open UX research problem.",
        "domain": "Recommender Systems / Social Media",
        "papers": ["P02"]
      },
      {
        "challenge": "Defining a minimal sufficient set of safety constraints for a physical AI monitor that covers all foreseeable hazards without becoming so complex it defeats certifiability (completeness vs. simplicity trade-off).",
        "domain": "Robotics / Physical AI",
        "papers": ["P04"]
      },
      {
        "challenge": "Handling unknown hazards (SOTIF issues) introduced by LLM controllers whose behavior cannot be exhaustively verified pre-deployment with current methods.",
        "domain": "UAV / Autonomous Systems",
        "papers": ["P05"]
      },
      {
        "challenge": "Constructing situation coverage grids for all combinations of sensor degradation factors results in large combinatorial spaces (e.g., 252 scenarios for usage-type alone), requiring prioritization methods.",
        "domain": "Computer Vision / Autonomous",
        "papers": ["P08"]
      },
      {
        "challenge": "The EU AI Act's explainability and interpretability obligations use weak and ambiguous wording (\"sufficient\", \"where applicable\"), making compliance operationalization dependent on yet-to-be-published harmonized standards.",
        "domain": "Regulatory (EU AI Act)",
        "papers": ["P06"]
      },
      {
        "challenge": "Eliciting empathetic and domain-specific ethical constraints for chatbots requires diverse multi-stakeholder input and is highly dependent on cultural and professional norms.",
        "domain": "Conversational AI",
        "papers": ["P10"]
      },
      {
        "challenge": "SE-specific sentiment analysis tools suffer from dataset bias and inconsistency; performance on general benchmarks does not reliably predict behavior on SE-domain corpora.",
        "domain": "Software Engineering",
        "papers": ["P13"]
      },
      {
        "challenge": "Prompt sensitivity in LLM-based RE tasks introduces reproducibility risks: small changes in prompt phrasing produce divergent requirement artifacts.",
        "domain": "LLM-Assisted RE",
        "papers": ["P14"]
      }
    ],
    "customized": [
      {
        "challenge": "Negotiating conflicting trustworthiness preferences among multiple stakeholders in the same deployment (e.g., performance vs. explainability for different user types) requires runtime negotiation mechanisms not yet supported by standard RE tools.",
        "papers": ["P01", "P03"]
      },
      {
        "challenge": "Personalizing explainability outputs (technical diagnostics for developers vs. intuitive narratives for end-users) requires dynamic explanation generation beyond current post-hoc XAI methods.",
        "papers": ["P01", "P06"]
      },
      {
        "challenge": "The overhead of human validation required for AI-generated requirements drafts scales poorly with system complexity, making fully automated ethics requirement generation impractical without better quality-assurance filters.",
        "papers": ["P11"]
      },
      {
        "challenge": "Allowing users to modify recommendation parameters while maintaining system-level consistency (e.g., preventing adversarial preference manipulation) requires adaptive safeguards not yet standardized.",
        "papers": ["P02"]
      }
    ]
  },

  "trustworthy_ai_concerns": [
    {
      "concern": "Accountability & Auditability",
      "description": "The system's decisions must be attributable, logged, and reviewable by authorized parties throughout its operational life.",
      "papers": ["P01", "P06", "P07", "P12"]
    },
    {
      "concern": "Explainability & Interpretability",
      "description": "The system's outputs and decision logic must be understandable to different stakeholders at appropriate levels of detail, including legally mandated explanations for individuals affected by high-risk decisions.",
      "papers": ["P02", "P06", "P07", "P09"]
    },
    {
      "concern": "Fairness & Non-discrimination",
      "description": "The system shall not produce biased or discriminatory outputs; bias must be measured, documented, and mitigated across protected attributes and demographic groups.",
      "papers": ["P06", "P07", "P10", "P13"]
    },
    {
      "concern": "Safety & Reliability",
      "description": "The system must operate safely under all defined operational conditions and degrade gracefully when sensor inputs or AI outputs deviate from expected ranges.",
      "papers": ["P04", "P05", "P08"]
    },
    {
      "concern": "Human Agency & Oversight",
      "description": "Users and oversight personnel must retain meaningful control over AI decisions; the system shall never fully remove the capacity for human review or intervention in high-stakes contexts.",
      "papers": ["P01", "P06", "P09"]
    },
    {
      "concern": "Privacy & Data Governance",
      "description": "Personal data must be processed lawfully and transparently; training and operational data must be documented, and systems must resist data/model poisoning attacks.",
      "papers": ["P06", "P07"]
    },
    {
      "concern": "Ethical Alignment",
      "description": "The system's behavior must be consistent with societal values, ethical principles, and domain-specific professional norms (e.g., medical ethics, educational equity).",
      "papers": ["P09", "P10", "P11"]
    },
    {
      "concern": "Robustness & Resilience",
      "description": "The system must maintain acceptable performance under distributional shifts, sensor degradation, adversarial inputs, and unexpected operational contexts.",
      "papers": ["P04", "P05", "P08"]
    },
    {
      "concern": "Epistemic Agency (User)",
      "description": "Users must be equipped with the means to understand, evaluate, and contest the AI system's outputs — not merely receive them passively.",
      "papers": ["P02", "P09"]
    },
    {
      "concern": "Regulatory Compliance",
      "description": "The system must comply with applicable laws and standards (EU AI Act, ISO/IEC 42001, NIST RMF) at the time of deployment and continuously as these frameworks evolve.",
      "papers": ["P06", "P07"]
    }
  ],

  "accepted_papers": [
    {
      "id": "P01",
      "title": "Navigating the Human-oversight Dilemma in AI-based Systems",
      "authors": ["Eran Sadovski", "Itzik Aviv", "Irit Hadar"],
      "affiliations": ["University of Haifa", "The Academic College of Tel Aviv-Yafo", "University of Haifa"],
      "year": 2025,
      "domain": "Cross-domain",
      "field": "Requirements Engineering",
      "pdf": "RETRAI-25-PAPERS/RETRAI-25_paper_2.pdf",
      "citation": "Sadovski, E., Aviv, I., & Hadar, I. (2025). Navigating the Human-oversight Dilemma in AI-based Systems. In Proceedings of RETRAI 2025: Workshop on Requirements Engineering for Trustworthy AI, co-located with RE'25, Osaka, Japan."
    },
    {
      "id": "P02",
      "title": "Educational Requirements for Trustworthy Recommender Systems",
      "authors": ["Alexandru Mateescu"],
      "affiliations": ["Université Paris 1 Panthéon-Sorbonne, École Doctorale 280, Department of Philosophy, Paris, France"],
      "year": 2025,
      "domain": "Recommender Systems / Social Media",
      "field": "Recommender Systems",
      "pdf": "RETRAI-25-PAPERS/RETRAI-25_paper_3.pdf",
      "citation": "Mateescu, A. (2025). Educational Requirements for Trustworthy Recommender Systems. In Proceedings of RETRAI 2025: Workshop on Requirements Engineering for Trustworthy AI, co-located with RE'25, Osaka, Japan."
    },
    {
      "id": "P03",
      "title": "Beyond the Checklist: Rethinking Trustworthiness in AI System",
      "authors": ["Donatella Donati", "Paola Inverardi", "Beatrice Melis", "Patrizio Pelliccione"],
      "affiliations": ["University of L'Aquila", "Gran Sasso Science Institute", "University of Pisa & Gran Sasso Science Institute", "Gran Sasso Science Institute"],
      "year": 2025,
      "domain": "Cross-domain",
      "field": "Software Engineering",
      "pdf": "RETRAI-25-PAPERS/RETRAI-25_paper_4.pdf",
      "citation": "Donati, D., Inverardi, P., Melis, B., & Pelliccione, P. (2025). Beyond the Checklist: Rethinking Trustworthiness in AI System. In Proceedings of RETRAI 2025: Workshop on Requirements Engineering for Trustworthy AI, co-located with RE'25, Osaka, Japan."
    },
    {
      "id": "P04",
      "title": "Extrinsic Safeguarding Mechanism Requirements for Trustworthy Physical AI",
      "authors": ["Matthew Harris", "Dewi Madden"],
      "affiliations": ["SAIF Autonomy, London, United Kingdom", "SAIF Autonomy, London, United Kingdom"],
      "year": 2025,
      "domain": "Robotics / Physical AI",
      "field": "Safety Engineering",
      "pdf": "RETRAI-25-PAPERS/RETRAI-25_paper_7.pdf",
      "citation": "Harris, M., & Madden, D. (2025). Extrinsic Safeguarding Mechanism Requirements for Trustworthy Physical AI. In Proceedings of RETRAI 2025: Workshop on Requirements Engineering for Trustworthy AI, co-located with RE'25, Osaka, Japan."
    },
    {
      "id": "P05",
      "title": "Safe Experimentation with LLM-Controlled UAVs: An Agile Systems Engineering Approach to Requirements Development for Autonomous Systems",
      "authors": ["Matthew Harris", "Dewi Madden", "Kyle Thomas"],
      "affiliations": ["SAIF Autonomy, London, United Kingdom", "SAIF Autonomy, London, United Kingdom", "SAIF Autonomy, London, United Kingdom"],
      "year": 2025,
      "domain": "UAV / Autonomous Systems",
      "field": "Systems Engineering",
      "pdf": "RETRAI-25-PAPERS/RETRAI-25_paper_8.pdf",
      "citation": "Harris, M., Madden, D., & Thomas, K. (2025). Safe Experimentation with LLM-Controlled UAVs: An Agile Systems Engineering Approach to Requirements Development for Autonomous Systems. In Proceedings of RETRAI 2025: Workshop on Requirements Engineering for Trustworthy AI, co-located with RE'25, Osaka, Japan."
    },
    {
      "id": "P06",
      "title": "A Critical Look at the EU AI Act's Requirements and Affected Systems – Who Must Explain What?",
      "authors": ["Matthias Wagner", "Marie-Therese Wittmann", "Markus Borg"],
      "affiliations": ["Dept. of Computer Science, Lund University, Lund, Sweden", "Legal Expert, VERBUND Hydro Power GmbH, Vienna, Austria", "Dept. of Computer Science, Lund University, Lund, Sweden"],
      "year": 2025,
      "domain": "Regulatory / Cross-domain",
      "field": "AI Governance / Law",
      "pdf": "RETRAI-25-PAPERS/RETRAI-25_paper_9.pdf",
      "citation": "Wagner, M., Wittmann, M.-T., & Borg, M. (2025). A Critical Look at the EU AI Act's Requirements and Affected Systems – Who Must Explain What? In Proceedings of RETRAI 2025: Workshop on Requirements Engineering for Trustworthy AI, co-located with RE'25, Osaka, Japan."
    },
    {
      "id": "P07",
      "title": "From Risk Narratives to Trust Requirements: Bridging AI Governance with Requirements Engineering",
      "authors": ["Sahaj Vaidya"],
      "affiliations": ["AI Research and Development Lead, CKC Cares"],
      "year": 2025,
      "domain": "Cross-domain",
      "field": "Requirements Engineering",
      "pdf": "RETRAI-25-PAPERS/RETRAI-25_paper_10.pdf",
      "citation": "Vaidya, S. (2025). From Risk Narratives to Trust Requirements: Bridging AI Governance with Requirements Engineering. In Proceedings of RETRAI 2025: Workshop on Requirements Engineering for Trustworthy AI, co-located with RE'25, Osaka, Japan."
    },
    {
      "id": "P08",
      "title": "Robustness Requirement Coverage using a Situation Coverage Approach for Vision-based AI Systems",
      "authors": ["Sepeedeh Shahbeigi", "Nawshin Mannan Proma", "Victoria Hodge", "Boda Li", "Richard Hawkins", "Valentina Donzella"],
      "affiliations": ["University of York", "Computer Science, University of York, York, United Kingdom", "Dept. of Computer Science, University of York, York, United Kingdom", "University of York", "University of York", "University of York"],
      "year": 2025,
      "domain": "Computer Vision / Autonomous",
      "field": "Software Testing / RE",
      "pdf": "RETRAI-25-PAPERS/RETRAI-25_paper_11.pdf",
      "citation": "Shahbeigi, S., Mannan Proma, N., Hodge, V., Li, B., Hawkins, R., & Donzella, V. (2025). Robustness Requirement Coverage using a Situation Coverage Approach for Vision-based AI Systems. In Proceedings of RETRAI 2025: Workshop on Requirements Engineering for Trustworthy AI, co-located with RE'25, Osaka, Japan."
    },
    {
      "id": "P09",
      "title": "How to Consider AI Technology Systems as a Part of Human Normative Systems",
      "authors": ["Matthew Whiteley"],
      "affiliations": ["Department of Philosophy, University of York, York, England"],
      "year": 2025,
      "domain": "Cross-domain / Philosophy",
      "field": "AI Ethics / Systems Theory",
      "pdf": "RETRAI-25-PAPERS/RETRAI-25_paper_13.pdf",
      "citation": "Whiteley, M. (2025). How to Consider AI Technology Systems as a Part of Human Normative Systems. In Proceedings of RETRAI 2025: Workshop on Requirements Engineering for Trustworthy AI, co-located with RE'25, Osaka, Japan."
    },
    {
      "id": "P10",
      "title": "Ethical and Empathetic Requirements for Trustworthy ChatBots",
      "authors": ["Sophia Jit", "Nikita Dvornik"],
      "affiliations": ["University of Toronto, Toronto, Canada", "Palona AI, Montreal, Canada"],
      "year": 2025,
      "domain": "Conversational AI",
      "field": "HCI / AI Ethics",
      "pdf": "RETRAI-25-PAPERS/RETRAI-25_paper_14.pdf",
      "citation": "Jit, S., & Dvornik, N. (2025). Ethical and Empathetic Requirements for Trustworthy ChatBots. In Proceedings of RETRAI 2025: Workshop on Requirements Engineering for Trustworthy AI, co-located with RE'25, Osaka, Japan."
    },
    {
      "id": "P11",
      "title": "Multi-Agent LLMs as Ethics Advocates in AI-Based Systems",
      "authors": ["Anonymous"],
      "affiliations": ["Anonymous"],
      "year": 2025,
      "domain": "Cross-domain",
      "field": "Requirements Engineering / AI Ethics",
      "pdf": "RETRAI-25-PAPERS/RETRAI-25_paper_16.pdf",
      "citation": "Anonymous. (2025). Multi-Agent LLMs as Ethics Advocates in AI-Based Systems. In Proceedings of RETRAI 2025: Workshop on Requirements Engineering for Trustworthy AI, co-located with RE'25, Osaka, Japan."
    },
    {
      "id": "P12",
      "title": "Towards a Framework for Operationalizing the Specification of Trustworthy AI Requirements",
      "authors": ["Hugo Villamizar", "Daniel Mendez", "Marcos Kalinowski"],
      "affiliations": ["fortiss GmbH, Munich, Germany", "BTH and fortiss GmbH, Karlskrona, Sweden and Munich, Germany", "PUC-Rio, Rio de Janeiro, Brazil"],
      "year": 2025,
      "domain": "Cross-domain",
      "field": "Requirements Engineering",
      "pdf": "RETRAI-25-PAPERS/RETRAI-25_paper_17.pdf",
      "citation": "Villamizar, H., Mendez, D., & Kalinowski, M. (2025). Towards a Framework for Operationalizing the Specification of Trustworthy AI Requirements. In Proceedings of RETRAI 2025: Workshop on Requirements Engineering for Trustworthy AI, co-located with RE'25, Osaka, Japan."
    },
    {
      "id": "P13",
      "title": "Towards Trustworthy Sentiment Analysis in Software Engineering: Dataset Characteristics and Tool Selection",
      "authors": ["Martin Obaidi", "Marc Herrmann", "Kurt Schneider", "Jil Klünder"],
      "affiliations": ["Leibniz University Hannover, Software Engineering Group, Hannover, Germany", "Leibniz University Hannover, Software Engineering Group, Hannover, Germany", "Leibniz University Hannover, Software Engineering Group, Hannover, Germany", "University of Applied Sciences FHDW Hannover, Hannover, Germany"],
      "year": 2025,
      "domain": "Software Engineering",
      "field": "Sentiment Analysis / Empirical SE",
      "pdf": "RETRAI-25-PAPERS/RETRAI-25_paper_20.pdf",
      "citation": "Obaidi, M., Herrmann, M., Schneider, K., & Klünder, J. (2025). Towards Trustworthy Sentiment Analysis in Software Engineering: Dataset Characteristics and Tool Selection. In Proceedings of RETRAI 2025: Workshop on Requirements Engineering for Trustworthy AI, co-located with RE'25, Osaka, Japan."
    },
    {
      "id": "P14",
      "title": "Prompt Engineering for Requirements Engineering: A Literature Review and Roadmap",
      "authors": ["Kaicheng Huang", "Fanyu Wang", "Yutan Huang", "Chetan Arora"],
      "affiliations": ["Faculty of Information Technology, Monash University, Melbourne, Australia", "Faculty of Information Technology, Monash University, Melbourne, Australia", "Faculty of Information Technology, Monash University, Melbourne, Australia", "Faculty of Information Technology, Monash University, Melbourne, Australia"],
      "year": 2025,
      "domain": "LLM Applications / RE",
      "field": "Requirements Engineering / NLP",
      "pdf": "RETRAI-25-PAPERS/RETRAI-25_paper_21.pdf",
      "citation": "Huang, K., Wang, F., Huang, Y., & Arora, C. (2025). Prompt Engineering for Requirements Engineering: A Literature Review and Roadmap. In Proceedings of RETRAI 2025: Workshop on Requirements Engineering for Trustworthy AI, co-located with RE'25, Osaka, Japan."
    }
  ]
}
