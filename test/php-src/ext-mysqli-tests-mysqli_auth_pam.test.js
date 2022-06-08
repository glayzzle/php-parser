// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_auth_pam.phpt
  it("PAM auth plugin", function () {
    expect(parser.parseCode("<?php\n    require_once('connect.inc');\n    require_once('table.inc');\n    if (!$link = my_mysqli_connect($host, 'pamtest', 'pamtest', $db, $port, $socket)) {\n        printf(\"[001] Cannot connect to the server using host=%s, user=pamtest, passwd=pamtest dbname=%s, port=%s, socket=%s\\n\",\n            $host, $db, $port, $socket);\n    } else {\n      if (!$res = $link->query(\"SELECT id FROM test WHERE id = 1\"))\n          printf(\"[002] [%d] %s\\n\", $link->errno, $link->error);\n      if (!$row = mysqli_fetch_assoc($res)) {\n          printf(\"[003] [%d] %s\\n\", $link->errno, $link->error);\n      }\n      if ($row['id'] != 1) {\n          printf(\"[004] Expecting 1 got %s/'%s'\", gettype($row['id']), $row['id']);\n      }\n      $res->close();\n      $link->close();\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
