// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object-null.phpt
  it("Test whether an object is NULL or not.", function () {
    expect(parser.parseCode("<?php\nclass Bla\n{\n}\n$b = new Bla;\nvar_dump($b != null);\nvar_dump($b == null);\nvar_dump($b !== null);\nvar_dump($b === null);\n?>")).toMatchSnapshot();
  });
});
