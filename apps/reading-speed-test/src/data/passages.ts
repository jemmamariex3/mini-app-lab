export type PassageQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export type Passage = {
  id: string;
  title: string;
  text: string;
  wordCount: number;
  questions: PassageQuestion[];
};

export const passages: Passage[] = [
  {
    id: 'habit-of-reading',
    title: 'The Habit of Reading',
    text:
      'Reading is one of the most powerful habits a person can develop. It allows people to explore ideas, places, and perspectives that they might never encounter in their daily lives. Unlike short online content, books encourage deeper thinking and sustained attention. When a reader spends time with a book, they are practicing the ability to focus on one idea for an extended period of time.\n\nMany successful people credit reading as one of the key habits that helped them grow both personally and professionally. Through books, readers gain access to the knowledge and experiences of others. A biography can reveal how someone overcame challenges, while a novel can help readers understand emotions and situations different from their own.\n\nReading also strengthens the brain. Studies have shown that regular reading improves vocabulary, comprehension, and critical thinking skills. It trains the mind to process complex ideas and connect different pieces of information together.\n\nPerhaps most importantly, reading can be enjoyable. It can provide relaxation, entertainment, and a temporary escape from daily stress. Even just a few minutes of reading each day can create a meaningful habit that benefits both the mind and the imagination.',
    wordCount: 189,
    questions: [
      {
        question: 'What is one benefit of reading mentioned in the passage?',
        options: [
          'Improving memory',
          'Strengthening vocabulary and thinking skills',
          'Learning faster typing',
          'Watching movies',
        ],
        correctAnswer: 'Strengthening vocabulary and thinking skills',
      },
      {
        question: 'Why do successful people value reading?',
        options: [
          'It helps them sleep better',
          'It gives them access to the experiences and ideas of others',
          'It avoids work',
          'It shortens books',
        ],
        correctAnswer:
          'It gives them access to the experiences and ideas of others',
      },
      {
        question: 'What emotional benefit does reading provide?',
        options: [
          'Reduced imagination',
          'Permanent stress removal',
          'Relaxation and enjoyment',
          'Replaces friendships',
        ],
        correctAnswer: 'Relaxation and enjoyment',
      },
    ],
  },
  {
    id: 'why-humans-tell-stories',
    title: 'Why Humans Tell Stories',
    text:
      'Storytelling has been a part of human culture for thousands of years. Long before books and movies existed, people gathered to share stories about their experiences, beliefs, and lessons learned. These stories helped communities pass knowledge from one generation to the next.\n\nStories are powerful because they help people understand complex ideas through characters and events. When people hear a story, they often imagine themselves in the situation being described. This emotional connection makes the information easier to remember.\n\nStories also help people understand different perspectives. A story told from one character\'s point of view may reveal emotions or motivations that are not obvious at first. By following the experiences of characters, readers and listeners learn empathy and emotional awareness.\n\nIn modern times, storytelling appears in many forms, including books, movies, podcasts, and video games. Even social media posts often use storytelling techniques to capture attention and communicate ideas.\n\nAlthough technology has changed the way stories are shared, the human love for storytelling has remained the same. People continue to seek stories because they provide meaning, entertainment, and a way to connect with others.',
    wordCount: 197,
    questions: [
      {
        question: 'Why were stories important in early communities?',
        options: [
          'Only entertainment',
          'Passing knowledge between generations',
          'Replacing writing',
          'Only leaders told them',
        ],
        correctAnswer: 'Passing knowledge between generations',
      },
      {
        question: 'Why do stories help people remember information?',
        options: [
          'They contain fewer words',
          'They create emotional connections',
          'They remove ideas',
          'They are short',
        ],
        correctAnswer: 'They create emotional connections',
      },
      {
        question: 'Where does storytelling appear today?',
        options: [
          'Only books',
          'Only movies',
          'Books, movies, podcasts, video games, and social media',
          'Only video games',
        ],
        correctAnswer:
          'Books, movies, podcasts, video games, and social media',
      },
    ],
  },
  {
    id: 'how-curiosity-drives-learning',
    title: 'How Curiosity Drives Learning',
    text:
      'Curiosity is one of the most important forces behind learning. When people become curious about a topic, they naturally begin asking questions and searching for answers. This process helps the brain stay engaged and motivated.\n\nChildren often display strong curiosity. They ask questions about how things work, why events happen, and what causes different outcomes. This curiosity encourages exploration and experimentation. As people grow older, maintaining this sense of curiosity can continue to support lifelong learning.\n\nResearch has shown that curiosity improves memory and understanding. When someone feels genuinely interested in a subject, their brain becomes more active and attentive. This increased engagement helps people remember information more effectively.\n\nCuriosity also encourages creativity. When individuals explore new ideas, they often combine information in unexpected ways. This ability to connect different ideas can lead to innovative thinking and problem-solving.\n\nIn many ways, curiosity acts as a natural guide for learning. Rather than forcing people to study topics that feel uninteresting, curiosity draws attention toward subjects that spark interest and motivation.',
    wordCount: 183,
    questions: [
      {
        question: 'What role does curiosity play in learning?',
        options: [
          'Reduces motivation',
          'Encourages questions and exploration',
          'Prevents experimentation',
          'Replaces memory',
        ],
        correctAnswer: 'Encourages questions and exploration',
      },
      {
        question: 'Why do curious people remember information better?',
        options: [
          'Brain becomes more engaged and attentive',
          'They read fewer books',
          'They avoid questions',
          'They ignore ideas',
        ],
        correctAnswer: 'Brain becomes more engaged and attentive',
      },
      {
        question: 'How does curiosity support creativity?',
        options: [
          'Limits imagination',
          'Prevents ideas',
          'Helps combine ideas in new ways',
          'Avoids exploration',
        ],
        correctAnswer: 'Helps combine ideas in new ways',
      },
    ],
  },
];
