// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba_db4_007.phpt
  it("DBA DB4 File Creation popen(\"c\") with existing invalid file", function () {
    expect(parser.parseCode("<?php\n$handler = \"db4\";\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\nvar_dump(file_put_contents($db_filename, \"Dummy contents\"));\nif (($db_file = dba_popen($db_filename, \"c\", $handler)) !== FALSE) {\n    if (file_exists($db_filename)) {\n        echo \"database file created\\n\";\n        dba_close($db_file);\n    } else {\n        echo \"File did not get created\\n\";\n    }\n} else {\n    echo \"Error creating $db_filename\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
