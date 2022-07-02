// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_007.phpt
  it("Foreach by reference and inserting new element when we are already at the end", function () {
    expect(parser.parseCode("<?php\n$a = [1];\nforeach($a as &$v) {\n    echo \"$v\\n\";\n    $a[1]=2;\n}\n?>")).toMatchSnapshot();
  });
});
