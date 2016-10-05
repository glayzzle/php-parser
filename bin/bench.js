/**

Bench to chose between Nested Arrays or Object for AST :

Array Write 4.6 ms
Object Write 5.6 ms

Array Memory 210 kb
Object Memory 696 kb

Array Read 1.8 ms
Object Read 11.8 ms

**/

var fs = require('fs');
var memwatch = require('memwatch-next');


console.log('\n--- array vs object for storing AST :');

function duration(text, hrTime) {
  var diff = process.hrtime(hrTime);
  diff = diff[0] * 1000000 + diff[1] / 1000;
  // console.log(text, Math.round(diff / 1000) + 'ms');
  return Math.round(diff / 1000);
}

function runWrite(size) {
  if (typeof global.gc === 'function') global.gc();
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
  var result = runWrite(2000);
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
  var result = runRead(100000);
  time[0] += result[0];
  time[1] += result[1];
}

console.log('Array Read', time[0] / size, 'ms');
console.log('Object Read', time[1] / size, 'ms');



// preparing files for tests
var files = [];
var path = __dirname + '/../test/token/';
var items = fs.readdirSync(path);
for(var i = 0; i < items.length; i ++) {
  var file = items[i];
  if (file[0] != '.') {
    var stat = fs.statSync(path + file);
    if (!stat.isDirectory()) {
      files.push(
        fs.readFileSync(path + file, {
          encoding: 'binary'
        })
      );
    }
  }
}

// test FN
function consumeTokens(engine, files) {
  if (typeof global.gc === 'function') global.gc();
  var tSize = 0;
  var hd = new memwatch.HeapDiff();
  var hrstart = process.hrtime();
  for(var n = 0; n < 1000; n++) { // repeat tests to increase accuracy
    for(var i = 0; i < files.length; i++) {
      engine.lexer.setInput(files[i]);
      var EOF = engine.lexer.EOF;
      var token = engine.lexer.lex() || EOF;
      while(token != EOF) {
        token = engine.lexer.lex() || EOF;
        tSize++;
      }
    }
  }
  var  hrend = process.hrtime(hrstart);
  diff = hd.end();  
  var duration = (hrend[0] * 1000000 * 1000) + hrend[1];
  console.log('Tokens extracted      :', tSize);
  console.log('Tokens by sec (x1000) :', (Math.round(tSize * 60000 / (duration / 1000000) / 1000 / 100) / 10));
  console.log('Total duration        :', Math.round(duration / 100000) / 10, 'ms');
  console.log('Memory                : ', Math.round((diff.after.size_bytes - diff.before.size_bytes) / 1024), 'kb');
  return {
    duration: duration,
    memory: diff.after.size_bytes - diff.before.size_bytes
  };
}

// parsing tests
if (typeof global.gc === 'function') global.gc();
console.log('\n--- parsing files - actual lexer version :');
var engine = require('../main');
engine.lexer.asp_tags = true;
engine.lexer.short_tags = true;
var actual = consumeTokens(engine, files);

// test the old library version
if (typeof global.gc === 'function') global.gc();
console.log('\n--- parsing files - jison lexer version :');
engine.lexer = require('./jison-lexer');
engine.lexer.asp_tags = true;
engine.lexer.short_tags = true;
var jison = consumeTokens(engine, files);

// results
console.log('\n--- results :');
console.log('Actual version is ' + Math.round(((jison.duration / actual.duration) - 1) * 100) + '% more rapid');
console.log('Actual version use ' + Math.round((1 - (actual.memory / jison.memory)) * 100) + '% less memory');
