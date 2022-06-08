// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_019.phpt
  it("JIT INC: 019", function () {
    expect(parser.parseCode("<?php\nfunction bar($b) {\n    if ($b) {\n        $a = 1;\n    } else {\n        $a = 2;\n    }\n    isset($a);\n    var_dump($a++);\n    return $a;\n}\nvar_dump(bar(0));\n?>")).toMatchSnapshot();
  });
});
