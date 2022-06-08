// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_result_references_mysqlnd.phpt
  it("References to result sets - mysqlnd (no copies but references)", function () {
    expect(parser.parseCode("<?php\n    require_once('connect.inc');\n    require_once('table.inc');\n    $references = array();\n    if (!(mysqli_real_query($link, \"SELECT id, label FROM test ORDER BY id ASC LIMIT 1\")) ||\n            !($res = mysqli_store_result($link)))\n        printf(\"[001] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    $idx = 0;\n    while ($row = mysqli_fetch_assoc($res)) {\n        /* will overwrite itself */\n        $references[$idx]['row_ref'] \t\t= &$row;\n        $references[$idx]['row_copy'] \t= $row;\n        $references[$idx]['id_ref'] \t\t= &$row['id'];\n        $references[$idx++]['id_copy']\t= $row['id'];\n    }\n    debug_zval_dump($references);\n    mysqli_free_result($res);\n    if (!(mysqli_real_query($link, \"SELECT id, label FROM test ORDER BY id ASC LIMIT 2\")) ||\n            !($res = mysqli_use_result($link)))\n        printf(\"[002] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    $rows = array();\n    for ($i = 0; $i < 2; $i++) {\n        $rows[$i] = mysqli_fetch_assoc($res);\n        $references[$idx]['row_ref'] \t\t= &$rows[$i];\n        $references[$idx]['row_copy'] \t= $rows[$i];\n        $references[$idx]['id_ref'] \t\t= &$rows[$i]['id'];\n        $references[$idx]['id_copy']\t\t= $rows[$i]['id'];\n        /* enforce separation */\n        $references[$idx]['id_copy_mod']= $rows[$i]['id'] + 0;\n    }\n    mysqli_free_result($res);\n    debug_zval_dump($references);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
