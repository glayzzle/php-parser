// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/filter_null_on_failure.phpt
  it("FILTER_NULL_ON_FAILURE will give NULL on filters", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\"invalid\", FILTER_VALIDATE_BOOL, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"invalid\", FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"invalid\", FILTER_VALIDATE_INT, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"invalid\", FILTER_VALIDATE_FLOAT, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\".invalid\", FILTER_VALIDATE_DOMAIN, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"invalid\", FILTER_VALIDATE_EMAIL, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"invalid\", FILTER_VALIDATE_IP, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"invalid\", FILTER_VALIDATE_MAC, FILTER_NULL_ON_FAILURE));\nvar_dump(filter_var(\"invalid\", FILTER_VALIDATE_REGEXP, [\n    'flags' => FILTER_NULL_ON_FAILURE,\n    'options' => [\n        'regexp' => '/^valid$/'\n    ]\n]));\nvar_dump(filter_var(\"invalid\", FILTER_VALIDATE_URL, FILTER_NULL_ON_FAILURE));\n?>")).toMatchSnapshot();
  });
});
