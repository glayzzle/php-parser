// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78271.phpt
  it("Bug #78271: Invalid result of if-else", function () {
    expect(parser.parseCode("<?php\nfunction test($a, $b){\n    if ($a==10) {\n        $w=\"x\";\n    } else {\n        $w=\"y\";\n    }\n    if ($b) {\n        $d1=\"none\";\n        $d2=\"block\";\n    } else {\n        $d1=\"block\";\n        $d2=\"none\";\n    }\n    echo $d2.$b.\"\\n\";\n}\ntest(1, 1);\n?>")).toMatchSnapshot();
  });
});
