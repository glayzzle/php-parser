// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/zip_entry_open.phpt
  it("zip_entry_open() function", function () {
    expect(parser.parseCode("<?php\n$zip    = zip_open(__DIR__.\"/test_procedural.zip\");\n$entry  = zip_read($zip);\necho zip_entry_open($zip, $entry, \"r\") ? \"OK\" : \"Failure\";\nzip_entry_close($entry);\nzip_close($zip);\n?>")).toMatchSnapshot();
  });
});
