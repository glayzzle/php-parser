// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/get_class_methods_variation_002.phpt
  it("Test get_class_methods() function : usage variations  - case sensitivity", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_class_methods() : usage variations ***\\n\";\nclass caseSensitivityTest {\n    function MyMeThOd() {}\n}\nvar_dump( get_class_methods('CasesensitivitytesT') );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
