// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities01.phpt
  it("htmlentities() test 1 (cp1252)", function () {
    expect(parser.parseCode("<?php\nvar_dump(htmlentities(\"\\x82\\x86\\x99\\x9f\", ENT_QUOTES, 'cp1252'));\nvar_dump(htmlentities(\"\\x80\\xa2\\xa3\\xa4\\xa5\", ENT_QUOTES, 'cp1252'));\n?>")).toMatchSnapshot();
  });
});
