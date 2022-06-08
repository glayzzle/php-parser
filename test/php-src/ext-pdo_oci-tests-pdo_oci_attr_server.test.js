// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_attr_server.phpt
  it("PDO_OCI: Attribute: Server version and info", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\n$dbh = PDOTest::factory();\necho \"Test 1\\n\";\necho \"ATTR_SERVER_VERSION: \";\nvar_dump($dbh->getAttribute(PDO::ATTR_SERVER_VERSION));\necho \"Test 2\\n\";\necho \"ATTR_SERVER_INFO\\n\";\n$si = $dbh->getAttribute(PDO::ATTR_SERVER_INFO);\n$pos = strpos($si, \"Oracle\");\nif ($pos === 0) {\n    echo \"Found 'Oracle' at position $pos as expected\\n\";\n} else {\n    echo \"Unexpected result.  Server info was:\\n\";\n    var_dump($si);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
