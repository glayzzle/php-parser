// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_arguments/call_with_trailing_comma_basic.phpt
  it("Allow trailing commas in function and method calls", function () {
    expect(parser.parseCode("<?php\nfunction foo(...$args) {\n  echo __FUNCTION__ . \"\\n\";\n  var_dump($args);\n}\nfoo(\n  'function',\n  'bar',\n);\nclass Foo\n{\n  public function __construct(...$args) {\n    echo __FUNCTION__ . \"\\n\";\n    var_dump($args);\n  }\n  public function bar(...$args) {\n    echo __FUNCTION__ . \"\\n\";\n    var_dump($args);\n  }\n  public function __invoke(...$args) {\n    echo __FUNCTION__ . \"\\n\";\n    var_dump($args);\n  }\n}\n$foo = new Foo(\n  'constructor',\n  'bar',\n);\n$foo->bar(\n  'method',\n  'bar',\n);\n$foo(\n  'invoke',\n  'bar',\n);\n$bar = function(...$args) {\n  echo __FUNCTION__ . \"\\n\";\n  var_dump($args);\n};\n$bar(\n  'closure',\n  'bar',\n);\n# Make sure to hit the \"not really a function\" language constructs\nunset($foo, $bar,);\nvar_dump(isset($foo, $bar,));\n?>")).toMatchSnapshot();
  });
});
