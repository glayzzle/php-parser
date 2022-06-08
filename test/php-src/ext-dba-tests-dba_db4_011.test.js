// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_db4_011.phpt
  it("DBA DB4 with repeated key", function () {
    expect(parser.parseCode("<?php\n$handler = \"db4\";\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\nif (($db_file=dba_open($db_filename, \"c\", $handler))!==FALSE) {\n    var_dump(dba_insert(\"key1\", \"Content String 1\", $db_file));\n    var_dump(dba_insert(\"key2\", \"Content String 2\", $db_file));\n    var_dump(dba_insert(\"key2\", \"Same key\", $db_file));\n    echo dba_fetch(\"key1\", $db_file), \"\\n\";\n    echo dba_fetch(\"key2\", $db_file), \"\\n\";\n    dba_close($db_file);\n} else {\n    echo \"Error creating database\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
