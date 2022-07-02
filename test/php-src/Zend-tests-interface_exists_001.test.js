// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/interface_exists_001.phpt
  it("Testing interface_exists()", function () {
    expect(parser.parseCode("<?php\ninterface foo {\n}\nvar_dump(interface_exists('foo'));\nvar_dump(interface_exists(1));\n?>")).toMatchSnapshot();
  });
});
