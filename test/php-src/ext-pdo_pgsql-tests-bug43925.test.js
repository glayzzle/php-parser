// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug43925.phpt
  it("Bug #43925 (Incorrect argument counter in prepared statements with pgsql)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../../ext/pdo/tests/pdo_test.inc';\n$dbh = PDOTest::test_factory(__DIR__ . '/common.phpt');\n@$dbh->query('DROP TABLE nodes');\n$dbh->query('\nCREATE TABLE nodes\n(\n   id   integer NOT NULL PRIMARY KEY\n , root integer NOT NULL\n , lft  integer NOT NULL\n , rgt  integer NOT NULL\n);');\n$dbh->query('INSERT INTO nodes (id, root, lft, rgt) VALUES (1, 1, 1, 6);');\n$dbh->query('INSERT INTO nodes (id, root, lft, rgt) VALUES (2, 1, 2, 3);');\n$dbh->query('INSERT INTO nodes (id, root, lft, rgt) VALUES (3, 1, 4, 5);');\n$stmt = $dbh->prepare('\n    SELECT *\n    FROM nodes\n    WHERE (:rootId > 0 OR lft > :left OR rgt > :left)\n        AND (root = :rootId OR root  = :left)\n        AND (1 > :left OR 1 < :left OR 1 = :left)\n        AND (:x > 0 OR :x < 10 OR :x > 100)\n        OR :y = 1 OR :left = 1\n');\n$stmt->bindValue('left',   1, PDO::PARAM_INT);\n$stmt->bindValue('rootId', 3, PDO::PARAM_INT);\n$stmt->bindValue('x', 5, PDO::PARAM_INT);\n$stmt->bindValue('y', 50, PDO::PARAM_INT);\n$stmt->execute();\nforeach ($stmt->fetchAll() as $row) {\n    print implode(' - ', $row);\n    print \"\\n\";\n}\n$dbh->query('DROP TABLE nodes');\n?>")).toMatchSnapshot();
  });
});
