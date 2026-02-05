export interface Strategy {
  id: string;
  title: string;
  description: string;
  howTo: string[];
  relatedBehaviours: string[];
  relatedDifficulties: string[];
  resources?: { title: string; url?: string; type: string }[];
}

export const strategies: Strategy[] = [
  {
    id: 'colour-coded-calendars',
    title: 'Colour coded calendars',
    description: `Instead of giving someone a list of appointments, create a calendar grid and mark each time slot with a different colour.

This strategy helps people who struggle with organisation, time management, or reading to quickly understand their schedule visually.`,
    howTo: [
      'Mark recurring events with the same colour',
      'Mark events that are somehow related with the same colour',
      'Add pictures or icons to the same events',
      'Include travel time in the schedule',
      'Put two entries on the calendar: one for departure and one for appointment',
    ],
    relatedBehaviours: ['always-late', 'cant-follow-instructions'],
    relatedDifficulties: ['dyslexia', 'dyspraxia', 'adhd'],
    resources: [
      { title: 'Calendar templates', type: 'download' },
      { title: 'Organisation tips', type: 'webpage' },
    ],
  },
  {
    id: 'extra-time',
    title: 'Give extra time to process',
    description: `This strategy can be implemented in many ways. The key is to give people with processing difficulties more time to understand and respond.

Don't rush people or jump in to explain something you just said simply because a person is not responding. They may just need longer to process.`,
    howTo: [
      'Give someone more time to accomplish tasks (such as extra time in exams)',
      'Pause more frequently and for longer when giving instructions',
      "Don't bunch up your directions, make sure the person has understood each step first",
      "Don't rush people to answer questions",
      "Don't jump in to explain something you just said simply because a person is not responding",
    ],
    relatedBehaviours: ['slow-reader', 'cant-follow-instructions', 'always-late'],
    relatedDifficulties: ['dyslexia', 'adhd', 'dyspraxia'],
  },
  {
    id: 'easy-read',
    title: 'Easy read materials',
    description: `Easy read documents use simple language and pictures to make information accessible. They break down complex information into short sentences and use images to support understanding.`,
    howTo: [
      'Use short, simple sentences',
      'Use pictures or symbols with text',
      'Put one piece of information per sentence',
      'Use bullet points for lists',
      'Use large, clear fonts',
      'Leave plenty of white space',
    ],
    relatedBehaviours: ['slow-reader', 'avoids-reading', 'cant-follow-instructions'],
    relatedDifficulties: ['dyslexia', 'autism'],
  },
  {
    id: 'visual-supports',
    title: 'Visual supports',
    description: `Visual supports use images, symbols, or diagrams to communicate information. They can help people understand what is expected, what will happen, or how to complete tasks.`,
    howTo: [
      'Use symbols to mark different sections',
      'Use symbols for steps in a workflow',
      'Put symbols or pictures next to text to illustrate the key point',
      'Use flowcharts for sequences of tasks',
      'Use colour coding to differentiate types of information',
    ],
    relatedBehaviours: ['cant-follow-instructions', 'anxious-about-changes'],
    relatedDifficulties: ['dyslexia', 'autism', 'adhd'],
  },
  {
    id: 'mindmaps',
    title: 'Present lists in mindmaps',
    description: `Mindmaps are a way to break down difficult concepts. Instead of writing a long text, simply draw the key points on a piece of paper and make connections between them.

Many dyslexic readers find mindmaps useful as a way of taking notes. They are also very useful when planning to write a complicated text.`,
    howTo: [
      'Draw the main topic in the centre',
      'Add branches for each subtopic',
      'Use colours to group related ideas',
      'Add images or symbols where helpful',
      'Keep text on branches short',
    ],
    relatedBehaviours: ['avoids-reading', 'slow-reader'],
    relatedDifficulties: ['dyslexia'],
  },
  {
    id: 'audio-alternatives',
    title: 'Use audio instead of written text',
    description: `Offer an audio alternative to reading as much as possible. This will increase comprehension greatly for people who struggle with reading.`,
    howTo: [
      'Record someone reading a document',
      'Read a document out loud to someone',
      'Set up a system of people reading or recording documents for each other',
      'Use text-to-speech on the computer if available',
    ],
    relatedBehaviours: ['slow-reader', 'avoids-reading'],
    relatedDifficulties: ['dyslexia'],
  },
  {
    id: 'avoid-banter',
    title: 'Avoid sarcasm and banter',
    description: `You should avoid using banter and irony with someone on the autism spectrum. This may be hard, but it will be even harder to avoid using idioms and metaphors because you may not realise that there's anything special about them.

Pay attention over time and you will learn which parts of language are particularly confusing to each individual.`,
    howTo: [
      'Say what you mean directly',
      'Avoid irony and sarcasm',
      'Be aware that common idioms may be confusing',
      "Explain what you mean if you see confusion",
      'Learn which phrases confuse specific individuals',
    ],
    relatedBehaviours: ['misunderstands-banter'],
    relatedDifficulties: ['autism'],
  },
  {
    id: 'clear-directions',
    title: 'Give clear, short directions',
    description: `Give instructions one step at a time. Don't bunch up your directions. Check understanding before moving on to the next instruction.`,
    howTo: [
      'Give one instruction at a time',
      'Use simple, direct language',
      'Check understanding before moving on',
      'Ask the person to repeat the instructions back',
      'Write down important instructions',
    ],
    relatedBehaviours: ['cant-follow-instructions', 'misunderstands-banter', 'pedantic-about-rules'],
    relatedDifficulties: ['dyslexia', 'autism', 'adhd'],
  },
  {
    id: 'predictable-routine',
    title: 'Maintain predictable routine',
    description: `Keep the environment and routine as predictable as possible. When changes are necessary, give advance notice and explain what will happen.`,
    howTo: [
      'Keep to a regular schedule',
      'Give advance notice of any changes',
      'Explain what will happen and when',
      'Use visual schedules',
      'Prepare the person for transitions',
    ],
    relatedBehaviours: ['anxious-about-changes'],
    relatedDifficulties: ['autism'],
  },
  {
    id: 'ask-to-repeat',
    title: 'Ask to repeat instructions',
    description: `One of the most useless questions you can ask is "Do you understand?" They will probably say "yes" to please you. Instead, check for understanding by asking them to explain or repeat.`,
    howTo: [
      'Ask the person to explain what you said in their own words',
      'Ask them to repeat the instructions to somebody else',
      'Ask series of short questions such as "where do you go?" and "what do you do next?"',
      'Never just ask "do you understand?"',
    ],
    relatedBehaviours: ['cant-follow-instructions'],
    relatedDifficulties: ['dyslexia', 'adhd'],
  },
];

export function getStrategy(id: string): Strategy | undefined {
  return strategies.find(s => s.id === id);
}
