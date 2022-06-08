// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba001.phpt
  it("DBA File Creation Test", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ .'/test.inc');\n    echo \"database handler: $handler\\n\";\n    if (($db_file=dba_open($db_file, \"n\", $handler))!==FALSE) {\n        echo \"database file created\\n\";\n        dba_close($db_file);\n    } else {\n        echo \"$db_file does not exist\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
