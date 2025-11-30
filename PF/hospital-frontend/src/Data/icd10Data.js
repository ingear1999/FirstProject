const icd10Data = [
  {
    illness: "Influenza (Seasonal)",
    icd: "J10",
    symptoms: [
      { id: "fever", weight: 0.30 },
      { id: "cough", weight: 0.25 },
      { id: "fatigue", weight: 0.20 },
      { id: "headache", weight: 0.15 },
      { id: "soreThroat", weight: 0.10 }
    ]
  },
  {
    illness: "COVID-19 (Suspected)",
    icd: "U07.1",
    symptoms: [
      { id: "fever", weight: 0.25 },
      { id: "cough", weight: 0.20 },
      { id: "fatigue", weight: 0.15 },
      { id: "shortBreath", weight: 0.25 },
      { id: "lossTasteSmell", weight: 0.15 }
    ]
  },
  {
    illness: "Pneumonia (Unspecified)",
    icd: "J18.9",
    symptoms: [
      { id: "fever", weight: 0.25 },
      { id: "cough", weight: 0.20 },
      { id: "shortBreath", weight: 0.30 },
      { id: "chestPain", weight: 0.15 }
    ]
  },
  {
    illness: "Migraine",
    icd: "G43",
    symptoms: [
      { id: "headache", weight: 0.6 },
      { id: "nausea", weight: 0.25 },
      { id: "sensitivityLight", weight: 0.15 }
    ]
  },
  {
    illness: "Acute Appendicitis",
    icd: "K35",
    symptoms: [
      { id: "abdominalPain", weight: 0.6 },
      { id: "nausea", weight: 0.2 },
      { id: "fever", weight: 0.2 }
    ],
    emergency: true
  },
  {
    illness: "Angina Pectoris",
    icd: "I20",
    symptoms: [
      { id: "chestPain", weight: 0.6 },
      { id: "shortBreath", weight: 0.25 },
      { id: "fatigue", weight: 0.15 }
    ],
    emergency: true
  },
  {
    illness: "Gastroenteritis",
    icd: "A09",
    symptoms: [
      { id: "nausea", weight: 0.30 },
      { id: "diarrhea", weight: 0.40 },
      { id: "abdominalPain", weight: 0.20 },
      { id: "fever", weight: 0.10 }
    ]
  },
  {
    illness: "Type 2 Diabetes Mellitus",
    icd: "E11",
    symptoms: [
      { id: "fatigue", weight: 0.25 },
      { id: "increasedThirst", weight: 0.35 },
      { id: "frequentUrination", weight: 0.40 }
    ]
  },
  {
    illness: "Anemia",
    icd: "D64.9",
    symptoms: [
      { id: "fatigue", weight: 0.4 },
      { id: "dizziness", weight: 0.35 },
      { id: "pallor", weight: 0.25 }
    ]
  },
  {
    illness: "Asthma Exacerbation",
    icd: "J45.901",
    symptoms: [
      { id: "shortBreath", weight: 0.5 },
      { id: "wheezing", weight: 0.3 },
      { id: "cough", weight: 0.2 }
    ],
    emergency: false
  }
];

export default icd10Data;
