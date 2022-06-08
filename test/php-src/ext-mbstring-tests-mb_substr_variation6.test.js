// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_substr_variation6.phpt
  it("Test mb_substr() function : usage variations - pass different integers to $start arg", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how mb_substr() behaves when passed a range of integers as $start argument\n */\necho \"*** Testing mb_substr() : usage variations ***\\n\";\nmb_internal_encoding('UTF-8');\n$string_ascii = '+Is an English string'; //21 chars\n$string_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCMDEyMzTvvJXvvJbvvJfvvJjvvJnjgII='); //21 chars\n/*\n * Loop through integers as multiples of ten for $offset argument\n * 60 is larger than *BYTE* count for $string_mb\n */\nfor ($i = -60; $i <= 60; $i += 10) {\n    if (@$a || @$b) {\n        $a = null;\n        $b = null;\n    }\n    echo \"\\n**-- Offset is: $i --**\\n\";\n    echo \"-- ASCII String --\\n\";\n    $a = mb_substr($string_ascii, $i, 4);\n    if ($a !== false) {\n       var_dump(bin2hex($a));\n    }\n    else {\n       var_dump($a);\n    }\n    echo \"--Multibyte String --\\n\";\n    $b = mb_substr($string_mb, $i, 4, 'UTF-8');\n    if (strlen($a) == mb_strlen($b, 'UTF-8')) { // should return same length\n        var_dump(bin2hex($b));\n    } else {\n        echo \"Difference in length of ASCII string and multibyte string\\n\";\n    }\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
