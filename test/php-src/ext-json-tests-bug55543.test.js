// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug55543.phpt
  it("Bug #55543 (json_encode() with JSON_NUMERIC_CHECK & numeric string properties)", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass;\n$a->{\"1\"} = \"5\";\nvar_dump(json_encode($a, JSON_NUMERIC_CHECK));\n?>")).toMatchSnapshot();
  });
});
