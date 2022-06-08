// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/065.phpt
  it("set character set", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[001] [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    if (!mysqli_query($mysql, \"SET sql_mode=''\"))\n        printf(\"[002] Cannot set SQL-Mode, [%d] %s\\n\", mysqli_errno($mysql), mysqli_error($mysql));\n    $esc_str = chr(0xbf) . chr(0x5c);\n    $len = $charset = array();\n    $tmp = null;\n    if ($mysql->set_charset(\"latin1\")) {\n        /* 5C should be escaped */\n        if (3 !== ($tmp = strlen($mysql->real_escape_string($esc_str))))\n            printf(\"[003] Expecting 3/int got %s/%s\\n\", gettype($tmp), $tmp);\n        if ('latin1' !== ($tmp = $mysql->character_set_name()))\n            printf(\"[004] Expecting latin1/string got %s/%s\\n\", gettype($tmp), $tmp);\n    }\n    if ($res = $mysql->query(\"SHOW CHARACTER SET LIKE 'gbk'\")) {\n        $res->free_result();\n        if ($mysql->set_charset(\"gbk\")) {\n            /* nothing should be escaped, it's a valid gbk character */\n            if (2 !== ($tmp = strlen($mysql->real_escape_string($esc_str))))\n                    printf(\"[005] Expecting 2/int got %s/%s\\n\", gettype($tmp), $tmp);\n            if ('gbk' !== ($tmp = $mysql->character_set_name()))\n                    printf(\"[005] Expecting gbk/string got %s/%s\\n\", gettype($tmp), $tmp);\n        }\n    }\n    $mysql->close();\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
