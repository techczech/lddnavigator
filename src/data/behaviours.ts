export interface Behaviour {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  strategies: string[];
  relatedDifficulties: string[];
}

export const behaviours: Behaviour[] = [
  {
    id: 'always-late',
    title: 'Always late',
    description: `Your client is always late for meetings no matter how important. Sometimes you feel like the client does not respect your time or does not care. You have told them not to be late, but they always are.

Your client may have problems with reading notes, sequencing, understanding time or following instructions.

Chronic lateness could be a sign of dyslexia, dyspraxia or ADHD. Many people with these difficulties find organisation a real challenge. They may even have problems with telling time. Written instructions may not be helpful because they may get lost. Or the person may just find them hard to read.`,
    difficulty: `Your client may have problems with reading notes, sequencing, understanding time or following instructions. This could be a sign of dyslexia, dyspraxia or ADHD.`,
    strategies: ['colour-coded-calendars', 'extra-time', 'visual-supports'],
    relatedDifficulties: ['dyslexia', 'dyspraxia', 'adhd'],
  },
  {
    id: 'slow-reader',
    title: 'Slow reader',
    description: `Your client seems to take a really long time to read even short texts. It may almost seem that they are dragging it out. When they read something out loud they are hesitant and stumble over words. Sometimes they may even be so slow that they forget what the sentence is about by the time they get to the end.

One of the things that affects the speed of reading is dyslexia. Because individual letters and words take a long time to process, reading a long text is difficult. Sometimes a dyslexic person will have even trouble reading signs in the street unless they stop and concentrate.

Not all slow readers are dyslexic but most dyslexic readers are slow readers. This has a huge impact on their ability to access long texts such as policies and detailed instructions.`,
    difficulty: `Dyslexia affects the speed of processing text. Because individual letters and words take a long time to process, reading a long text is difficult.`,
    strategies: ['extra-time', 'easy-read', 'audio-alternatives'],
    relatedDifficulties: ['dyslexia'],
  },
  {
    id: 'avoids-reading',
    title: 'Avoids reading',
    description: `Your client seems to do everything possible to avoid reading. They will want to take any text away to avoid reading it in front of you. They will ask a lot of questions. Often they may pretend that they have read the text but in fact they have not. This can lead to them signing documents that they have either not read or not understood.

Reading difficulties such as dyslexia don't just make reading hard, they make it really stressful. A person with dyslexia is often embarrassed of their difficulty because reading is incorrectly linked to intelligence.

Because of the emotional toll reading difficulties take, many dyslexic people have developed sophisticated coping strategies that include avoidance.`,
    difficulty: `Reading difficulties don't just make reading hard, they make it stressful. A person with dyslexia is often embarrassed because reading is incorrectly linked to intelligence.`,
    strategies: ['easy-read', 'audio-alternatives', 'extra-time', 'colour-coded-text'],
    relatedDifficulties: ['dyslexia'],
  },
  {
    id: 'cant-follow-instructions',
    title: "Can't follow instructions",
    description: `It seems your client can never do what they are told. You've told them many times but they never seem to follow the instructions. This can be with written or spoken instructions. Sometimes, it is about things to do later or things to do immediately.

People with dyslexia struggle with long chains of instructions because of limits on the speed of processing. People with a learning disability may struggle with understanding the content of what you're saying.

Someone with dyslexia is still processing the first instruction while you're already on the second one. If they had more time, they would understand perfectly.`,
    difficulty: `People with dyslexia struggle with long chains of instructions because of limits on the speed of processing. Someone with dyslexia is still processing the first instruction while you're already on the second one.`,
    strategies: ['clear-directions', 'extra-time', 'visual-supports', 'ask-to-repeat'],
    relatedDifficulties: ['dyslexia', 'adhd'],
  },
  {
    id: 'misunderstands-banter',
    title: 'Misunderstands sarcasm and banter',
    description: `A person seems to take everything literally. They don't understand that someone's just joking with them. Sometimes they will be confused by common phrases such as "apple of my eye". "Good natured" banter may be perceived as direct insult.

This may lead to unpredictable behaviour or complete incomprehension. If you say to somebody "you're a real bad one" in a friendly joking way, they may think you are saying something bad about them.

Many people with learning difficulties have trouble dealing with language that is not exactly literal. They may not understand irony, sarcasm, or metaphor. This is particularly typical of people with autism.`,
    difficulty: `Many people with autism have trouble dealing with language that is not exactly literal. They may not understand irony, sarcasm, or metaphor.`,
    strategies: ['avoid-banter', 'clear-directions'],
    relatedDifficulties: ['autism'],
  },
  {
    id: 'unusual-eye-contact',
    title: 'Unusual eye contact',
    description: `A person may avoid eye contact, maintain eye contact too much or at inappropriate moments. This may even make conversation challenging for someone who is not used to this.

Some people may even feel threatened or insulted by the wrong kind of eye contact and it may take extra effort to learn not to feel discomfort.

Eye contact is one way in which we connect emotionally and people with autism struggle with understanding other people's feelings. They have to learn the rules of eye contact as you would learn a foreign language.`,
    difficulty: `People with autism may struggle with the social rules around eye contact because they have to learn these rules explicitly rather than intuitively.`,
    strategies: ['be-patient'],
    relatedDifficulties: ['autism'],
  },
  {
    id: 'anxious-about-changes',
    title: 'Anxious about changes',
    description: `A person may be unusually anxious about even small changes to their routine or their environments. This could be large disruptions such as moving to a new environment but sometimes even small changes to schedule or routine can be very stressful.

This anxiety may manifest in small ways such as constant questioning, gestures or "self-soothing" behaviour. In more severe cases, it could lead to panic attacks or unpredictably violent behaviour.

People with autism rely on a stable, structured environment. They spend a lot of time learning the rules of their environment and will be very stressed out when you change it.`,
    difficulty: `People with autism rely on a stable, structured environment. They have to learn the rules explicitly and changes cause significant stress.`,
    strategies: ['predictable-routine', 'advance-notice'],
    relatedDifficulties: ['autism'],
  },
  {
    id: 'pedantic-about-rules',
    title: 'Pedantic about rules',
    description: `A person may come to you with what they see as even tiny infraction to a rule. They may know the "rule book" better than you and will see even a small change to a rule as a big deal.

To many people such behaviour will seem too pedantic, inflexible or even intentionally disruptive. You may even feel that such a person is trying to game the system. But that's not the case at all.

People on the autism spectrum will often rely on learning the rules to get by. They have to use rules to deal with situations where others just "instinctively" know what to do. That's why they feel that all rules are equally important.`,
    difficulty: `People on the autism spectrum rely on rules to navigate situations that others handle intuitively. All rules feel equally important to them.`,
    strategies: ['be-patient', 'clear-directions'],
    relatedDifficulties: ['autism'],
  },
  {
    id: 'cant-concentrate',
    title: "Can't concentrate",
    description: `Your client seems unable to focus on tasks. They are easily distracted by sounds, movements, or their own thoughts. They may start tasks but struggle to complete them.

This is not laziness or lack of interest. People with ADHD genuinely struggle to maintain attention, even on tasks they find interesting or important.`,
    difficulty: `ADHD affects the brain's ability to regulate attention. People with ADHD struggle to maintain focus even when they want to.`,
    strategies: ['minimise-distractions', 'break-into-steps', 'movement-breaks'],
    relatedDifficulties: ['adhd'],
  },
];

export function getBehaviour(id: string): Behaviour | undefined {
  return behaviours.find(b => b.id === id);
}
