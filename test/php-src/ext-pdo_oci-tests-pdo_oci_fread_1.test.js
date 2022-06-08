// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_fread_1.phpt
  it("PDO_OCI: check fread() EOF", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\n$dbh = PDOTest::factory();\n$dbh->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, false);\n// Initialization\n$stmtarray = array(\n    \"begin execute immediate 'drop table pdo_oci_fread_tab'; exception when others then null; end;\",\n    \"create table pdo_oci_fread_tab (id number, data clob)\",\n    \"declare\n    lob1 clob := 'abc' || lpad('j',4020,'j') || 'xyz';\n   begin\n    insert into pdo_oci_fread_tab (id,data) values (1, lob1);\n  end;\"\n);\nforeach ($stmtarray as $stmt) {\n    $dbh->exec($stmt);\n}\necho \"Test 1\\n\";\n$s = $dbh->query(\"select data from pdo_oci_fread_tab where id = 1\");\n$r = $s->fetch();\n$sh = $r['data'];\nwhile (!feof($sh)) {\n    $buffer = fread($sh,1024);\n    echo '*'.$buffer.'*';\n}\necho \"\\n\";\nfclose($sh);\n// Clean up\n$stmtarray = array(\n    \"drop table pdo_oci_fread_tab\"\n);\nforeach ($stmtarray as $stmt) {\n    $dbh->exec($stmt);\n}\n?>")).toMatchSnapshot();
  });
});
