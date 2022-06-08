// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_013.phpt
  it("array_push() function precerve foreach by reference iterator pointer", function () {
    expect(parser.parseCode("<?php\n$a = [1,2,3];\nforeach($a as &$v) {\n    echo \"$v\\n\";\n    if ($v == 3) {\n        array_push($a, 4);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
