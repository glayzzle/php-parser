// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/bug_54648.phpt
  it("PDO_DBLIB: Does not force correct dateformat", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n$db->query('set dateformat ymd');\n$rs = $db->query(\"select cast('1950-01-18 23:00:00' as smalldatetime) as sdt, cast('2030-01-01 23:59:59' as datetime) as dt\");\nvar_dump($rs->fetchAll(PDO::FETCH_ASSOC));\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
