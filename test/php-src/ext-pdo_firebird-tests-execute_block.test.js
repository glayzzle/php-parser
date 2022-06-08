// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/execute_block.phpt
  it("PDO_Firebird: support EXECUTE BLOCK", function () {
    expect(parser.parseCode("<?php\n\trequire(\"testdb.inc\");\n\t$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);\n\t$sql = '\nexecute block (a int = :e, b int = :d)\nreturns (N int, M int)\nas\ndeclare z int;\nbegin\n  select 10\n  from rdb$database\n  into :z;\n  \n  n = a + b + z;\n  m = z * a;\n  suspend;\nend\t\n';\n\t$query = $dbh->prepare($sql);\n\t$query->execute(['d' => 1, 'e' => 2]);\n\t$row = $query->fetch(\\PDO::FETCH_OBJ);\n\tvar_dump($row->N);\n\tvar_dump($row->M);\n\tunset($query);\n\tunset($dbh);\n\techo \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
