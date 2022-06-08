// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/zip_close.phpt
  it("zip_close() function", function () {
    expect(parser.parseCode("<?php\n$zip = zip_open(__DIR__.\"/test_procedural.zip\");\nif (!is_resource($zip)) die(\"Failure\");\nzip_close($zip);\necho \"OK\";\n?>")).toMatchSnapshot();
  });
});
