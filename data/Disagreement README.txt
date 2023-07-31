Disagreement data readme.
If you use these data please cite:

“Why Don't We Agree? Evidence from a Social Network of Investors”
J.Anthony Cookson and Marina Niessner, Journal of Finance Vol 75, No 1 (February 2020), pp. 173-228,

which develops, validates, and uses the disagreement measures in this file.

Data Structure:
Based on messages posted on https://stocktwits.com/ between January 2010 and December 2018. 
Observations are at the firm-day level for firm i that is mentioned in a tweet on StockTwits on date t.

Format: We have shared the data in three different formats.
The file CooksonNiessner2020_Disagree.txt is a tab delimited text file with the following fields
The file CooksonNiessner2020_Disagree.dta is a data file in Stata 13 with the following fields
The file CooksonNiessner2020.RData is an R Workspace pre-loaded with an object "dis" containing the following fields.

Data Fields:
permno = PERMNO firm classifier 
date = date of the observation. For messages to be counted towards date t. They had to be posted between 4pmEST on date t-1 and 4pmEST on date t. 
dis_all = disagreement among all investors on date t. 
dis_within_group = average disagreement among investors with the same investment approach (Fundamental, Technical, Value, Momentum, Growth) on date t. 
dis_across_group = disagreement among investors with different investment approach (Fundamental, Technical, Value, Momentum, Growth) on date t.

Important Notes: 

1) These disagreement measures are all computed on a standard deviation scale.  For exact definitions of the disagreement measures refer to the above paper.

2) The sample period used in “Why Don't We Agree? Evidence from a Social Network of Investors” is January 2013 - September 2014. We extended the sample frame by employing the Maximum Entropy classification based on the training sample in our original paper to classify the remaining messages outside of our sample frame.  In unreported results, we observe that the findings in the paper are similar using the full sample posted here (January 2010 - December 2018).
