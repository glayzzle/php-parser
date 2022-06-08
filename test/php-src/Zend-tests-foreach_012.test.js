// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_012.phpt
  it("array_walk() function precerve foreach by reference iterator pointer", function () {
    expect(parser.parseCode("<?php\n$a = [1,2,3,4,5];\nforeach($a as &$v) {\n    echo \"$v\\n\";\n    if ($v == 3) {\n        array_walk($a, function (&$x) {$x+=10;});\n    }\n}\n?>")).toMatchSnapshot();
  });
});
