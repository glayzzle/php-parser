// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_76488.phpt
  it("PDO_Firebird: Bug #76488 Memory leak when fetching a BLOB field", function () {
    expect(parser.parseCode("<?php\nrequire 'testdb.inc';\n$sql = '\nwith recursive r(n) as (\n  select 1 from rdb$database\n  union all\n  select n+1 from r where n < 1000\n)\nselect n,\n       cast(lpad(\\'A\\', 8000, \\'A\\') as BLOB sub_type TEXT) as SRC\nfrom r\n';\n    for ($i = 0; $i < 10; $i++) {\n        $sth = $dbh->prepare($sql);\n        $sth->execute();\n        $rows = $sth->fetchAll();\n        unset($rows);\n        unset($sth);\n    }\n    unset($dbh);\n    echo \"OK\";\n?>")).toMatchSnapshot();
  });
});
