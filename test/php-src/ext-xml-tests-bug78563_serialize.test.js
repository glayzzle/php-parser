// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug78563_serialize.phpt
  it("Bug #78563: parsers should not be serializable", function () {
    expect(parser.parseCode("<?php\n$parser = xml_parser_create();\nserialize($parser);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
