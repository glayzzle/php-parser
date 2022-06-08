// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_031.phpt
  it("Cloning stdClass", function () {
    expect(parser.parseCode("<?php\n$x[] = clone new stdclass;\n$x[] = clone new stdclass;\n$x[] = clone new stdclass;\n$x[0]->a = 1;\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
