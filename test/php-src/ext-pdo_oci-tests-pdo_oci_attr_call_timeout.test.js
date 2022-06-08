// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_attr_call_timeout.phpt
  it("PDO_OCI: Attribute: Setting and using call timeout", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\nfunction mysleep($dbh, $t)\n{\n    $stmt = $dbh->prepare(\"begin dbms_lock.sleep(:t); end;\");\n    if (!$stmt) {\n        $error = $dbh->errorInfo();\n        echo \"Prepare error was \", $error[2], \"\\n\";\n        return;\n    }\n    $stmt->bindParam(\":t\", $t, PDO::PARAM_INT);\n    $r = $stmt->execute();\n    if ($r) {\n        echo \"Execute succeeded\\n\";\n    } else {\n        $error = $dbh->errorInfo();\n        echo \"Execute error was \", $error[2], \"\\n\";\n    }\n}\n$dbh = PDOTest::factory();\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);\necho \"Test 1\\n\";\n$dbh->setAttribute(PDO::OCI_ATTR_CALL_TIMEOUT, 4000); // milliseconds\necho \"call timeout:\\n\";\nvar_dump($dbh->getAttribute(PDO::OCI_ATTR_CALL_TIMEOUT));\n$r = mysleep($dbh, 8); // seconds\n?>\n===DONE===\n<?php exit(0); ?>")).toMatchSnapshot();
  });
});
