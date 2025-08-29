# Guide to the file system
## .ipynb
1. `Data.ipynb`: used to get the comments and metadata.
2. `Dataset.ipynb`: used to get the comments and EDA of dataset.
3. `Single_example.ipynb`: shows processing of a single article and its comments. All three topic models applied and evaluated. The example is the same as mentioned in Appendix A.
4. `Noun_Phrase_Approach.ipynb`: first attempt at noun phrase approach
5. `NMF_LDA.ipynb`: first attempt at NMF
6. `EVALUATING_TOPIC_MODELS_ON_DATASET.ipynb` and the same with number 2: Evaluation code. uses the extracted topics and topic assignments in the [X_TOPICS] and [X_COMMENTS_TOPICS] folder.

## folders (X = NP, NMF, BERTOPIC)
1. `[X_TOPICS]`: Topics extracted for each article (article name in title) stored as a javascript array in json format.
2. `[X_COMMENTS_TOPICS]`: Topics id assigned to the corresponding comment index for an article (article name in title) stored as a javascript array in json format.
3. `DATASET`: The dataset consisting of 48 text files (article bodies) and 48 json files (comments and metadata for articles).
4. `Dashboard`: Scaffold for dashboard. UNUSED

## other files
1. `EXAMPLE_ARTICLE-Are We Thinking About Obesity All Wrong_.txt`: the example article body mentioned in Appendix A.
2. `Selected_articles.json` : the original list of 74 articles out of which only 48 were used.
3. `NYT canabis pot over pills readers comments.docx`: Sample dataset provided by the supervisor.
