const parser = require("./main");

/**
 * Check precedence by using parenthesis on node B
 */
function filterKey(fn, obj) {
  if (Array.isArray(obj)) {
    return obj.map((e) => filterKey(fn, e));
  }

  if (typeof obj === "object" && obj !== null) {
    return Object.keys(obj)
      .filter(fn)
      .reduce(
        (result, key) => ({
          ...result,
          [key]: filterKey(fn, obj[key]),
        }),
        {}
      );
  }

  return obj;
}

function shouldBeSame(a, b) {
  const fn = (key) => key !== "parenthesizedExpression";
  expect(filterKey(fn, parser.parseEval(a))).toEqual(
    filterKey(fn, parser.parseEval(b))
  );
}

// START TESTS HERE

describe("Test infrastructure", function () {
  it("should filter parenthesizedExpression prop", function () {
    const fn = (key) => key !== "parenthesizedExpression";
    expect(
      filterKey(fn, { foo: "bar", parenthesizedExpression: true })
    ).toEqual({ foo: "bar" });
    expect(
      filterKey(fn, { x: { foo: "bar", parenthesizedExpression: true } })
    ).toEqual({ x: { foo: "bar" } });
    expect(
      filterKey(fn, [{ foo: "bar", parenthesizedExpression: true }])
    ).toEqual([{ foo: "bar" }]);
  });
});

describe("Test precedence", function () {
  it("test *", function () {
    shouldBeSame("5 * 3 - 2", "(5 * 3) - 2");
    shouldBeSame("2 - 5 * 3", "2 - (5 * 3)");
  });
  it("test /", function () {
    shouldBeSame("5 / 3 + 2", "(5 / 3) + 2");
    shouldBeSame("5 + 3 / 2", "5 + (3 / 2)");
  });
  it("test %", function () {
    shouldBeSame("5 % 3 . 2", "(5 % 3) . 2");
  });
  it("test instanceof", function () {
    shouldBeSame("$a instanceof $b && $c", "($a instanceof $b) && $c");
  });
  it("test <<", function () {
    shouldBeSame("1 + 3 << 5", "(1 + 3) << 5");
  });
  it("test ==", function () {
    shouldBeSame("1 + 5 == 3", "(1 + 5 ) == 3");
  });
  it("test &", function () {
    shouldBeSame("1 == 2 & 3", "(1 == 2) & 3");
  });
  it("test ^", function () {
    shouldBeSame("1 & 2 ^ 3", "(1 & 2) ^ 3");
  });
  it("test |", function () {
    shouldBeSame("1 ^ 2 | 3", "(1 ^ 2) | 3");
  });
  it("test &&", function () {
    shouldBeSame("1 | 2 && 3", "(1 | 2) && 3");
  });
  it("test ||", function () {
    shouldBeSame("1 && 2 || 3", "(1 && 2) || 3");
  });
  it("test ??", function () {
    shouldBeSame("1 || 2 ?? 3", "(1 || 2) ?? 3");
  });
  it("test ?? right-associative", function () {
    shouldBeSame("1 ?? 2 ?? 3", "1 ?? (2 ?? 3)");
  });
  it("test ?? precedence", function () {
    shouldBeSame("1 ?? 2 and 3", "(1 ?? 2) and 3");
  });
  it("test ** precedence", function () {
    shouldBeSame("1 ** 2 + 3", "(1 ** 2) + 3");
  });
  it("test ** right-associative", function () {
    shouldBeSame("1 ** 2 ** 3", "1 ** (2 ** 3)");
  });
  it("test ?:", function () {
    shouldBeSame("1 ?? 2 ? 3 : 5", "(1 ?? 2) ? 3 : 5");
    shouldBeSame("1 and 2 ? 3 : 5", "1 and (2 ? 3 : 5)");
  });
  it("test =", function () {
    shouldBeSame("5 + $a = 1", "5 + ($a = 1)");
    shouldBeSame("5 XOR $a += 1", "5 XOR ($a += 1)");
  });
  it("test OR", function () {
    shouldBeSame("5 XOR 4 OR 3", "(5 XOR 4) OR 3");
    shouldBeSame("5 OR 4 XOR 3", "5 OR (4 XOR 3)");
  });
  it("test XOR", function () {
    shouldBeSame("5 AND 4 XOR 3", "(5 AND 4) XOR 3");
    shouldBeSame("5 XOR 4 AND 3", "5 XOR (4 AND 3)");
  });
  it("test AND", function () {
    shouldBeSame("5 + 4 AND 3", "(5 + 4) AND 3");
    shouldBeSame("5 AND 4 + 3", "5 AND (4 + 3)");
  });
  it("test unary : !", function () {
    shouldBeSame("!$a instanceof $b", "(!$a) instanceof $b");
    shouldBeSame("!$a + $b instanceof $c", "(!$a) + ($b instanceof $c)");
    shouldBeSame("6 + !4 + 5", "6 + (!4) + 5");
    shouldBeSame("if($a && !$b) {}", "if($a && (!$b)) {}");
  });
  it("test concat", function () {
    shouldBeSame('"a"."b"."c"."d"', '((("a"."b")."c")."d")');
  });
  it("test retif", function () {
    shouldBeSame(
      "$a ? 1 : $b ? 2 : $c ? 3 : 4",
      "(($a ? 1 : $b) ? 2 : $c) ? 3 : 4"
    );
  });
  it("test + / *", function () {
    shouldBeSame("1 + 2 * 3", "1 + (2 * 3)");
  });
  // https://github.com/glayzzle/php-parser/issues/81
  it("test assign with and", function () {
    shouldBeSame("$a and $b = $c and $d", "($a and ($b = $c)) and $d");
  });
  it("test assign list", function () {
    shouldBeSame("$a = $b = $c", "($a = ($b = $c))");
  });
  it("test assign with &&", function () {
    shouldBeSame("$a && $b = $c && $d", "$a && ($b = ($c && $d))");
  });
  it("test static lookup offsets", function () {
    shouldBeSame("(Foo::$bar)['baz']();", "Foo::$bar['baz']();");
  });
  it("test silent node / bin", function () {
    shouldBeSame("@foo() || @foo();", "(@foo()) || (@foo());");
  });
  it("test silent node / div", function () {
    shouldBeSame("@$i / 0;", "@($i) / 0;");
  });
  it("test silent node / retif", function () {
    shouldBeSame("@$var ? 1 : 2;", "(@$var) ? 1 : 2;");
  });
  it("test silent node / ret if", function () {
    shouldBeSame(
      "@$i == true ? @$foo : @$bar;",
      "@($i) == true ? @($foo) : @($bar);"
    );
  });
  it("test silent node - bugfix #355", function () {
    shouldBeSame(
      "echo 'pre' . (@$_GET['foo'] === 'bar' ? 'ok' : 'ko') . 'post'",
      "echo 'pre' . (@($_GET['foo']) === 'bar' ? 'ok' : 'ko') . 'post'"
    );
  });
  it("test silent node - bugfix #356", function () {
    shouldBeSame("@$var += 10", "@($var += 10)");
  });
  it("test silent node / cast", function () {
    shouldBeSame("@(int)$i + 1;", "@((int)$i) + 1;");
  });
  it("test silent node / property lookup", function () {
    shouldBeSame("@$foo->bar;", "@($foo)->bar;");
  });
  it("test cast", function () {
    shouldBeSame("$a = (string)$b . $c", "$a = ((string)$b) . $c");
    shouldBeSame("$a = (string)$b->foo . $c", "$a = ((string)$b->foo) . $c");
    shouldBeSame("(bool) $var ? 1 : 2;", "((bool)$var) ? 1 : 2;");
  });

  it("test unary / retif", function () {
    shouldBeSame("$a = +(+$var ? 1 : 2)", "$a = +((+$var) ? 1 : 2)");
  });
});
