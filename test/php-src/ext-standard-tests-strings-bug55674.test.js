// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug55674.phpt
  it("Bug #55674 (fgetcsv & str_getcsv skip empty fields in some tab-separated records)", function () {
    expect(parser.parseCode("<?php\nvar_dump(str_getcsv(\"0\\t\\t\\\"2\\\"\\n\", \"\\t\"));\nvar_dump(str_getcsv(\"0\\t \\t'2'\\n\", \"\\t\", \"'\"));\nvar_dump(str_getcsv(\",,,,\"));\nvar_dump(str_getcsv(\" \\t  \\t\\t\\t \", \"\\t\"));\n?>")).toMatchSnapshot();
  });
});
