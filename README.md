# process-array
This is a very simple module that allows for you to asynchronously loop through an array.

# Documentation
To install:
```
  npm install process-array
```
  
Require this package:
```
  var processArray = require('process-array');
```
The API for this is as follows:
```
processArray(arrayToBeProcessed, functionCalledAtEachProcess, functionCalledWhenFinished, timeBetweenLoops, amountOfCallsPerTimeout);
```
The last two inputs are optional.
timeBetweenLoops is in milliseconds, (default: 25).
amountOfCallsPerTimeout is a positive int (default: 1). This is how many indexes in the array are processed before the next timeout

A very basic example looks like:
```
  var processArray = require('process-array');
  
  var exmapleArray = [1, 2, 3, 4];
  processArray(exampleArray, function (arrayValue) {
    console.log(arrayValue); // Outputs: 1 through 4
  }, function () {
    console.log('Finished!');
  });
```
# Support
To report a bug, use the issue tracker. Feel free to create a pull request with any fixes.
