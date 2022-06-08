// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/open_error.phpt
  it("XMLReader: open error", function () {
    expect(parser.parseCode("<?php\n$reader = new XMLReader();\nvar_dump($reader->open(__DIR__.'/missing-file.xml'));\n$reader->close();\n?>")).toMatchSnapshot();
  });
});
