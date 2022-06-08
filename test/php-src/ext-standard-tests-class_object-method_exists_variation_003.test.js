// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/method_exists_variation_003.phpt
  it("Test method_exists() function : variation - Case sensitivity", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing method_exists() : variation ***\\n\";\nClass caseSensitivityTest {\n    public function myMethod() {}\n}\nvar_dump(method_exists(new casesensitivitytest, 'myMetHOD'));\nvar_dump(method_exists('casesensiTivitytest', 'myMetHOD'));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
