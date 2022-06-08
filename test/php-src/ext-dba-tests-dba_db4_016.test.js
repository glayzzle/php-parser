// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_db4_016.phpt
  it("DBA DB4 File Creation popen(\"c\") with existing valid file", function () {
    expect(parser.parseCode("<?php\n$handler = \"db4\";\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\nif (($db_file = dba_popen($db_filename, \"c\", $handler)) !== FALSE) {\n    if (file_exists($db_filename)) {\n        echo \"database file created\\n\";\n        var_dump(dba_insert(\"key1\", \"This is a test insert\", $db_file));\n        echo dba_fetch(\"key1\", $db_file), \"\\n\";\n        dba_close($db_file);\n    } else {\n        echo \"File did not get created\\n\";\n    }\n} else {\n    echo \"Error creating $db_filename\\n\";\n}\n// Now test reopening it\nif (($db_file = dba_popen($db_filename, \"c\", $handler)) !== FALSE) {\n    if (file_exists($db_filename)) {\n        echo \"database file created\\n\";\n        var_dump(dba_insert(\"key1\", \"second open test\", $db_file));\n        var_dump(dba_insert(\"key2\", \"second open test row 2\", $db_file));\n        echo dba_fetch(\"key1\", $db_file), \"\\n\";\n        echo dba_fetch(\"key2\", $db_file), \"\\n\";\n        dba_close($db_file);\n    } else {\n        echo \"File did not get created\\n\";\n    }\n} else {\n    echo \"Error creating $db_filename\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
