// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/defined_001.phpt
  it("JIT DEFINED: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo($i) {\n    $a = defined(\"X\");\n    $b = defined(\"X\");\n    if (defined(\"X\")) {\n        $c = 1;\n    } else {\n        $c = 0;\n    }\n    if (!defined(\"X\")) {\n        $d = 0;\n    } else {\n        $d = 1;\n    }\n    if ($a || $b || $c || $d) {\n        die(\"Error on $i-th iteration\\n\");\n    }\n}\nfor ($i = 0; $i < 10000; $i++) {\n    foo($i);\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
