export interface Difficulty {
  id: string;
  title: string;
  shortDescription: string;
  whatIsIt: string;
  whatToLookOutFor: string[];
  whatToDo: string[];
  relatedBehaviours: string[];
  relatedStrategies: string[];
  faqs?: { question: string; answer: string }[];
  resources?: { title: string; url?: string; type: string }[];
}

export const difficulties: Difficulty[] = [
  {
    id: 'dyslexia',
    title: 'Dyslexia',
    shortDescription: 'A learning disability which affects the ability to read fluently and accurately.',
    whatIsIt: `Dyslexia is a learning disability which affects the ability to read fluently and accurately. It is independent of other abilities such as intelligence and creativity.

People with dyslexia often also find it hard to:
- Quickly recall words
- Follow directions that are given in large chunks instead of step by step

This means that they will struggle in school. Dyslexia often co-occurs with other difficulties such as ADHD or dyspraxia. It is also possible for a person with autism to have dyslexia.`,
    whatToLookOutFor: [
      'Reading hesitantly',
      'Misreading information',
      'Difficulty with sequences, for example, getting dates in order',
      'Poor organisation or time management',
      'Difficulty organising thoughts clearly',
      'Erratic spelling',
      'Difficulty remembering written information',
    ],
    whatToDo: [
      'Use written reminders',
      'Use colour coded calendars with icons',
      'Use mnemonic devices',
      'Give extra time to process information',
      'Present information in small chunks',
      'Use accessible text formatting',
      'Offer audio alternatives to reading',
    ],
    relatedBehaviours: ['slow-reader', 'avoids-reading', 'always-late', 'cant-follow-instructions'],
    relatedStrategies: ['extra-time', 'colour-coded-calendars', 'easy-read', 'mindmaps'],
    faqs: [
      {
        question: 'How many people have dyslexia?',
        answer: 'It is estimated that around 10% of the population has dyslexia, with about 4% severely affected.',
      },
      {
        question: 'Can dyslexia be cured?',
        answer: 'Dyslexia is a lifelong condition, but with the right support and strategies, people with dyslexia can be very successful.',
      },
      {
        question: 'Is dyslexia related to intelligence?',
        answer: 'No. Dyslexia is not related to intelligence. Many highly intelligent and successful people have dyslexia.',
      },
    ],
    resources: [
      { title: 'British Dyslexia Association', url: 'https://www.bdadyslexia.org.uk', type: 'webpage' },
      { title: 'Dyslexia Action', url: 'https://dyslexiaaction.org.uk', type: 'webpage' },
    ],
  },
  {
    id: 'autism',
    title: 'Autism',
    shortDescription: 'A lifelong developmental condition affecting how people communicate and interact with the world.',
    whatIsIt: `Autism is a lifelong developmental condition that affects how people communicate and interact with the world. Autism is a spectrum condition, meaning that while all autistic people share certain characteristics, being autistic affects them in different ways.

People with autism may:
- Find it hard to understand what other people are thinking or feeling
- Get very anxious about social situations
- Find it hard to make friends or prefer to be on their own
- Seem blunt, rude, or not interested in others without meaning to
- Find it hard to express how they feel`,
    whatToLookOutFor: [
      'Social awkwardness or isolation',
      'Anxiety about changes to routine',
      'Unpredictable reactions',
      'Unusual reactions to touch, sound, or lighting',
      'Misunderstanding sarcasm, banter, or figurative language',
      'Avoiding or unusual eye contact',
      'Being pedantic about rules',
      'Special or obsessive interests',
    ],
    whatToDo: [
      'Maintain predictable environment and routine',
      'Give time to calm down when anxious',
      'Use visual supports',
      'Avoid sarcasm and banter',
      'Be patient, allow time to process information',
      'Give clear, short directions',
      'Inform about changes to routine in advance',
    ],
    relatedBehaviours: ['misunderstands-banter', 'unusual-eye-contact', 'anxious-about-changes', 'pedantic-about-rules'],
    relatedStrategies: ['visual-supports', 'predictable-routine', 'avoid-banter', 'clear-directions'],
    faqs: [
      {
        question: 'How many people have autism?',
        answer: 'It is estimated that around 1 in 100 people are on the autism spectrum.',
      },
      {
        question: 'Does autism affect everyone in the same way?',
        answer: 'No. Autism is a spectrum condition, meaning it affects people in different ways. Some people need little or no support, while others may need help from a parent or carer every day.',
      },
      {
        question: 'What is the difference between autism and Asperger syndrome?',
        answer: 'Asperger syndrome is a form of autism. People with Asperger syndrome are often of average or above-average intelligence and may have fewer issues with speech but may still struggle with understanding and processing language.',
      },
    ],
    resources: [
      { title: 'National Autistic Society', url: 'https://www.autism.org.uk', type: 'webpage' },
      { title: 'Autism: A guide for criminal justice professionals', url: 'https://www.autism.org.uk/cjs', type: 'document' },
    ],
  },
  {
    id: 'adhd',
    title: 'ADHD',
    shortDescription: 'Attention Deficit Hyperactivity Disorder affects attention, impulse control, and activity levels.',
    whatIsIt: `ADHD (Attention Deficit Hyperactivity Disorder) is a condition that affects attention, impulse control, and activity levels. It is not a sign of lower intelligence or a lack of effort.

People with ADHD may:
- Have difficulty concentrating on tasks
- Be easily distracted
- Act impulsively without thinking
- Have difficulty sitting still
- Struggle with organisation and time management`,
    whatToLookOutFor: [
      'Difficulty maintaining attention',
      'Easily distracted by surroundings',
      'Fidgeting or restlessness',
      'Acting without thinking',
      'Difficulty following instructions',
      'Poor time management',
      'Disorganisation',
    ],
    whatToDo: [
      'Break tasks into smaller steps',
      'Give clear, short instructions',
      'Minimise distractions',
      'Allow movement breaks',
      'Use visual reminders and checklists',
      'Be patient with repetition',
      'Provide structure and routine',
    ],
    relatedBehaviours: ['cant-concentrate', 'always-late', 'cant-follow-instructions'],
    relatedStrategies: ['extra-time', 'clear-directions', 'visual-supports'],
  },
  {
    id: 'dyspraxia',
    title: 'Dyspraxia',
    shortDescription: 'A condition affecting physical coordination, planning, and organisation.',
    whatIsIt: `Dyspraxia (also known as Developmental Coordination Disorder) is a condition that affects physical coordination, planning, and organisation of movements.

People with dyspraxia may:
- Have difficulty with coordination and balance
- Struggle with fine motor skills like handwriting
- Have difficulty planning and organising tasks
- Take longer to get dressed or learn new physical skills
- Have speech difficulties`,
    whatToLookOutFor: [
      'Clumsy movements',
      'Difficulty with handwriting',
      'Problems with balance',
      'Difficulty organising thoughts',
      'Speech that is hard to understand',
      'Dropping things frequently',
      'Bumping into furniture',
    ],
    whatToDo: [
      'Provide uncluttered environment',
      'Allow extra time for physical tasks',
      'Use flowcharts for task sequences',
      'Reduce the need to carry multiple items',
      'Provide armrests for support',
      'Use trays to organise work',
      'Extra training on equipment',
    ],
    relatedBehaviours: ['drops-things', 'messy-handwriting', 'bumps-into-furniture'],
    relatedStrategies: ['extra-time', 'flowcharts', 'visual-supports'],
  },
];

export function getDifficulty(id: string): Difficulty | undefined {
  return difficulties.find(d => d.id === id);
}
