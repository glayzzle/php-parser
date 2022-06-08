// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_fetch_fields.phpt
  it("mysqli_fetch_fields()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    // Note: no SQL type tests, internally the same function gets used as for mysqli_fetch_array() which does a lot of SQL type test\n    require('table.inc');\n    // Make sure that client, connection and result charsets are all the\n    // same. Not sure whether this is strictly necessary.\n    if (!mysqli_set_charset($link, 'utf8'))\n        printf(\"[%d] %s\\n\", mysqli_errno($link), mysqli_errno($link));\n    $charsetInfo = mysqli_get_charset($link);\n    if (!$res = mysqli_query($link, \"SELECT id AS ID, label FROM test AS TEST ORDER BY id LIMIT 1\")) {\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    $fields = mysqli_fetch_fields($res);\n    foreach ($fields as $k => $field) {\n        var_dump($field);\n        switch ($k) {\n            case 1:\n                /* label column, result set charset */\n                if ($field->charsetnr != $charsetInfo->number) {\n                    printf(\"[004] Expecting charset %s/%d got %d\\n\",\n                        $charsetInfo->charset,\n                        $charsetInfo->number, $field->charsetnr);\n                }\n                break;\n        }\n    }\n    mysqli_free_result($res);\n    try {\n        mysqli_fetch_fields($res);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
