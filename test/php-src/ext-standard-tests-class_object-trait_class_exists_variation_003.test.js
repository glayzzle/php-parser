// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/trait_class_exists_variation_003.phpt
  it("Test trait_exists() function : usage variations  - case sensitivity", function () {
    expect(parser.parseCode("<?php\ntrait caseSensitivityTest {}\nvar_dump(trait_exists('casesensitivitytest'));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
