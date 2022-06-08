// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/zip_entry_filesize.phpt
  it("zip_entry_filesize() function", function () {
    expect(parser.parseCode("<?php\n$zip = zip_open(__DIR__.\"/test_procedural.zip\");\nif (!is_resource($zip)) die(\"Failure\");\n$entries = 0;\nwhile ($entry = zip_read($zip)) {\n  echo zip_entry_filesize($entry).\"\\n\";\n}\nzip_close($zip);\n?>")).toMatchSnapshot();
  });
});
