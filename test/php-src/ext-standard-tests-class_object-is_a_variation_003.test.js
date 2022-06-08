// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/is_a_variation_003.phpt
  it("Test is_a() function : usage variations  - case sensitivity", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing is_a() : usage variations ***\\n\";\nclass caseSensitivityTest {}\nclass caseSensitivityTestChild extends caseSensitivityTest {}\nvar_dump(is_a(new caseSensitivityTestChild, 'caseSensitivityTEST'));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
