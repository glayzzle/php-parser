// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/zip_entry_read.phpt
  it("zip_entry_read() function", function () {
    expect(parser.parseCode("<?php\n$zip    = zip_open(__DIR__.\"/test_procedural.zip\");\n$entry  = zip_read($zip);\nif (!zip_entry_open($zip, $entry, \"r\")) die(\"Failure\");\necho zip_entry_read($entry);\nzip_entry_close($entry);\nzip_close($zip);\n?>")).toMatchSnapshot();
  });
});
