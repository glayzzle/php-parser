// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/013.phpt
  it("closure binding to anonymous class", function () {
    expect(parser.parseCode("<?php\n$class = new class {};\n$foo = function() {\n    return $this;\n};\n$closure = Closure::bind($foo, $class, $class);\nvar_dump($closure());\n?>")).toMatchSnapshot();
  });
});
