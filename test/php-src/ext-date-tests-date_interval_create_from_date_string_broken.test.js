// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_interval_create_from_date_string_broken.phpt
  it("Test date_interval_create_from_date_string() function : nonsense data", function () {
    expect(parser.parseCode("<?php\n$i = date_interval_create_from_date_string(\"foobar\");\nvar_dump($i);\n?>")).toMatchSnapshot();
  });
});
