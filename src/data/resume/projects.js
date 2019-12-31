const projects = [
  {
    company: 'Iterative Data Processing with Spark',
    daterange: 'December 2020',
    points: [
      'Analyzed a Twitter social graph with Spark RDD and DataFrame on Zeppelin Notebook, and implemented the PageRank algorithm to find the most influential users.',
      'Debugged the programs utilizing YARN & Spark UI and identified performance bottlenecks through DAG visualization.',
      'Deployed the Spark applications to Azure Databricks and reduced the end-to-end execution time by 12% compared to Azure HDInsight.',
    ],
  },
  {
    company: 'Projects for EECS 484 Database Management Systems',
    daterange: 'January 2020 - April 2020',
    points: [
      'Designed the relational database schema for a Facebook-like service and developed a Java application for SQL executions with JDBC, to support features like user information queries, nearby event discoveries, and friend suggestions.',
      'Migrated the Facebook dataset from Oracle relational database to NoSQL for higher schema flexibility in JSON format, and translated the SQL queries to MongoDB syntax written in JavaScript.',
    ],
  },
  {
    company: 'Breast Cancer Dataset Analysis - STATS 415 Data Mining Group Project',
    daterange: 'November 2019 - December 2019',
    points: [
      'Based on "Breast Cancer Wisconsin Data Set" which recorded the characteristics of the cell nuclei, applied principal component analysis to explore the most informative combination of predictors.',
      'Compared performance of logistic regression, random forest, SVM, LDA and QDA implemented in R, and found QDA with subset selection is most effective to make a well-performed prediction for the diagnosis.',
      'Plotted ROC curve for QDA, adjusted posterior probability to control positive error rate and negative error rate.',
    ],
  },
  {
    company: 'Projects & Labs for VE 280/EECS 281 Data Structures and Algorithms',
    daterange: 'May 2019 - December 2019',
    points: [
      'Utilized inheritance and basic dynamic polymorphism to implement sorted priority queue, binary heap priority queue and pairing heap priority queue developed from templated generic code.',
      'Applied branch and bound algorithm to solve TSP problem for complete weighted graph, used MST to get the lower bound for remaining cost, and explored various heuristic approaches to achieve a nearly-optimal solution.',
      'Implemented a C++ version of the game 2048 which responded to player\'s keystrokes, and enabled customized tile values such as Unicode Emojis by reading from files provided by the player.',
    ],
  },
  {
    company: 'Group Project for VV 471 Numerical Methods',
    daterange: 'June 2019 - August 2019',
    points: [
      'Solved a nonlinear optimization task in MATLAB to find the minimum for an objective function which integrated the exponential of polynomial function with degree 101 in the standard 3-simplex region, and proved that the local minimum was global by analysis of convexity of objective function.',
      'Applied Quasi-Newton to increase time efficiency, Gauss-Lobatto to do integration part, and line search to find out the optimum step with consideration of time-efficiency, accuracy and stability.',
    ],
  },
];

export default projects;
