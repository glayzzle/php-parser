// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_phpinfo.phpt
  it("PDO_OCI: phpinfo() output", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/../../pdo/tests/pdo_test.inc');\n$db = PDOTest::factory();\nob_start();\nphpinfo();\n$tmp = ob_get_contents();\nob_end_clean();\n$reg = 'PDO Driver for OCI 8 and later => enabled';\nif (!preg_match(\"/$reg/\", $tmp)) {\n    printf(\"[001] Cannot find OCI PDO driver line in phpinfo() output\\n\");\n}\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
