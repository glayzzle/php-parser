// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_attr_client.phpt
  it("PDO_OCI: Attribute: Client version", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\n$dbh = PDOTest::factory();\necho \"ATTR_CLIENT_VERSION: \";\n$cv = $dbh->getAttribute(PDO::ATTR_CLIENT_VERSION);\nvar_dump($cv);\n$s = explode(\".\", $cv);\nif (count($s) > 1 && (($s[0] == 10 && $s[1] >= 2) || $s[0] >= 11)) {\n    if (count($s) != 5) {\n        echo \"Wrong number of values in array\\nVersion was: \";\n        var_dump($cv);\n    } else {\n        echo \"Version OK, so far as can be portably checked\\n\";\n    }\n} else {\n    if (count($s) != 2) {\n        echo \"Wrong number of values in array\\nVersion was: \";\n        var_dump($cv);\n    } else {\n        echo \"Version OK, so far as can be portably checked\\n\";\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
