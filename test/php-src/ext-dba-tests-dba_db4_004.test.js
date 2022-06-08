// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_db4_004.phpt
  it("DBA DB4 Truncate Existing File open(\"n\")", function () {
    expect(parser.parseCode("<?php\n$handler = \"db4\";\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\nvar_dump(file_put_contents($db_filename, \"Dummy contents\"));\nif (($db_file = dba_open($db_filename, \"n\", $handler)) !== FALSE) {\n    if (file_exists($db_filename)) {\n        echo \"database file created\\n\";\n        dba_insert(\"key1\", \"This is a test insert\", $db_file);\n        echo dba_fetch(\"key1\", $db_file), \"\\n\";\n        dba_close($db_file);\n    } else {\n        echo \"File did not get created\\n\";\n    }\n} else {\n    echo \"Error creating $db_filename\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
