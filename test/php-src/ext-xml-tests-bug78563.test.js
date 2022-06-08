// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug78563.phpt
  it("Bug #78563: parsers should not be clonable", function () {
    expect(parser.parseCode("<?php\n$parser = xml_parser_create();\nclone $parser;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
