export type EducationItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    slug: "tirzepatide",
    title: "Tirzepatide",
    category: "GLP Weight Loss Products",
    summary:
      "Tirzepatide is a dual GLP-1 and GIP receptor agonist associated with appetite regulation, blood sugar support, and weight management.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "Tirzepatide mimics two natural gut hormones: GLP-1 and GIP.",
          "It may support appetite reduction, slower stomach emptying, improved insulin response, and reduced food cravings.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Weight management support.",
          "Reduced appetite and food noise.",
          "Improved insulin sensitivity.",
          "Blood sugar support.",
        ],
      },
      {
        heading: "Common Side Effects",
        body: [
          "Nausea, constipation, diarrhea, indigestion, and fatigue may occur, especially when starting or increasing dose.",
        ],
      },
    ],
  },
  {
    slug: "retatrutide",
    title: "Retatrutide",
    category: "GLP Weight Loss Products",
    summary:
      "Retatrutide is often described as a triple agonist because it activates GLP-1, GIP, and glucagon receptors.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "Retatrutide targets GLP-1, GIP, and glucagon receptors.",
          "This combination may support appetite control, blood sugar regulation, fat utilization, and increased energy expenditure.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Reduced hunger and cravings.",
          "Improved fullness after meals.",
          "Weight management support.",
          "Metabolic support.",
        ],
      },
      {
        heading: "Common Side Effects",
        body: [
          "Nausea, vomiting, diarrhea, constipation, stomach discomfort, and temporary heart-rate increases have been reported.",
        ],
      },
    ],
  },
  {
    slug: "cagrilintide",
    title: "Cagrilintide",
    category: "GLP Weight Loss Products",
    summary:
      "Cagrilintide is a long-acting amylin analog associated with appetite regulation, fullness, and reduced food intake.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "Cagrilintide mimics amylin, a hormone naturally released with insulin after eating.",
          "It may increase fullness, slow stomach emptying, reduce hunger signals, and decrease cravings.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Reduced appetite.",
          "Less food noise.",
          "Smaller portion sizes.",
          "Weight management support.",
        ],
      },
      {
        heading: "Common Side Effects",
        body: [
          "Nausea, constipation, fullness, reflux, fatigue, and occasional vomiting may occur.",
        ],
      },
    ],
  },
  {
    slug: "aod-9604",
    title: "AOD-9604",
    category: "GLP Weight Loss Products",
    summary:
      "AOD-9604 is a modified fragment of human growth hormone studied for fat metabolism support.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "AOD-9604 may support lipolysis, reduce lipogenesis, and assist with stubborn fat stores when paired with nutrition and exercise.",
          "It is not considered a muscle-building peptide or appetite suppressant.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Fat metabolism support.",
          "Body composition support.",
          "Cutting phase support.",
          "Potential cartilage and joint-health research interest.",
        ],
      },
    ],
  },
  {
    slug: "pt-141",
    title: "PT-141 (Bremelanotide)",
    category: "Sexual Wellness & Intimacy Support",
    summary:
      "PT-141 works through the brain’s arousal pathways rather than directly increasing blood flow.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "PT-141 activates melanocortin receptors, primarily MC4R, in the central nervous system.",
          "It is associated with libido, arousal, and responsiveness to sexual stimuli.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Increased sexual desire.",
          "Improved arousal.",
          "Enhanced responsiveness to intimacy.",
          "Sexual wellness support.",
        ],
      },
      {
        heading: "Common Side Effects",
        body: [
          "Nausea, flushing, headache, temporary blood pressure increase, fatigue, nasal congestion, and skin pigmentation changes may occur.",
        ],
      },
    ],
  },
  {
    slug: "vip",
    title: "VIP (Vasoactive Intestinal Peptide)",
    category: "Gut Health & Inflammatory Support",
    summary:
      "VIP is a naturally occurring neuropeptide involved in inflammation, immune regulation, blood flow, gut function, and nervous system signaling.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "VIP binds to VPAC1 and VPAC2 receptors.",
          "It may support immune balance, inflammation regulation, smooth muscle relaxation, gut function, and nervous system communication.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Inflammation support.",
          "Immune regulation.",
          "Respiratory and airway support.",
          "Gut and nervous system support.",
        ],
      },
      {
        heading: "Common Side Effects",
        body: [
          "Flushing, headache, lightheadedness, increased heart rate, and nasal irritation may occur.",
        ],
      },
    ],
  },
  {
    slug: "kisspeptin",
    title: "Kisspeptin",
    category: "Sexual Wellness & Intimacy Support",
    summary:
      "Kisspeptin is a peptide involved in reproductive hormone signaling and the GnRH, LH, and FSH cascade.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "Kisspeptin stimulates GnRH release in the hypothalamus.",
          "GnRH signals the pituitary to release LH and FSH, which influence testosterone, estrogen, ovulation, fertility, and libido.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Libido support.",
          "Reproductive hormone signaling support.",
          "Fertility pathway support.",
          "Natural testosterone and estrogen signaling support.",
        ],
      },
      {
        heading: "Common Side Effects",
        body: [
          "Headache, flushing, nausea, temporary dizziness, and injection-site irritation may occur.",
        ],
      },
    ],
  },
  {
    slug: "glutathione",
    title: "Glutathione",
    category: "Gut Health & Inflammatory Support",
    summary:
      "Glutathione is often called the body’s master antioxidant and supports detoxification, immune function, and cellular health.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "Glutathione helps neutralize free radicals, support liver detoxification, protect mitochondria, and support immune-cell function.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Antioxidant support.",
          "Liver detoxification support.",
          "Immune support.",
          "Skin and cellular-health support.",
        ],
      },
    ],
  },
  {
    slug: "kpv",
    title: "KPV",
    category: "Gut Health & Inflammatory Support",
    summary:
      "KPV is a three-amino-acid peptide known for anti-inflammatory and immune-modulating effects.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "KPV may reduce inflammatory cytokines and support a more balanced immune environment.",
          "It is commonly discussed for gut, skin, and inflammation-related support.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Gut-health support.",
          "Inflammation support.",
          "Skin irritation support.",
          "Immune modulation.",
        ],
      },
    ],
  },
  {
    slug: "ss-31",
    title: "SS-31 (Elamipretide)",
    category: "Cognitive Wellness, Mood & Sleep Support",
    summary:
      "SS-31 is a mitochondrial-targeting peptide associated with cellular energy, mitochondrial efficiency, and healthy aging research.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "SS-31 targets mitochondria and binds cardiolipin, helping support mitochondrial structure and efficiency.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Mitochondrial support.",
          "Energy production support.",
          "Exercise endurance support.",
          "Healthy aging support.",
        ],
      },
    ],
  },
  {
    slug: "nad",
    title: "NAD+",
    category: "Cognitive Wellness, Mood & Sleep Support",
    summary:
      "NAD+ is a key molecule used by cells for energy production, DNA repair, metabolism, and healthy aging pathways.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "NAD+ acts as an electron carrier in mitochondrial energy production.",
          "It is involved in ATP production, DNA repair, metabolism, and cellular resilience.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Energy support.",
          "Mental clarity support.",
          "Recovery support.",
          "Healthy aging and mitochondrial support.",
        ],
      },
    ],
  },
  {
    slug: "mots-c",
    title: "MOTS-c",
    category: "Cognitive Wellness, Mood & Sleep Support",
    summary:
      "MOTS-c is a mitochondrial-derived peptide associated with metabolic signaling and exercise-adaptation pathways.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "MOTS-c may activate AMPK, support glucose use, improve metabolic flexibility, and help cells adapt to stress.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Metabolic support.",
          "Exercise endurance support.",
          "Insulin-sensitivity support.",
          "Fat-loss support when paired with diet and exercise.",
        ],
      },
    ],
  },
  {
    slug: "dsip",
    title: "DSIP",
    category: "Cognitive Wellness, Mood & Sleep Support",
    summary:
      "DSIP is a neuropeptide associated with sleep quality, stress response, recovery, and nervous-system support.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "DSIP may influence sleep-wake cycles, cortisol regulation, autonomic balance, and neurotransmitter systems.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Sleep quality support.",
          "Recovery support.",
          "Stress regulation support.",
          "Nervous system support.",
        ],
      },
    ],
  },
  {
    slug: "selank",
    title: "Selank",
    category: "Cognitive Wellness, Mood & Sleep Support",
    summary:
      "Selank is a synthetic peptide associated with anxiety reduction, mood support, stress resilience, and calm focus.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "Selank may influence serotonin, GABA-related signaling, and endorphin pathways.",
          "It may also support BDNF and brain function.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Stress support.",
          "Mood support.",
          "Calm focus.",
          "Emotional regulation support.",
        ],
      },
    ],
  },
  {
    slug: "semax",
    title: "Semax",
    category: "Cognitive Wellness, Mood & Sleep Support",
    summary:
      "Semax is a synthetic peptide studied for cognitive support, neuroprotection, focus, and mental clarity.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "Semax may increase BDNF and NGF, supporting neuroplasticity, learning, memory, and brain-cell resilience.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Focus support.",
          "Memory and learning support.",
          "Mental clarity.",
          "Neuroprotection research interest.",
        ],
      },
    ],
  },
  {
    slug: "klow-stack",
    title: "Klow Stack",
    category: "Skin, Hair & Aesthetic Wellness",
    summary:
      "Klow Stack combines KPV, GHK-Cu, BPC-157, and TB-500 for inflammation, gut, collagen, skin, and recovery support.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "KPV supports inflammation control, GHK-Cu supports collagen and skin quality, BPC-157 supports targeted repair, and TB-500 supports systemic recovery.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Inflammation support.",
          "Gut-health support.",
          "Skin and collagen support.",
          "Joint, tendon, and recovery support.",
        ],
      },
    ],
  },
  {
    slug: "glow-stack",
    title: "Glow Stack",
    category: "Skin, Hair & Aesthetic Wellness",
    summary:
      "Glow Stack commonly refers to GHK-Cu, BPC-157, and TB-500 for skin, hair, tissue repair, and recovery support.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "GHK-Cu supports collagen, skin, and hair; BPC-157 supports repair; TB-500 supports tissue remodeling and recovery.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Skin quality support.",
          "Hair support.",
          "Tissue repair support.",
          "Recovery support.",
        ],
      },
    ],
  },
  {
    slug: "melanotan-i",
    title: "Melanotan I",
    category: "Skin, Hair & Aesthetic Wellness",
    summary:
      "Melanotan I is a synthetic peptide that mimics alpha-MSH and is associated with melanin production and skin pigmentation pathways.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "Melanotan I binds MC1R receptors on melanocytes and signals increased eumelanin production.",
        ],
      },
      {
        heading: "Potential Effects",
        body: [
          "Increased pigmentation.",
          "Enhanced eumelanin production.",
          "Possible photoprotective research interest.",
        ],
      },
      {
        heading: "Important Note",
        body: [
          "Melanotan I is not a sunscreen and does not eliminate the need for UV protection.",
        ],
      },
    ],
  },
  {
    slug: "ghk-cu",
    title: "GHK-Cu",
    category: "Skin, Hair & Aesthetic Wellness",
    summary:
      "GHK-Cu is a copper peptide associated with skin health, tissue repair, collagen, hair support, and inflammation control.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "GHK-Cu may support collagen and elastin production, wound healing, angiogenesis, and hair follicle health.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Skin quality support.",
          "Hair support.",
          "Collagen support.",
          "Tissue repair and wound-healing support.",
        ],
      },
    ],
  },
  {
    slug: "wolverine-stack",
    title: "Wolverine Stack",
    category: "Muscle Performance, Strength & Recovery",
    summary:
      "Wolverine Stack commonly refers to BPC-157 and TB-500 for tissue repair and recovery support.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "BPC-157 is associated with localized tissue repair and inflammation support.",
          "TB-500 is associated with systemic recovery, cell migration, flexibility, and tissue remodeling.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Tendon and ligament support.",
          "Injury recovery support.",
          "Mobility and flexibility support.",
          "Training recovery support.",
        ],
      },
    ],
  },
  {
    slug: "tesamorelin",
    title: "Tesamorelin",
    category: "Muscle Performance, Strength & Recovery",
    summary:
      "Tesamorelin is a synthetic GHRH analog associated with growth hormone stimulation and visceral-fat research.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "Tesamorelin binds GHRH receptors in the pituitary gland, encouraging growth hormone release and IGF-1 production.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Growth hormone pathway support.",
          "Body composition support.",
          "Visceral-fat research interest.",
          "Recovery and sleep support.",
        ],
      },
      {
        heading: "Common Side Effects",
        body: [
          "Injection site reactions, water retention, joint stiffness, tingling, headaches, appetite changes, and fatigue may occur.",
        ],
      },
    ],
  },
  {
    slug: "sermorelin",
    title: "Sermorelin",
    category: "Muscle Performance, Strength & Recovery",
    summary:
      "Sermorelin is a synthetic version of part of natural GHRH and stimulates the pituitary to release growth hormone.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "Sermorelin binds GHRH receptors and supports natural growth hormone pulses and IGF-1 production.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Sleep quality support.",
          "Exercise recovery support.",
          "Body composition support.",
          "Healthy aging support.",
        ],
      },
    ],
  },
  {
    slug: "cjc-ipamorelin",
    title: "CJC-1295 (No DAC) + Ipamorelin",
    category: "Muscle Performance, Strength & Recovery",
    summary:
      "CJC-1295 No DAC and Ipamorelin are commonly paired to support natural growth hormone release.",
    sections: [
      {
        heading: "How It Works",
        body: [
          "CJC-1295 No DAC acts as a GHRH analog.",
          "Ipamorelin acts through the growth hormone secretagogue receptor pathway.",
          "Together, they may produce a stronger growth hormone pulse than either alone.",
        ],
      },
      {
        heading: "Potential Benefits",
        body: [
          "Recovery support.",
          "Sleep quality support.",
          "Body composition support.",
          "Lean-mass and tissue-repair support.",
        ],
      },
      {
        heading: "Common Side Effects",
        body: [
          "Water retention, headaches, injection-site irritation, tingling, hunger, and temporary fatigue may occur.",
        ],
      },
    ],
  },
];