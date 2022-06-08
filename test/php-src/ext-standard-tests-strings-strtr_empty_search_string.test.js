// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtr_empty_search_string.phpt
  it("strtr() trying to replace an empty string", function () {
    expect(parser.parseCode("<?php\nvar_dump(strtr(\"foo\", [\"\" => \"bar\"]));\nvar_dump(strtr(\"foo\", [\"\" => \"bar\", \"x\" => \"y\"]));\n?>")).toMatchSnapshot();
  });
});
