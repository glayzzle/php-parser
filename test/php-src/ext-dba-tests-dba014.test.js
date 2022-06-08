// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba014.phpt
  it("DBA with array key with array containing too many elements", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\nif (($db_file=dba_open($db_file, \"n\", $handler))!==FALSE) {\n    dba_insert(array(\"a\", \"b\", \"c\"), \"Content String 2\", $db_file);\n} else {\n    echo \"Error creating database\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
