// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_028.phpt
  it("Closure 028: Trying to use lambda directly in foreach", function () {
    expect(parser.parseCode("<?php\nforeach (function(){ return 1; } as $y) {\n    var_dump($y);\n}\nprint \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
