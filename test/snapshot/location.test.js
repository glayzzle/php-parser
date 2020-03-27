const parser = require("../main");

describe("Test locations", function () {
  it.each([
    ["#230 : check location", "$var1 + $var2 + $var3;"],
    [
      "#230 : check location on retif",
      "$var1 + $var2 ? true : $false ? $innerTrue : $innerFalse;",
    ],
    ["#230 : check location on cast", "(string)$var1 + $var2;"],
    ["#202 : include calling argument", "$foo->bar->baz($arg);"],
    ["#164 : expr must include ;", "$a = $b + 1;"],
    [
      "if/elseif/else",
      'if ($a > $b) echo "something"; elseif ($a < $b) echo "something"; else echo "something";',
    ],
    [
      "if/elseif/else block",
      'if ($a > $b) { echo "something"; } elseif ($a < $b) { echo "something"; } else { echo "something"; }',
    ],
    ["switch", "switch ($i) {}"],
    ["switch case", 'switch ($i) { case 0: echo "something"; break; }'],
    ["switch default", 'switch ($i) { default: echo "something"; }'],
    ["for", 'for ($i = 1; $i <= 10; $i++) echo "something";'],
    ["for block", 'for ($i = 1; $i <= 10; $i++) { echo "something"; }'],
    ["foreach", 'foreach ($arr as $value) echo "something";'],
    ["foreach block", 'foreach ($arr as $value) { echo "something"; }'],
    ["while", 'while(true) echo "something";'],
    ["while block", 'while(true) { echo "something"; }'],
    ["do", "do { echo $i; } while(true);"],
    ["return", "return 1;"],
    ["break", "break;"],

    ["continue", "continue;"],
    ["global", "global $a;"],
    ["static", "static $a = 1;"],
    ["static multiple", "static $a = 1, $b = 2, $c = 3;"],
    ["echo", 'echo "something";'],
    ["unset", "unset($foo);"],
    ["declare", "declare(ticks=1);"],
    ["declare block", 'declare(ticks=1) { echo "something"; }'],
    ["try", "try new Exception();"],
    ["goto", "goto a;"],
    ["goto #2", "goto longName;"],
    ["label", 'a: echo "something";'],
    ["label #2", 'longName: echo "something";'],
    ["function", 'function foo() { echo "something"; }'],
    ["class", "class Foo {}"],
    ["abstract class", "abstract class Foo {}"],
    ["final class", "final class Foo {}"],
    ["class (inner statement)", "function foo() { class Foo {} }"],
    [
      "abstract class (inner statement)",
      "function foo() { abstract class Foo {} }",
    ],
    ["final class (inner statement)", "function foo() { final class Foo {} }"],
    ["interface", "interface Foo {}"],
    ["trait", "trait Foo {}"],
    ["namespace", "namespace my\\name;"],
    ["namespace backets", 'namespace my\\name { echo "something"; }'],
    ["string double quotes", '"string";'],
    ["string single quotes", "'string';"],
    ["number", "2112;"],
    ["negative number", "-2112;"],
    ["magic", "__DIR__;"],
    ["ternary", '$valid ? "yes" : "no";'],
    ["ternary no true expression", '$valid ?: "no";'],
    ["variable", "$var;"],
    ["assign", "$var = true;"],
    ["assign by ref", "$var = &$var;"],
    ["assign mutliple", "$var = $other = true;"],
    ["unary", "!$var;"],
    ["pre", "++$var;"],
    ["post", "$var++;"],
    ["yield", "yield $var;"],
    ["yield from", "yield from from();"],
    ["bin", "$var = $var + 100;"],
    ["array", "array(1, 2, 3);"],
    ["array nested", "array(array(1, 2, 3));"],
    ["array short form", "[1, 2, 3];"],
    ["array short form nested", "[[1, 2, 3]];"],
    [
      "array with keys, byRef and unpack",
      `$var = [1, 'foo', 'test' => $foo, 'test' => &$foo, ...$var];`,
    ],
    ["clone", "clone $var;"],
    ["new", "new Foo();"],
    ["new anonymous class", "$var = new class {};"],
    ["eval", 'eval("code");'],
    ["exit", "exit(1);"],
    ["print", 'print "something";'],
    ["include", 'include "something";'],
    ["isset", "$var = isset($var);"],
    ["empty", "$var = empty($var);"],
    ["silent", "$var = @call();"],
    ["variadic", "call(...$var);"],
    ["try/catch/finally", "try {} catch (Exception $e) {} finally {}"],
    [
      "nowdoc",
      `<<<'EOD'
Text
EOD;`,
    ],
    [
      "nowdoc assign",
      `$var = <<<'EOD'
Text
EOD;`,
    ],
    [
      "encapsed heredoc",
      `<<<EOD
Text
EOD;`,
    ],
    [
      "encapsed heredoc assign",
      `$var = <<<EOD
Text
EOD;`,
    ],
    ["encapsed shell", "$var = `command`;"],
    [
      "encapsed shell multiline",
      `$var = \`
command;
command;
command;
\`;`,
    ],
    ["encapsed string", '"string $var string";'],
    ["encapsed string assign", '$var = "string $var string";'],
    [
      "encapsed string multiline",
      `$var = "string
$var
string";`,
    ],
    ["list", "list($a, $b, $c) = $var;"],
    ["list short form", "[$a, $b, $c] = $var;"],
    ["traituse", "class Foo { use Hello; }"],
    ["traituse multiple", "class Foo { use Hello, World; }"],
    [
      "traituse adaptations",
      "class Foo { use A, B { B::smallTalk insteadof A;  B::bigTalk as talk; sayHello as protected; sayHello as private myPrivateHello; } }",
    ],
    ["method", "class Foo { function method() {} }"],
    ["method (public)", "class Foo { public function method() {} }"],
    ["cast", '$var = (int) "2112"'],
    ["retif", "$var = $var ? true : false;"],
    [
      "retif nested",
      "$var = ($one ? true : false) ? ($two ? true : false) : ($three ? true : false);",
    ],
    ["parameter", "function foo(?int $foo = 2112) {}"],
    ["bin", "$var + 2112;"],
    ["bin nested", "$var + 2112 + $var;"],
    ["bin nested (2)", "$var + $var + 2112;"],
    ["silent", "@call();"],
    ["conststatement", 'const CONSTANT = "Hello world!";'],
    [
      "conststatement multiple",
      'const CONSTANT = "Hello world!", OTHER_CONSTANT = "Other hello world!";',
    ],
    ["declare directive", "declare (strict_types=1);"],
    ["declare directive (multiple)", "declare (A='B', C='D') { }"],
    [
      "propertylookup",
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
    ],
    [
      "staticlookup",
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
    ],
    [
      "offsetlookup",
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
    ],
    ["assign []", `$var[] = $var`],
    ["single call", `call();`],
  ])("test %s", (_, code) => {
    expect(
      parser.parseEval(code, {
        ast: {
          withPositions: true,
          withSource: true,
        },
      })
    ).toMatchSnapshot();
  });

  it("#164 : expr should avoid ?>", function () {
    expect(
      parser.parseCode("<?php $a = $b + 1 ?>", {
        ast: {
          withPositions: true,
          withSource: true,
        },
      })
    ).toMatchSnapshot();
  });
});
