function processArray(array, process, finish, timeout, calls) {
  calls = calls || 1;
  timeout = timeout || 25;

  var todo = array.concat();

  setTimeout(function () {
    for (var i = 0; i < calls; i++) {
      process(todo.shift());

      if (todo.length < 1) {
        break;
      }
    }

    if (todo.length > 0) {
      setTimeout(arguments.callee, 25);
    } else {
      finish();
    }
  }, timeout);
}

module.exports = processArray;
