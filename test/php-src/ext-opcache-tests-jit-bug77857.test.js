// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug77857.phpt
  it("Bug #77857 (Wrong result if executed with JIT)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $arr = array_fill(0, 1, 1.0);\n    $y = 0.0;\n    foreach ($arr as $v) {\n        $tmp = 1.0 * $v;\n        var_dump($tmp);\n        $y = $tmp/1.0;\n    }\n    return $y;\n}\nvar_dump(test());\n?>")).toMatchSnapshot();
  });
});
