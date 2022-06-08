// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_015.phpt
  it("array_shift() function precerve foreach by reference iterator pointer", function () {
    expect(parser.parseCode("<?php\n$a = [1,2,3,4];\nforeach($a as &$v) {\n    echo \"$v\\n\";\n    array_shift($a);\n}\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
