// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/012.phpt
  it("class_exists() tests", function () {
    expect(parser.parseCode("<?php\nclass foo {\n}\nvar_dump(class_exists(\"qwerty\"));\nvar_dump(class_exists(\"\"));\nvar_dump(class_exists(\"test\", false));\nvar_dump(class_exists(\"foo\", false));\nvar_dump(class_exists(\"foo\"));\nvar_dump(class_exists(\"stdClass\", false));\nvar_dump(class_exists(\"stdClass\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
