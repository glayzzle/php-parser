// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/debugdumpparams_001.phpt
  it("Testing PDOStatement::debugDumpParams() with bound params", function () {
    expect(parser.parseCode("<?php\n$db = new PDO('sqlite::memory:');\n$x= $db->prepare('select :a, :b, ?');\n$x->bindValue(':a', 1, PDO::PARAM_INT);\n$x->bindValue(':b', 'foo');\n$x->bindValue(3, 1313);\nvar_dump($x->debugDumpParams());\n?>")).toMatchSnapshot();
  });
});
