// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/redundant_types/duplicate_class_alias_type_runtime.phpt
  it("Duplicate class alias type at runtime", function () {
    expect(parser.parseCode("<?php\nclass A {}\nclass_alias('A', 'B');\nfunction foo(): A&B {}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
