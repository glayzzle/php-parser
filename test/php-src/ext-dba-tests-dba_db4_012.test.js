// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_db4_012.phpt
  it("DBA DB4 New File Creation open(\"rl\")", function () {
    expect(parser.parseCode("<?php\n$handler = \"db4\";\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\nif (($db_file = dba_open($db_filename, \"rl\", $handler)) !== FALSE) {\n    echo \"database file created\\n\";\n    dba_close($db_file);\n} else {\n    echo \"Error creating $db_filename\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
