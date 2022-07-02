// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/lcg_value_basic.phpt
  it("Maths test for xapic versions of lcg_value()", function () {
    expect(parser.parseCode("<?php\necho \"MATHS test script started\\n\";\necho \"\\n lcg_value tests...\\n\";\nfor ($i = 0; $i < 100; $i++) {\n    $res = lcg_value();\n    if (!is_float($res) || $res < 0 || $res > 1) {\n        break;\n    }\n}\nif ($i != 100) {\n    echo \"FAILED\\n\";\n} else {\n    echo \"PASSED\\n\";\n}\necho \"MATHS test script completed\\n\";\n?>")).toMatchSnapshot();
  });
});
