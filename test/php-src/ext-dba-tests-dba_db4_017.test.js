// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_db4_017.phpt
  it("DBA DB4 file creation dba_open(\"cd\")", function () {
    expect(parser.parseCode("<?php\n$handler = \"db4\";\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\nif (($db_file = dba_open($db_filename, \"cd\", $handler)) !== FALSE) {\n    if (file_exists($db_filename)) {\n        echo \"database file created\\n\";\n        var_dump(dba_insert(\"key1\", \"This is a test insert\", $db_file));\n        echo dba_fetch(\"key1\", $db_file), \"\\n\";\n        dba_close($db_file);\n    } else {\n        echo \"File did not get created\\n\";\n    }\n} else {\n    echo \"Error creating $db_filename\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
