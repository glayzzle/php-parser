// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/zip_read.phpt
  it("zip_read() function", function () {
    expect(parser.parseCode("<?php\n$zip = zip_open(__DIR__.\"/test_procedural.zip\");\nif (!is_resource($zip)) die(\"Failure\");\n$entries = 0;\nwhile ($entry = zip_read($zip)) {\n  $entries++;\n}\nzip_close($zip);\necho \"$entries entries\";\n?>")).toMatchSnapshot();
  });
});
