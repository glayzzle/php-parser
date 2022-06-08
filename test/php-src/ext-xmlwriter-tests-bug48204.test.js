// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/bug48204.phpt
  it("xmlwriter_open_uri with PHP_MAXPATHLEN + 1", function () {
    expect(parser.parseCode("<?php\n$path = str_repeat('a', PHP_MAXPATHLEN + 1);\nvar_dump(xmlwriter_open_uri('file:///' . $path));\n?>")).toMatchSnapshot();
  });
});
