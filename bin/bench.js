/**

Bench to chose between Nested Arrays or Object for AST :

Array Write 4.6 ms
Object Write 5.6 ms

Array Memory 210 kb
Object Memory 696 kb

Array Read 1.8 ms
Object Read 11.8 ms

**/

var memwatch = require('memwatch-next');

function duration(text, hrTime) {
  var diff = process.hrtime(hrTime);
  diff = diff[0] * 1000000 + diff[1] / 1000;
  // console.log(text, Math.round(diff / 1000) + 'ms');
  return Math.round(diff / 1000);
}

function runWrite(size) {
  var result = [];
  var hrTime = false;
  var test1 = [];
  var hd = false, diff = false;
  // test 1
  hd = new memwatch.HeapDiff();
  hrTime = process.hrtime();
  for(var i = 0; i < size; i++) {
    test1.push(['class', 'foo', []]);
  }
  result.push(
    duration('Array init time', hrTime)
  );
  
  diff = hd.end();
  result.push(diff.after.size_bytes - diff.before.size_bytes);

  // test 2
  test1 = [];
  hd = new memwatch.HeapDiff();
  hrTime = process.hrtime();
  for(var i = 0; i < size; i++) {
    test1.push({type: 'class', name: 'foo', meta: []});
  }
  result.push(
    duration('Object init time', hrTime)
  );
  diff = hd.end();
  result.push(diff.after.size_bytes - diff.before.size_bytes);
  return result;
}


function runRead(size) {
  var result = [];
  var arr = [
    ['class', 'foo', []]
  ];
  var obj = [
    {type: 'class', name: 'foo', meta: []}
  ];
  var ok = false;
  var hrTime = process.hrtime();  
  for(var i = 0; i < size; i++) {
    ok = arr[0][0] === 'class' && arr[0][1] === 'foo';
  }
  result.push(
    duration('Array read time', hrTime)
  );
  hrTime = process.hrtime();  
  for(var i = 0; i < size; i++) {
    ok = obj[0].type === 'class' && arr[0].name === 'foo';
  }
  result.push(
    duration('Object read time', hrTime)
  );
  return result;
}

var time = [0, 0];
var memory = [0, 0];
var size = 10;
for(var i = 0; i < size; i++) {
  var result = runWrite(20000);
  time[0] += result[0];
  time[1] += result[2];
  memory[0] += result[1];
  memory[1] += result[3];
}

console.log('Array Write', time[0] / size, 'ms');
console.log('Object Write', time[1] / size, 'ms');

console.log('Array Memory', memory[0] / size / 1024, 'kb');
console.log('Object Memory', memory[1] / size / 1024, 'kb');

time = [0, 0];
for(var i = 0; i < size; i++) {
  var result = runRead(1000000);
  time[0] += result[0];
  time[1] += result[1];
}

console.log('Array Read', time[0] / size, 'ms');
console.log('Object Read', time[1] / size, 'ms');
