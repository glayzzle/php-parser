// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_change_user_prepared_statements.phpt
  it("mysqli_change_user() - Prepared Statement", function () {
    expect(parser.parseCode("<?php\n    require_once('connect.inc');\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[001] [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    if (!$stmt = mysqli_prepare($link, \"SELECT 'prepared statements should be released'\"))\n        printf(\"[002] [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    mysqli_change_user($link, $user, $passwd, $db);\n    $wrong = null;\n    if ($stmt->execute() && $stmt->bind_result($wrong) && $stmt->fetch()) {\n        printf(\"This is wrong, because after a mysqli_change_user() %s\\n\", $wrong);\n    } else {\n        if ($stmt->errno == 0)\n            printf(\"Error code 2013, 1243 or similar should have been set\\n\");\n    }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
