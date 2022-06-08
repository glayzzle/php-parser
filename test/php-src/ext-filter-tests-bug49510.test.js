// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug49510.phpt
  it("Bug #49510\tboolean validation fails with FILTER_NULL_ON_FAILURE", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(false, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(0, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"0\", FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"off\", FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"\", FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"false\", FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"no\", FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(true, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(1, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"1\", FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"on\", FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"yes\", FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"invalid\", FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));\n?>")).toMatchSnapshot();
  });
});
