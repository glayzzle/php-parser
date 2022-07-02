// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_087.phpt
  it("Ensure null-initialization of nullable typed static property taken by reference", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static ?int $a;\n}\n$x =& A::$a;\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
