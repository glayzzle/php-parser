// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/property_types_early_bind.phpt
  it("Early binding should be prevented if property types cannot be checked", function () {
    expect(parser.parseCode("<?php\nclass X {}\nclass_alias('X', 'Y');\nclass A {\n    public X $prop;\n}\nclass B extends A {\n    public Y $prop;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
