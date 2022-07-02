// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list/list_reference_004.phpt
  it("\"Reference Unpacking - Foreach\" list()", function () {
    expect(parser.parseCode("<?php\n$coords = array(array(1, 2), array(3, 4));\nforeach ($coords as [&$x, $y]) {\n    $x++;\n    $y++;\n}\nvar_dump($coords);\n?>")).toMatchSnapshot();
  });
});
