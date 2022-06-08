// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba013.phpt
  it("DBA with array key with empty array", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\nif (($db_file=dba_open($db_file, \"n\", $handler))!==FALSE) {\n    dba_insert(array(), \"Content String 1\", $db_file);\n} else {\n    echo \"Error creating database\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
