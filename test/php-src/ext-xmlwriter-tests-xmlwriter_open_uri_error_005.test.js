// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/xmlwriter_open_uri_error_005.phpt
  it("xmlwriter_open_uri with file://localhost/", function () {
    expect(parser.parseCode("<?php\nvar_dump(xmlwriter_open_uri('file://localhost/'));\n?>")).toMatchSnapshot();
  });
});
