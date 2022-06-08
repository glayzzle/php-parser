// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_005.phpt
  it("Nested foreach by reference on the same array", function () {
    expect(parser.parseCode("<?php\n$a = [1,2,3];\nforeach($a as &$x) {\n    foreach($a as &$y) {\n        echo \"$x-$y\\n\";\n        $y++;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
