// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug54221.phpt
  it("Bug #54221 mysqli::get_warnings segfault when used in multi queries", function () {
    expect(parser.parseCode("<?php\n    include (\"connect.inc\");\n    $link = mysqli_init();\n    if (!my_mysqli_real_connect($link, $host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[002] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    }\n    $create = \"CREATE TEMPORARY TABLE IF NOT EXISTS t54221(a int)\";\n    $query = \"$create;$create;$create;\";\n    if ($link->multi_query($query)) {\n        do {\n            $sth = $link->store_result();\n            if ($link->warning_count) {\n                $warnings = $link->get_warnings();\n                if ($warnings) {\n                    do {\n                        echo \"Warning: \".$warnings->errno.\": \".$warnings->message.\"\\n\";\n                    } while ($warnings->next());\n                }\n            }\n        } while ($link->more_results() && $link->next_result());\n    }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
