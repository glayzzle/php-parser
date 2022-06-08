// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/pdo_dblib_param_str_natl.phpt
  it("PDO_DBLIB: national character set values are quoted correctly in queries", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n$stmt = $db->prepare('SELECT :value');\n$stmt->bindValue(':value', 'foo', PDO::PARAM_STR | PDO::PARAM_STR_NATL);\n$stmt->execute();\nvar_dump($stmt->debugDumpParams());\n?>")).toMatchSnapshot();
  });
});
