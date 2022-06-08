// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_017.phpt
  it("returning multiple lobs (using persistent connection)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n$c = oci_pconnect($user, $password, $dbase);\n$drop = \"DROP table lob_test\";\n$statement = oci_parse($c, $drop);\n@oci_execute($statement);\n$create = \"CREATE table lob_test(lob_1 BLOB, lob_2 BLOB)\";\n$statement = oci_parse($c, $create);\noci_execute($statement);\n$init = \"INSERT INTO lob_test VALUES(EMPTY_BLOB(), EMPTY_BLOB())\";\n$statement = oci_parse($c, $init);\noci_execute($statement);\n$select = \"SELECT * FROM lob_test FOR UPDATE\";\n$statement = oci_parse($c, $select);\noci_execute($statement, OCI_DEFAULT);\n$row = oci_fetch_assoc($statement);\n$row['LOB_1']->write(\"first\");\n$row['LOB_2']->write(\"second\");\nunset($row);\noci_commit($c);\n$select = \"SELECT * FROM lob_test FOR UPDATE\";\n$statement = oci_parse($c, $select);\noci_execute($statement, OCI_DEFAULT);\n$row = oci_fetch_assoc($statement);\nvar_dump($row);\nvar_dump($row['LOB_1']->load());\nvar_dump($row['LOB_2']->load());\n$drop = \"DROP table lob_test\";\n$statement = oci_parse($c, $drop);\n@oci_execute($statement);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
