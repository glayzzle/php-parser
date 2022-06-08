// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug7733.phpt
  it("filter_var() Float exponential weird result", function () {
    expect(parser.parseCode("<?php\n$data = array(\n        'E2',\n        '10E',\n        '2E-',\n        'E-2',\n        '+E2'\n        );\n$out = filter_var($data, FILTER_VALIDATE_FLOAT, FILTER_REQUIRE_ARRAY);\nvar_dump($out);\n?>")).toMatchSnapshot();
  });
});
