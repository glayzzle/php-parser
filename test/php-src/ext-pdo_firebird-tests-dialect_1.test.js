// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/dialect_1.phpt
  it("PDO_Firebird: support 1 sql dialect", function () {
    expect(parser.parseCode("<?php\n    require(\"testdb.inc\");\n    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);\n    $dbh->setAttribute(PDO::FB_ATTR_TIMESTAMP_FORMAT, '%Y-%m-%d %H:%M:%S');\n    $sql =\n    'SELECT\n      1 as N,\n      2.0 as F,\n      cast(0.76 as numeric(15, 2)) as K,\n      cast(\\'2019-06-12\\' as date) as DT\n    FROM RDB$DATABASE';\n    $query = $dbh->prepare($sql);\n    $query->execute();\n    $row = $query->fetch(\\PDO::FETCH_OBJ);\n    var_dump($row->N);\n    var_dump($row->F);\n    var_dump($row->K);\n    var_dump($row->DT);\n    unset($query);\n    $dbh->exec('RECREATE TABLE test_d1(K numeric(15, 2), DT date)');\n    $sql='INSERT INTO test_d1(K, DT) values(?, ?)';\n    $query = $dbh->prepare($sql);\n    $query->execute([0.76, '2019-06-12']);\n    unset($query);\n    $sql='SELECT * FROM test_d1';\n    $query = $dbh->prepare($sql);\n    $query->execute();\n    $row = $query->fetch(\\PDO::FETCH_OBJ);\n    var_dump($row->K);\n    var_dump($row->DT);\n    unset($query);\n    unset($dbh);\n    echo \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
