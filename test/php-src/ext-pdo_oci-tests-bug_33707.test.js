// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/bug_33707.phpt
  it("PDO OCI Bug #33707 (Errors in select statements not reported)", function () {
    expect(parser.parseCode("<?php\nrequire 'ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory('ext/pdo_oci/tests/common.phpt');\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);\n$rs = $db->query('select blah from a_table_that_does_not_exist');\nvar_dump($rs);\nvar_dump($db->errorInfo());\n?>")).toMatchSnapshot();
  });
});
