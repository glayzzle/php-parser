// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/parent_class_name_without_parent.phpt
  it("Getting parent class name when there is no parent generates an error", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    public function f() {\n        var_dump(parent::class);\n    }\n}\nclass C {\n    use T;\n}\n(new C)->f();\n?>")).toMatchSnapshot();
  });
});
