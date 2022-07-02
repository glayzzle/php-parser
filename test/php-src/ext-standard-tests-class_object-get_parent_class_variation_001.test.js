// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_parent_class_variation_001.phpt
  it("Test get_parent_class() function : variation - case sensitivity", function () {
    expect(parser.parseCode("<?php\n//  Note: basic use cases in Zend/tests/010.phpt\necho \"*** Testing get_parent_class() : variation ***\\n\";\nclass caseSensitivityTest {}\nclass caseSensitivityTestChild extends caseSensitivityTest {}\nvar_dump(get_parent_class('CasesensitivitytestCHILD'));\nvar_dump(get_parent_class(new CasesensitivitytestCHILD));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
