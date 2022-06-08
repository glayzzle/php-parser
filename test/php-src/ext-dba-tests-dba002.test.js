// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba002.phpt
  it("DBA Insert/Fetch Test", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ .'/test.inc');\n    echo \"database handler: $handler\\n\";\n    if (($db_file=dba_open($db_file, \"n\", $handler))!==FALSE) {\n        dba_insert(\"key1\", \"This is a test insert\", $db_file);\n        echo dba_fetch(\"key1\", $db_file);\n        dba_close($db_file);\n    } else {\n        echo \"Error creating database\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
