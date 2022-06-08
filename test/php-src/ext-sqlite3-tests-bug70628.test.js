// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug70628.phpt
  it("Bug #70628 (Clearing bindings on an SQLite3 statement doesn't work)", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\n$db->exec(\"CREATE TABLE Dogs (Id INTEGER PRIMARY KEY, Breed TEXT, Name TEXT, Age INTEGER)\");\n$sth = $db->prepare(\"INSERT INTO Dogs (Breed, Name, Age)  VALUES (:breed,:name,:age)\");\n$sth->bindValue(':breed', 'canis', SQLITE3_TEXT);\n$sth->bindValue(':name', 'jack', SQLITE3_TEXT);\n$sth->bindValue(':age', 7, SQLITE3_INTEGER);\n$sth->execute();\n$sth->clear();\n$sth->reset();\n$sth->bindValue(':breed', 'russel', SQLITE3_TEXT);\n$sth->bindValue(':age', 3, SQLITE3_INTEGER);\n$sth->execute();\n$res = $db->query('SELECT * FROM Dogs');\nwhile (($row = $res->fetchArray(SQLITE3_ASSOC))) {\n    var_dump($row);\n}\n$res->finalize();\n$sth->close();\n$db->close();\n?>")).toMatchSnapshot();
  });
});
