// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pdo_oci_debugdumpparams.phpt
  it("PDO_OCI: Bug #69356 (PDOStatement::debugDumpParams() truncates query)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/../../pdo/tests/pdo_test.inc');\n$db = PDOTest::factory();\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\n$stmt = $db->query(\"\n    SELECT '\n        Dumps the information contained by a prepared statement directly on the output. It will provide the SQL query in use, the number of parameters used (Params), the list of parameters, with their name, type (paramtype) as an integer, their key name or position, and the position in the query (if this is supported by the PDO driver, otherwise, it will be -1).\n        This is a debug function, which dump directly the data on the normal output.\n        Tip:\n        As with anything that outputs its result directly to the browser, the output-control functions can be used to capture the output of this function, and save it in a string (for example).\n        This will only dumps the parameters in the statement at the moment of the dump. Extra parameters are not stored in the statement, and not displayed.\n    ' FROM DUAL\n\");\nvar_dump($stmt->debugDumpParams());\n?>")).toMatchSnapshot();
  });
});
