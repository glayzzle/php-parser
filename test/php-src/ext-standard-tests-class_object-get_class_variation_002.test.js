// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_class_variation_002.phpt
  it("Test get_class() function : usage variations  - ensure class name case is preserved.", function () {
    expect(parser.parseCode("<?php\nclass caseSensitivityTest {}\nvar_dump(get_class(new casesensitivitytest));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
