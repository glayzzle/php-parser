// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug7214.phpt
  it("Bug #7214 (zip_entry_read() binary safe)", function () {
    expect(parser.parseCode("<?php\n$zip = zip_open(__DIR__.\"/binarynull.zip\");\nif (!is_resource($zip)) die(\"Failure\");\n$entries = 0;\n$entry = zip_read($zip);\n$contents = zip_entry_read($entry, zip_entry_filesize($entry));\nif (strlen($contents) == zip_entry_filesize($entry)) {\n    echo \"Ok\";\n} else {\n    echo \"failed\";\n}\n?>")).toMatchSnapshot();
  });
});
