var should = require("should");
var parser = require('../src/index');

/**
 * Check precedence by using parenthesis on node B
 */
var checkPrecedence = function(a, b) {
  if (!a || !b) return false;
  if (b.kind === 'parenthesis') {
    b = b.inner;
  }
  for(var k in b) {
    if (b.hasOwnProperty(k)) {
      if (!a.hasOwnProperty(k)) return false;
      if (typeof b[k] === 'object') {
        checkPrecedence(a[k], b[k]);
      } else {
        a[k].should.be.equal(b[k]);
      }
    }
  }
  return true;
};

var shouldBeSame = function(a, b) {
  var ast = parser.parseEval([
    a + ';',
    b + ';'
  ].join('\n'));
  checkPrecedence(ast.children[0], ast.children[1]).should.be.true();
};

// START TESTS HERE
describe('Test precedence', function() {
  it('test *', function() {
    shouldBeSame('5 * 3 - 2', '(5 * 3) - 2');
    shouldBeSame('2 - 5 * 3', '2 - (5 * 3)');
  });
  it('test /', function() {
    shouldBeSame('5 / 3 + 2', '(5 / 3) + 2');
    shouldBeSame('5 + 3 / 2', '5 + (3 / 2)');
  });
  it('test %', function() {
    shouldBeSame('5 % 3 . 2', '(5 % 3) . 2');
  });
  it('test instanceof', function() {
    shouldBeSame('3 instanceof 2 * 5', '(3 instanceof 2) * 5');
  });
  it('test <<', function() {
    shouldBeSame('1 + 3 << 5', '(1 + 3) << 5');
  });
  it('test ==', function() {
    shouldBeSame('1 + 5 == 3', '(1 + 5 ) == 3');
  });
  it('test &', function() {
    shouldBeSame('1 == 2 & 3', '(1 == 2) & 3');
  });
  it('test ^', function() {
    shouldBeSame('1 & 2 ^ 3', '(1 & 2) ^ 3');
  });
  it('test |', function() {
    shouldBeSame('1 ^ 2 | 3', '(1 ^ 2) | 3;');
  });
  it('test &&', function() {
    var ast = parser.parseEval([
      '1 | 2 && 3;',
      '(1 | 2) && 3;'
    ].join('\n'));
    checkPrecedence(ast.children[0],ast.children[1]).should.be.true();
  });
  it('test ||', function() {
    var ast = parser.parseEval([
      '1 && 2 || 3;',
      '(1 && 2) || 3;'
    ].join('\n'));
    checkPrecedence(ast.children[0], ast.children[1]).should.be.true();
  });
  it('test ??', function() {
    var ast = parser.parseEval([
      '1 || 2 ?? 3;',
      '(1 || 2) ?? 3;'
    ].join('\n'));
    checkPrecedence(ast.children[0], ast.children[1]).should.be.true();
  });
  it('test ?:', function() {
    shouldBeSame('1 ?? 2 ? 3 : 5', '(1 ?? 2) ? 3 : 5');
    shouldBeSame('1 and 2 ? 3 : 5', '1 and (2 ? 3 : 5)');
  });
  it('test =', function() {
    shouldBeSame('5 + $a = 1', '5 + ($a = 1)');
    shouldBeSame('5 XOR $a += 1', '5 XOR ($a += 1)');
  });
  it('test OR', function() {
    shouldBeSame('5 XOR 4 OR 3', '(5 XOR 4) OR 3');
    shouldBeSame('5 OR 4 XOR 3', '5 OR (4 XOR 3)');
  });
  it('test XOR', function() {
    shouldBeSame('5 AND 4 XOR 3', '(5 AND 4) XOR 3');
    shouldBeSame('5 XOR 4 AND 3', '5 XOR (4 AND 3)');
  });
  it('test AND', function() {
    shouldBeSame('5 + 4 AND 3', '(5 + 4) AND 3');
    shouldBeSame('5 AND 4 + 3', '5 AND (4 + 3)');
  });
  it('test unary : !', function() {
    shouldBeSame('!4 instanceof 3', '(!4) instanceof 3');
    shouldBeSame('!4 + 5 instanceof 3', '(!4) + (5 instanceof 3)');
    shouldBeSame('6 + !4 + 5', '6 + (!4) + 5');
  });
});
