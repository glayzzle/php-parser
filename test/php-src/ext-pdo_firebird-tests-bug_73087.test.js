// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_73087.phpt
  it("PDO_Firebird: bug 73087 segfault binding blob parameter", function () {
    expect(parser.parseCode("<?php\nrequire 'testdb.inc';\n$dbh->exec('recreate table atable (id integer not null, content blob sub_type 1 segment size 80)');\n$S = $dbh->prepare('insert into atable (id, content) values (:id, :content)');\nfor ($I = 1; $I < 10; $I++) {\n    $Params = [\n        'id' => $I,\n        'content' => base64_encode(random_bytes(10))\n    ];\n    foreach ($Params as $Param => $Value)\n        $S->bindValue($Param, $Value);\n    $S->execute();\n}\nunset($S);\nunset($dbh);\necho 'OK';\n?>")).toMatchSnapshot();
  });
});
