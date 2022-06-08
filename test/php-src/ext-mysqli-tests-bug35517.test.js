// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug35517.phpt
  it("Bug #35517 (mysqli_stmt_fetch returns NULL)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    $mysql->query(\"CREATE TABLE temp (id INT UNSIGNED NOT NULL)\");\n    $mysql->query(\"INSERT INTO temp (id) VALUES (3000000897),(3800001532),(3900002281),(3100059612)\");\n    $stmt = $mysql->prepare(\"SELECT id FROM temp\");\n    $stmt->execute();\n    $stmt->bind_result($id);\n    while ($stmt->fetch()) {\n        if (PHP_INT_SIZE == 8) {\n            if ((gettype($id) !== 'int') && (gettype($id) != 'integer'))\n                printf(\"[001] Expecting integer on 64bit got %s/%s\\n\", gettype($id), var_export($id, true));\n        } else {\n            if (gettype($id) !== 'string') {\n                printf(\"[002] Expecting string on 32bit got %s/%s\\n\", gettype($id), var_export($id, true));\n            }\n        }\n        print $id;\n        print \"\\n\";\n    }\n    $stmt->close();\n    $mysql->query(\"DROP TABLE temp\");\n    $mysql->close();\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
