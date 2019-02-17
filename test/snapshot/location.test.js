const parser = require("../main");

describe("Test locations", function() {
  it("#230 : check location", function() {
    expect(
      parser.parseEval("$var1 + $var2 + $var3;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("#230 : check location on retif", function() {
    expect(
      parser.parseEval(
        "$var1 + $var2 ? true : $false ? $innerTrue : $innerFalse;",
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it("#230 : check location on cast", function() {
    expect(
      parser.parseEval("(string)$var1 + $var2;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("#202 : include calling argument", function() {
    expect(
      parser.parseEval("$foo->bar->baz($arg);", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("#164 : expr must include ;", function() {
    expect(
      parser.parseEval("$a = $b + 1;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("#164 : expr should avoid ?>", function() {
    expect(
      parser.parseCode("<?php $a = $b + 1 ?>", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("if/elseif/else", function() {
    expect(
      parser.parseEval(
        'if ($a > $b) echo "something"; elseif ($a < $b) echo "something"; else echo "something";',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it("if/elseif/else block", function() {
    expect(
      parser.parseEval(
        'if ($a > $b) { echo "something"; } elseif ($a < $b) { echo "something"; } else { echo "something"; }',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it("switch", function() {
    expect(
      parser.parseEval("switch ($i) {}", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("switch case", function() {
    expect(
      parser.parseEval('switch ($i) { case 0: echo "something"; break; }', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("switch default", function() {
    expect(
      parser.parseEval('switch ($i) { default: echo "something"; }', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("for", function() {
    expect(
      parser.parseEval('for ($i = 1; $i <= 10; $i++) echo "something";', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("for block", function() {
    expect(
      parser.parseEval('for ($i = 1; $i <= 10; $i++) { echo "something"; }', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("foreach", function() {
    expect(
      parser.parseEval('foreach ($arr as $value) echo "something";', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("foreach block", function() {
    expect(
      parser.parseEval('foreach ($arr as $value) { echo "something"; }', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("while", function() {
    expect(
      parser.parseEval('while(true) echo "something";', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("while block", function() {
    expect(
      parser.parseEval('while(true) { echo "something"; }', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("do", function() {
    expect(
      parser.parseEval("do { echo $i; } while(true);", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("return", function() {
    expect(
      parser.parseEval("return 1;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });

  it("break", function() {
    expect(
      parser.parseEval("break;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });

  it("continue", function() {
    expect(
      parser.parseEval("continue;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("global", function() {
    expect(
      parser.parseEval("global $a;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("static", function() {
    expect(
      parser.parseEval("static $a = 1;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("static multiple", function() {
    expect(
      parser.parseEval("static $a = 1, $b = 2, $c = 3;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("echo", function() {
    expect(
      parser.parseEval('echo "something";', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("unset", function() {
    expect(
      parser.parseEval("unset($foo);", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("declare", function() {
    expect(
      parser.parseEval("declare(ticks=1);", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("declare block", function() {
    expect(
      parser.parseEval('declare(ticks=1) { echo "something"; }', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("try", function() {
    expect(
      parser.parseEval("try new Exception();", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("goto", function() {
    expect(
      parser.parseEval("goto a;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("label", function() {
    expect(
      parser.parseEval('a: echo "something";', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("function", function() {
    expect(
      parser.parseEval('function fn() { echo "something"; }', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("class", function() {
    expect(
      parser.parseEval("class Foo {}", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("abstract class", function() {
    expect(
      parser.parseEval("abstract class Foo {}", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("final class", function() {
    expect(
      parser.parseEval("final class Foo {}", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("class (inner statement)", function() {
    expect(
      parser.parseEval("function fn() { class Foo {} }", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("abstract class (inner statement)", function() {
    expect(
      parser.parseEval("function fn() { abstract class Foo {} }", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("final class (inner statement)", function() {
    expect(
      parser.parseEval("function fn() { final class Foo {} }", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("interface", function() {
    expect(
      parser.parseEval("interface Foo {}", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("trait", function() {
    expect(
      parser.parseEval("trait Foo {}", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("namespace", function() {
    expect(
      parser.parseEval("namespace my\\name;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("namespace backets", function() {
    expect(
      parser.parseEval('namespace my\\name { echo "something"; }', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("string double quotes", function() {
    expect(
      parser.parseEval('"string";', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("string single quotes", function() {
    expect(
      parser.parseEval("'string';", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("number", function() {
    expect(
      parser.parseEval("2112;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("negative number", function() {
    expect(
      parser.parseEval("-2112;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("magic", function() {
    expect(
      parser.parseEval("__DIR__;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("ternary", function() {
    expect(
      parser.parseEval('$valid ? "yes" : "no";', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("ternary no true expression", function() {
    expect(
      parser.parseEval('$valid ?: "no";', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("variable", function() {
    expect(
      parser.parseEval("$var;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("assign", function() {
    expect(
      parser.parseEval("$var = true;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("assign mutliple", function() {
    expect(
      parser.parseEval("$var = $other = true;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("unary", function() {
    expect(
      parser.parseEval("!$var;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("pre", function() {
    expect(
      parser.parseEval("++$var;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("post", function() {
    expect(
      parser.parseEval("$var++;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("yield", function() {
    expect(
      parser.parseEval("yield $var;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("yield from", function() {
    expect(
      parser.parseEval("yield from from();", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("bin", function() {
    expect(
      parser.parseEval("$var = $var + 100;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("array", function() {
    expect(
      parser.parseEval("array(1, 2, 3);", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("array nested", function() {
    expect(
      parser.parseEval("array(array(1, 2, 3));", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("array short form", function() {
    expect(
      parser.parseEval("[1, 2, 3];", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("array short form nested", function() {
    expect(
      parser.parseEval("[[1, 2, 3]];", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("clone", function() {
    expect(
      parser.parseEval("clone $var;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("new", function() {
    expect(
      parser.parseEval("new Foo();", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("new anonymous class", function() {
    expect(
      parser.parseEval("$var = new class {};", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("eval", function() {
    expect(
      parser.parseEval('eval("code");', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("exit", function() {
    expect(
      parser.parseEval("exit(1);", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("print", function() {
    expect(
      parser.parseEval('print "something";', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("include", function() {
    expect(
      parser.parseEval('include "something";', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("isset", function() {
    expect(
      parser.parseEval("$var = isset($var);", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("empty", function() {
    expect(
      parser.parseEval("$var = empty($var);", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("silent", function() {
    expect(
      parser.parseEval("$var = @call();", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("variadic", function() {
    expect(
      parser.parseEval("call(...$var);", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("try/catch/finally", function() {
    expect(
      parser.parseEval("try {} catch (Exception $e) {} finally {}", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("nowdoc", function() {
    expect(
      parser.parseEval(
        `<<<'EOD'
Text
EOD;`,
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it("nowdoc assign", function() {
    expect(
      parser.parseEval(
        `$var = <<<'EOD'
Text
EOD;`,
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it("encapsed heredoc", function() {
    expect(
      parser.parseEval(
        `<<<EOD
Text
EOD;`,
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it("encapsed heredoc assign", function() {
    expect(
      parser.parseEval(
        `$var = <<<EOD
Text
EOD;`,
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it("encapsed shell", function() {
    expect(
      parser.parseEval("$var = `command`;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("encapsed shell multiline", function() {
    expect(
      parser.parseEval(
        `$var = \`
command;
command;
command;
\`;`,
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it("encapsed string", function() {
    expect(
      parser.parseEval('"string $var string";', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("encapsed string assign", function() {
    expect(
      parser.parseEval('$var = "string $var string";', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("encapsed string multiline", function() {
    expect(
      parser.parseEval(
        `$var = "string
$var
string";`,
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it("list", function() {
    expect(
      parser.parseEval("list($a, $b, $c) = $var;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("list short form", function() {
    expect(
      parser.parseEval("[$a, $b, $c] = $var;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("traituse", function() {
    expect(
      parser.parseEval("class Foo { use Hello; }", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("traituse multiple", function() {
    expect(
      parser.parseEval("class Foo { use Hello, World; }", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("traituse adaptations", function() {
    expect(
      parser.parseEval(
        "class Foo { use A, B { B::smallTalk insteadof A;  B::bigTalk as talk; sayHello as protected; sayHello as private myPrivateHello; } }",
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it("method", function() {
    expect(
      parser.parseEval("class Foo { function method() {} }", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("method (public)", function() {
    expect(
      parser.parseEval("class Foo { public function method() {} }", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("cast", function() {
    expect(
      parser.parseEval('$var = (int) "2112"', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("retif", function() {
    expect(
      parser.parseEval("$var = $var ? true : false;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("retif nested", function() {
    expect(
      parser.parseEval(
        "$var = ($one ? true : false) ? ($two ? true : false) : ($three ? true : false);",
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it("parameter", function() {
    expect(
      parser.parseEval("function fn(?int $foo = 2112) {}", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("bin", function() {
    expect(
      parser.parseEval("$var + 2112;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("bin nested", function() {
    expect(
      parser.parseEval("$var + 2112 + $var;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("bin nested (2)", function() {
    expect(
      parser.parseEval("$var + $var + 2112;", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("silent", function() {
    expect(
      parser.parseEval("@call();", {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("conststatement", function() {
    expect(
      parser.parseEval('const CONSTANT = "Hello world!";', {
        ast: {
          withPositions: true,
          withSource: true
        }
      })
    ).toMatchSnapshot();
  });
  it("conststatement multiple", function() {
    expect(
      parser.parseEval(
        'const CONSTANT = "Hello world!", OTHER_CONSTANT = "Other hello world!";',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it("declare directive", function() {
    expect(parser.parseEval("declare (strict_types=1);")).toMatchSnapshot();
  });
  it("declare directive (multiple)", function() {
    expect(parser.parseEval("declare (A='B', C='D') { }")).toMatchSnapshot();
  });
  it("propertylookup", function() {
    expect(
      parser.parseEval(
        `
        $var = $var
          // Comment
          ->each() // Comment
          // Comment
          ->map() // Comment
          // Comment
          ->first() // Comment
          // Comment
          ->dump();
        `,
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it("staticlookup", function() {
    expect(
      parser.parseEval(
        `
        $var = $var
          // Comment
          ::each() // Comment
          // Comment
          ::map() // Comment
          // Comment
          ::first() // Comment
          // Comment
          ::dump();
        `,
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it("offsetlookup", function() {
    expect(
      parser.parseEval(
        `
        $var = $var
          // Comment
          [ 'foo' ] // Comment
          // Comment
          ['bar'] // Comment
          // Comment
          ['baz'] // Comment
          // Comment
          ['qqq'];
        `,
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
});
