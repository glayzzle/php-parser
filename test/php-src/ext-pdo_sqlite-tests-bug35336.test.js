// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug35336.phpt
  it("Bug #35336 (crash on PDO::FETCH_CLASS + __set())", function () {
    expect(parser.parseCode("<?php\nclass EEE {\n    function __set ($field, $value) {\n        echo \"hello world\\n\";\n    }\n}\n$a = new PDO(\"sqlite::memory:\");// pool (\"sqlite::memory:\");\n$a->query (\"CREATE TABLE test (a integer primary key, b text)\");\n$b = $a->prepare(\"insert into test (b) values (?)\");\n$b->execute(array (5));\n$rez = $a->query (\"SELECT * FROM test\")->fetchAll(PDO::FETCH_CLASS, 'EEE');\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
