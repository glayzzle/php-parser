// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_attr_drivername.phpt
  it("PDO_OCI: Attribute: verify driver name", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../pdo/tests/pdo_test.inc';\n$dbh = PDOTest::factory();\nvar_dump($dbh->getAttribute(PDO::ATTR_DRIVER_NAME));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
