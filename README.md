<h1>Calculate Taxes Application</h1>

This application received, through CLI, a list of stock operations, one line at a time, then return how much taxes which operation will cost. You can use the input.txt to test it.

<h2>How it works:</h2>

Stock operations can be of two types, buy and sell. The percentage amount to pay is 20% over the profits received by operation. But only if it's don't have any losses in previous operations, so we need to use this on the calcule, and the profits needs to be greater then 20.000R$

**To run locally**

You first need to have nodeJS installed, then get inside the **app** folder and type: **npm run dev**

Once in CLI, you only need to paste our operations and get the results

**To run with Docker**

Build the image first: **docker build . -t my-taxes-app**

Then run the container: **docker run -t -i --rm tax-1.0.0 bash**

Once inside the container, type: **npm run dev**

Now you can paste our operations and get the results =D

