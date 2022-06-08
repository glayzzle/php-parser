// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_014.phpt
  it("array_pop() function precerve foreach by reference iterator pointer", function () {
    expect(parser.parseCode("<?php\n$a = [1,2,3];\nforeach($a as &$v) {\n    echo \"$v\\n\";\n    if ($v == 2) {\n        array_pop($a);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
