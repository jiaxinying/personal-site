// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'R',
    competency: 4,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Scala',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'HTML',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'PyTorch',
    competency: 5,
    category: ['Machine Learning'],
  },
  {
    title: 'NumPy',
    competency: 5,
    category: ['Data Science'],
  },
  {
    title: 'NLTK',
    competency: 4,
    category: ['Machine Learning'],
  },
  {
    title: 'NetworkX',
    competency: 5,
    category: [],
  },
  {
    title: 'scikit-learn',
    competency: 5,
    category: ['Machine Learning'],
  },
  {
    title: 'TensorFlow',
    competency: 3,
    category: ['Machine Learning'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Jupyter Notebook',
    competency: 4,
    category: [],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'OpenCV',
    competency: 2,
    category: ['Machine Learning'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'SQL*Plus',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Spark',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: [],
  },
  {
    title: 'Git',
    competency: 4,
    category: [],
  },
  {
    title: 'AWS',
    competency: 3,
    category: [],
  },
  {
    title: 'Azure',
    competency: 3,
    category: [],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'JavaScript',
    competency: 2,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
