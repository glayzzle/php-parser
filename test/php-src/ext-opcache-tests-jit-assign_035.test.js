// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_035.phpt
  it("JIT ASSIGN: Segfault & memleak if no RC info", function () {
    expect(parser.parseCode("<?php\nclass A {\n  public function test() {\n    $closure = function() { return \"string\"; };\n    $arr = [\n      'a' => $closure(),\n      'b' => [$closure() => [],],\n     ];\n    $x = $arr;\n    unset($x['b'][$closure()]['d']);\n    $x = $arr;\n    $x['a'] = $closure();\n    return \"okey\";\n  }\n}\n$a = new A();\necho $a->test();\n?>")).toMatchSnapshot();
  });
});
