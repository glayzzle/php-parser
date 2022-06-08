// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/xmlwriter_open_uri_error_003.phpt
  it("xmlwriter_open_uri with non existing file", function () {
    expect(parser.parseCode("<?php\nvar_dump(xmlwriter_open_uri('foo/bar.tmp'));\n?>")).toMatchSnapshot();
  });
});
