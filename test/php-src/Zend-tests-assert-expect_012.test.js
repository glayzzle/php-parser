// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_012.phpt
  it("test enable/disable assertions at runtime", function () {
    expect(parser.parseCode("<?php\nvar_dump((integer)ini_get(\"zend.assertions\"));\nini_set(\"zend.assertions\", 0);\nvar_dump((integer)ini_get(\"zend.assertions\"));\nassert(false);\nini_set(\"zend.assertions\", 1);\nvar_dump((integer)ini_get(\"zend.assertions\"));\nassert(true);\nvar_dump(true);\n?>")).toMatchSnapshot();
  });
});
