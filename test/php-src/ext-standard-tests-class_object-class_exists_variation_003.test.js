// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/class_exists_variation_003.phpt
  it("Test class_exists() function : usage variations  - case sensitivity", function () {
    expect(parser.parseCode("<?php\nclass caseSensitivityTest {}\nvar_dump(class_exists('casesensitivitytest'));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
