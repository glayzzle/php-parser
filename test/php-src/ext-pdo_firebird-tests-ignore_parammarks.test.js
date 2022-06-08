// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/ignore_parammarks.phpt
  it("PDO_Firebird: ingnore parameter marks in comments", function () {
    expect(parser.parseCode("<?php\n\trequire(\"testdb.inc\");\n\t$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);\n\t$sql = '\nselect 1 as n\n-- :f\nfrom rdb$database \nwhere 1=:d and 2=:e\t\n';\n\t$query = $dbh->prepare($sql);\n\t$query->execute(['d' => 1, 'e' => 2]);\n\t$row = $query->fetch(\\PDO::FETCH_OBJ);\n\tvar_dump($row->N);\n\tunset($query);\n\t$sql = '\nselect 1 as n\nfrom rdb$database \nwhere 1=:d /* and :f = 5 */ and 2=:e\t\n';\n\t$query = $dbh->prepare($sql);\n\t$query->execute(['d' => 1, 'e' => 2]);\n\t$row = $query->fetch(\\PDO::FETCH_OBJ);\n\tvar_dump($row->N);\n\tunset($query);\t\n\t\n\tunset($dbh);\n\techo \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
