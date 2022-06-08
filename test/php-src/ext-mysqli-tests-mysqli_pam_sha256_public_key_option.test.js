// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_pam_sha256_public_key_option.phpt
  it("PAM: SHA-256, option: MYSQLI_SERVER_PUBLIC_KEY", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $file = sprintf(\"%s%s%s_%s\", sys_get_temp_dir(), DIRECTORY_SEPARATOR, \"test_sha256_\" , @date(\"Ymd\"));\n    if (file_exists($file) && is_readable($file)) {\n        $link = mysqli_init();\n        if (!($link->options(MYSQLI_SERVER_PUBLIC_KEY, $file))) {\n            printf(\"[001] mysqli_options failed, [%d] %s\\n\", $link->errno, $link->error);\n        }\n        if (!$link->real_connect($host, 'shatest', 'shatest', $db, $port, $socket)) {\n            printf(\"[002] [%d] %s\\n\", $link->connect_errno, $link->connect_error);\n        }\n        if (!$res = $link->query(\"SELECT id FROM test WHERE id = 1\"))\n            printf(\"[003] [%d] %s\\n\", $link->errno, $link->error);\n        if (!$row = mysqli_fetch_assoc($res)) {\n            printf(\"[004] [%d] %s\\n\", $link->errno, $link->error);\n        }\n        if ($row['id'] != 1) {\n            printf(\"[005] Expecting 1 got %s/'%s'\", gettype($row['id']), $row['id']);\n        }\n        $res->close();\n        $link->close();\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
