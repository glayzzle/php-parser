// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_010.phpt
  it("Closure 010: Closure calls itself", function () {
    expect(parser.parseCode("<?php\n$i = 3;\n$lambda = function ($lambda) use (&$i) {\n    if ($i==0) return;\n    echo $i--.\"\\n\";\n    $lambda($lambda);\n};\n$lambda($lambda);\necho \"$i\\n\";\n?>")).toMatchSnapshot();
  });
});
