// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/zip_entry_close.phpt
  it("zip_entry_close() function: simple and double call", function () {
    expect(parser.parseCode("<?php\n$zip    = zip_open(__DIR__.\"/test_procedural.zip\");\n$entry  = zip_read($zip);\necho \"entry_open:  \"; var_dump(zip_entry_open($zip, $entry, \"r\"));\necho \"entry_close: \"; var_dump(zip_entry_close($entry));\ntry {\n    echo \"entry_close: \"; var_dump(zip_entry_close($entry));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nzip_close($zip);\n?>\nDone")).toMatchSnapshot();
  });
});
