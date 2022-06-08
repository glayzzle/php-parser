// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_016.phpt
  it("array_unshift() function precerve foreach by reference iterator pointer", function () {
    expect(parser.parseCode("<?php\n$a = [1,2,3];\nforeach($a as &$v) {\n    echo \"$v\\n\";\n    if ($v == 2) {\n        array_unshift($a, 0, 0, 0, 0, 0, 0, 0, 0);\n    }\n}\nvar_dump(count($a));\n?>")).toMatchSnapshot();
  });
});
