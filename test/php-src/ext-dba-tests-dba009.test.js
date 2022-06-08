// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba009.phpt
  it("DBA dba_popen Test", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ .'/test.inc');\n    echo \"database handler: $handler\\n\";\n    if (($db=dba_popen($db_file, \"n\", $handler))!==FALSE) {\n        echo \"Opened\\n\";\n        dba_insert(\"a\", \"Inserted\", $db);\n        echo dba_fetch(\"a\", $db).\"\\n\";\n        dba_close($db);\n        echo \"Closed\\n\";\n    } else {\n        echo \"Error creating database\\n\";\n    }\n    if (($db=dba_popen($db_file, \"n\", $handler))!==FALSE) {\n        echo \"Opened\\n\";\n        dba_insert(\"a\", \"Inserted\", $db);\n        echo dba_fetch(\"a\", $db).\"\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
