// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_interval_create_from_date_string_nullparam.phpt
  it("Test date_interval_create_from_date_string() function : null parameter", function () {
    expect(parser.parseCode("<?php\n$i = date_interval_create_from_date_string(null);\nvar_dump($i);\n?>")).toMatchSnapshot();
  });
});
