// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/gc.phpt
  it("GC support for PDO Sqlite driver data", function () {
    expect(parser.parseCode("<?php\nclass Obj {\n\tpublic $a;\n\tpublic function callback() { }\n}\n$obj = new Obj;\n$obj->a = new PDO('sqlite::memory:');\n$obj->a->sqliteCreateFunction('func1', function() use ($obj) {}, 1);\n$obj->a->sqliteCreateAggregate('func2', function() use ($obj) {}, function() use($obj) {});\n$obj->a->sqliteCreateCollation('col', function() use ($obj) {});\n?>\n===DONE===")).toMatchSnapshot();
  });
});
