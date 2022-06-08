// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug68938.phpt
  it("Bug #68938 (json_decode() decodes empty string without indicating error)", function () {
    expect(parser.parseCode("<?php\njson_decode(\"\");\nvar_dump(json_last_error());\n?>")).toMatchSnapshot();
  });
});
