// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba004.phpt
  it("DBA Multiple Insert/Fetch Test", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ .'/test.inc');\n    echo \"database handler: $handler\\n\";\n    if (($db_file=dba_open($db_file, \"n\", $handler))!==FALSE) {\n        dba_insert(\"key1\", \"Content String 1\", $db_file);\n        dba_insert(\"key2\", \"Content String 2\", $db_file);\n        dba_insert(\"key3\", \"Third Content String\", $db_file);\n        dba_insert(\"key4\", \"Another Content String\", $db_file);\n        dba_insert(\"key5\", \"The last content string\", $db_file);\n        $a = dba_fetch(\"key4\", $db_file);\n        $b = dba_fetch(\"key2\", $db_file);\n        dba_close($db_file);\n        echo \"$a $b\";\n    } else {\n        echo \"Error creating database\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
