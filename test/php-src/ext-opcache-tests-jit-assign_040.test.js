// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_040.phpt
  it("JIT ASSIGN: Typed reference error with return value", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public string $x;\n}\nfunction test() {\n    $test = new Test;\n    $test->x = \"\";\n    $r =& $test->x;\n    +($r = $y);\n}\ntry {\n    test();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}")).toMatchSnapshot();
  });
});
