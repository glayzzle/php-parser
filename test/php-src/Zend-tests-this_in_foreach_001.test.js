// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/this_in_foreach_001.phpt
  it("$this in foreach", function () {
    expect(parser.parseCode("<?php\n$a = [1];\nforeach ($a as $this) {\n    var_dump($this);\n}\n?>")).toMatchSnapshot();
  });
});
