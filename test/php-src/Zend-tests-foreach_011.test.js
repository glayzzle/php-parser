// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_011.phpt
  it("sort() functions precerve foreach by reference iterator pointer", function () {
    expect(parser.parseCode("<?php\n$a = [1,2,3,4,5,0];\nforeach($a as &$v) {\n    echo \"$v\\n\";\n    if ($v == 3) {\n        rsort($a);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
