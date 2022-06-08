// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug47443.phpt
  it("Bug #47443 (metaphone('scratch') returns wrong result)", function () {
    expect(parser.parseCode("<?php\nvar_dump(metaphone(\"scratch\"));\nvar_dump(metaphone(\"scrath\"));\nvar_dump(metaphone(\"scratc\"));\n?>")).toMatchSnapshot();
  });
});
