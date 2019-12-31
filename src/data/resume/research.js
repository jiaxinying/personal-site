const research = [
  {
    company: 'UMich Foreseer Group',
    position: 'Research Assistant Instructed by Prof. Qiaozhu Mei',
    link: 'http://foreseer.si.umich.edu/',
    daterange: 'October 2019 - December 2020',
    points: [
      'Developed an efficient way to implement a smooth fuzzy histogram using PyTorch with parameters under the supervision of graph-level labels, which can convert node-level graph fingerprints to universal graph representations.',
      'Visualized hidden layers with TensorBoard and hyperparameters with parallel plots, and applied k-means clustering to find the graphs with similar embeddings and visualized them with NetworkX to figure out the performance bottlenecks.',
      'Designed, implemented and ran all the experiments on synthetic datasets and real-world datasets using lab\'s CUDA machines and AWS EC2, with strictly built settings to make a fair comparison of accuracy and computational cost between FF-GNN and baseline models.',
      'Wrote the first draft of Introduction, Approach and Experiment sections of the paper, and delivered an individual presentation to the research group summarizing the paper and research work.',
    ],
  },
  {
    company: 'UMich Situated Language & Embodied Dialogue Group',
    position: 'Research Assitant Instructed by Prof. Joyce Y. Chai',
    link: 'https://web.eecs.umich.edu/~chaijy/',
    daterange: 'May 2020 - January 2021',
    points: [
      'Augmented the ACT dataset by adding human-labeled bounding boxes with annotations and cleansed the data.',
      'Designed and implemented two noun grounding modules by adapting Faster RCNN networks and attention networks, to determine bounding boxes with inputs of images, captions and noun embeddings from ResNet, BERT and word2vec.',
      'Participated in running experiments to compare our verb acquisition model with a mental attention layer pre-trained from noun grounding task with baseline models.',
      'Wrote the first draft of Related Work section of the paper and came up with multiple suggestions to other parts.',
    ],
  },
];

export default research;
