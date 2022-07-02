// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug21338.phpt
  it("Bug #20934 (html_entity_decode() crash when \"\" is passed)", function () {
    expect(parser.parseCode("<?php\nvar_dump(html_entity_decode(\"\"));\n?>")).toMatchSnapshot();
  });
});
