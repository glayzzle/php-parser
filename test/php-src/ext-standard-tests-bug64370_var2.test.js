// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/bug64370_var2.phpt
  it("Test bug #64370 sequential microtime(true) calls", function () {
    expect(parser.parseCode("<?php\n$i = 0;\nwhile(100000 > $i++) {\n    $m0 = microtime(true);\n    $m1 = microtime(true);\n    $d = $m1 - $m0;\n    /*echo \"$d\\n\";*/\n    if ($d < 0) {\n        die(\"failed in {$i}th iteration\");\n    }\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
