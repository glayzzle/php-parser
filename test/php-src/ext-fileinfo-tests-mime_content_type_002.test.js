// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/mime_content_type_002.phpt
  it("mime_content_type(): Testing parameter", function () {
    expect(parser.parseCode("<?php\nvar_dump(mime_content_type(__FILE__));\nvar_dump(mime_content_type(fopen(__FILE__, 'r')));\nvar_dump(mime_content_type('.'));\nvar_dump(mime_content_type('./..'));\n?>")).toMatchSnapshot();
  });
});
