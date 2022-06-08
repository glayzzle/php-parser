// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_pam_sha256_public_key_ini.phpt
  it("PAM: SHA-256, mysqlnd.sha256_server_public_key", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $link = new mysqli($host, 'shatest', 'shatest', $db, $port, $socket);\n    if ($link->connect_errno) {\n        printf(\"[001] [%d] %s\\n\", $link->connect_errno, $link->connect_error);\n    } else {\n        if (!$res = $link->query(\"SELECT id FROM test WHERE id = 1\"))\n            printf(\"[002] [%d] %s\\n\", $link->errno, $link->error);\n        if (!$row = mysqli_fetch_assoc($res)) {\n            printf(\"[003] [%d] %s\\n\", $link->errno, $link->error);\n        }\n        if ($row['id'] != 1) {\n            printf(\"[004] Expecting 1 got %s/'%s'\", gettype($row['id']), $row['id']);\n        }\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
