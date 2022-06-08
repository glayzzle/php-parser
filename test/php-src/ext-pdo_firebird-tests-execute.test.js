// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/execute.phpt
  it("PDO_Firebird: prepare/execute/binding", function () {
    expect(parser.parseCode("<?php\n    require(\"testdb.inc\");\n    var_dump($dbh->getAttribute(PDO::ATTR_CONNECTION_STATUS));\n    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);\n    $dbh->setAttribute(PDO::FB_ATTR_TIMESTAMP_FORMAT, '%Y-%m-%d %H:%M:%S');\n    @$dbh->exec('DROP TABLE ddl');\n    $dbh->exec(\"CREATE TABLE ddl (id SMALLINT NOT NULL PRIMARY KEY, text VARCHAR(32),\n        datetime TIMESTAMP DEFAULT '2000-02-12' NOT NULL)\");\n    $dbh->exec(\"INSERT INTO ddl (id,text) VALUES (1,'bla')\");\n    $s = $dbh->prepare(\"SELECT * FROM ddl WHERE id=? FOR UPDATE\");\n    $id = 0;\n    $s->bindParam(1,$id);\n    $var = null;\n    $s->bindColumn(\"TEXT\",$var);\n    $id = 1;\n    $s->execute();\n    $s->setAttribute(PDO::ATTR_CURSOR_NAME, \"c\");\n    var_dump($id);\n    var_dump($s->fetch());\n    var_dump($var);\n    var_dump($dbh->exec(\"UPDATE ddl SET id=2 WHERE CURRENT OF c\"));\n    var_dump($s->fetch());\n    unset($s);\n    unset($dbh);\n    echo \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
