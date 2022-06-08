// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_db4_005.phpt
  it("DBA DB4 New File Creation popen(\"c\") & Insert Test", function () {
    expect(parser.parseCode("<?php\n$handler = \"db4\";\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\nif (($db_file = dba_popen($db_filename, \"c\", $handler)) !== FALSE) {\n    echo \"database file created\\n\";\n    dba_insert(\"key1\", \"This is a test insert\", $db_file);\n    echo dba_fetch(\"key1\", $db_file), \"\\n\";\n    dba_close($db_file);\n} else {\n    echo \"Error creating $db_filename\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
