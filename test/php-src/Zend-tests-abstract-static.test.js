// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/abstract-static.phpt
  it("Test for abstract static classes", function () {
    expect(parser.parseCode("<?php\nabstract class TestClass\n{\n    abstract static public function getName();\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
