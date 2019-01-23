var parser = require("./main");

/**
 * Check precedence by using parenthesis on node B
 */
var checkPrecedence = function(a, b) {
  if (!a || !b)
    return false;
  for (var k in b) {
    if (k === 'parenthesizedExpression') continue;
    if (b.hasOwnProperty(k)) {
      if (!a.hasOwnProperty(k))
        return false;
      if (typeof b[k] === "object") {
        checkPrecedence(a[k], b[k]);
      } else {
        expect(a[k]).toEqual(b[k]);
      }
    }
  }
  return true;
};

var shouldBeSame = function(a, b) {
  var ast = parser.parseEval([
    a + ";",
    b + ";"
  ].join("\n"));
  let result = checkPrecedence(ast.children[0], ast.children[1]);
  if (!result) {
    console.log("Parsed :", ast.children[0]);
    console.log("Expected :", ast.children[1]);
  }
  expect(result).toBeTruthy();
};

// START TESTS HERE
describe("Test precedence", function() {
  it("test *", function() {
    shouldBeSame("5 * 3 - 2", "(5 * 3) - 2");
    shouldBeSame("2 - 5 * 3", "2 - (5 * 3)");
  });
  it("test /", function() {
    shouldBeSame("5 / 3 + 2", "(5 / 3) + 2");
    shouldBeSame("5 + 3 / 2", "5 + (3 / 2)");
  });
  it("test %", function() {
    shouldBeSame("5 % 3 . 2", "(5 % 3) . 2");
  });
  it("test instanceof", function() {
    shouldBeSame("$a instanceof $b && $c", "($a instanceof $b) && $c");
  });
  it("test <<", function() {
    shouldBeSame("1 + 3 << 5", "(1 + 3) << 5");
  });
  it("test ==", function() {
    shouldBeSame("1 + 5 == 3", "(1 + 5 ) == 3");
  });
  it("test &", function() {
    shouldBeSame("1 == 2 & 3", "(1 == 2) & 3");
  });
  it("test ^", function() {
    shouldBeSame("1 & 2 ^ 3", "(1 & 2) ^ 3");
  });
  it("test |", function() {
    shouldBeSame("1 ^ 2 | 3", "(1 ^ 2) | 3");
  });
  it("test &&", function() {
    shouldBeSame("1 | 2 && 3", "(1 | 2) && 3");
  });
  it("test ||", function() {
    shouldBeSame("1 && 2 || 3", "(1 && 2) || 3");
  });
  it("test ??", function() {
    shouldBeSame("1 || 2 ?? 3", "(1 || 2) ?? 3");
  });
  it("test ?:", function() {
    shouldBeSame("1 ?? 2 ? 3 : 5", "(1 ?? 2) ? 3 : 5");
    shouldBeSame("1 and 2 ? 3 : 5", "1 and (2 ? 3 : 5)");
  });
  it("test =", function() {
    shouldBeSame("5 + $a = 1", "5 + ($a = 1)");
    shouldBeSame("5 XOR $a += 1", "5 XOR ($a += 1)");
  });
  it("test OR", function() {
    shouldBeSame("5 XOR 4 OR 3", "(5 XOR 4) OR 3");
    shouldBeSame("5 OR 4 XOR 3", "5 OR (4 XOR 3)");
  });
  it("test XOR", function() {
    shouldBeSame("5 AND 4 XOR 3", "(5 AND 4) XOR 3");
    shouldBeSame("5 XOR 4 AND 3", "5 XOR (4 AND 3)");
  });
  it("test AND", function() {
    shouldBeSame("5 + 4 AND 3", "(5 + 4) AND 3");
    shouldBeSame("5 AND 4 + 3", "5 AND (4 + 3)");
  });
  it("test unary : !", function() {
    shouldBeSame("!$a instanceof $b", "(!$a) instanceof $b");
    shouldBeSame("!$a + $b instanceof $c", "(!$a) + ($b instanceof $c)");
    shouldBeSame("6 + !4 + 5", "6 + (!4) + 5");
    shouldBeSame("if($a && !$b) {}", "if($a && (!$b)) {}");
  });
  it("test concat", function() {
    shouldBeSame('"a"."b"."c"."d"', '((("a"."b")."c")."d")');
  });
  it("test retif", function() {
    shouldBeSame("$a ? 1 : $b ? 2 : $c ? 3 : 4", "(($a ? 1 : $b) ? 2 : $c) ? 3 : 4");
  });
  it("test + / *", function() {
    shouldBeSame("1 + 2 * 3", "1 + (2 * 3)");
  });
  // https://github.com/glayzzle/php-parser/issues/81
  it("test assign with and", function() {
    shouldBeSame("$a and $b = $c and $d", "($a and ($b = $c)) and $d");
  });
  it("test assign list", function() {
    shouldBeSame("$a = $b = $c", "($a = ($b = $c))");
  });
  it("test assign with &&", function() {
    shouldBeSame("$a && $b = $c && $d", "$a && ($b = ($c && $d))");
  });
  it("test static lookup offsets", function() {
    shouldBeSame("(Foo::$bar)['baz']();", "Foo::$bar['baz']();");
  });
  it("test silent node / bin", function() {
    shouldBeSame("@foo() || @foo();", "(@foo()) || (@foo());");
  });
  it("test silent node / div", function() {
    shouldBeSame("@$i / 0;", "@($i) / 0;");
  });
  it("test cast", function() {
    shouldBeSame("$a = (string)$b . $c", "$a = ((string)$b) . $c");
    shouldBeSame("$a = (string)$b->foo . $c", "$a = ((string)$b->foo) . $c");
    shouldBeSame("(bool) $var ? 1 : 2;", "((bool)$var) ? 1 : 2;");
  });
});
