// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/80_bug24499.phpt
  it("Bug #24499 (Notice: Undefined property: stdClass::)", function () {
    expect(parser.parseCode("<?php\nrequire_once('config.inc');\n$dbh = @pg_connect($conn_str);\nif (!$dbh) {\n    die (\"Could not connect to the server\");\n}\n@pg_query($dbh, \"DROP SEQUENCE id_id_seq\");\n@pg_query($dbh, \"DROP TABLE id\");\npg_query($dbh, \"CREATE TABLE id (id SERIAL, t INT)\");\nfor ($i=0; $i<4; $i++) {\n    pg_query($dbh, \"INSERT INTO id (t) VALUES ($i)\");\n}\nclass Id\n{\n    public $id;\n    public function getId()\n    {\n        global $dbh;\n        $q  = pg_query($dbh, \"SELECT id FROM id\");\n        print_r(pg_fetch_array($q));\n        print_r(pg_fetch_array($q));\n        $id = pg_fetch_object($q);\n        var_dump($id);\n        return $id->id;\n    }\n}\n$id = new Id();\nvar_dump($id->getId());\npg_close($dbh);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
