// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_strpos_variation5.phpt
  it("Test iconv_strpos() function : usage variations - Pass different integers as $offset argument", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how iconv_strpos() behaves when passed different integers as $offset argument\n * The character length of $string_ascii and $string_mb is the same,\n * and the needle appears at the same positions in both strings\n */\niconv_set_encoding(\"internal_encoding\", \"UTF-8\");\necho \"*** Testing iconv_strpos() : usage variations ***\\n\";\n$string_ascii = '+Is an English string'; //21 chars\n$needle_ascii = 'g';\n$string_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCMDEyMzTvvJXvvJbvvJfvvJjvvJnjgII='); //21 chars\n$needle_mb = base64_decode('44CC');\n/*\n * Loop through integers as multiples of ten for $offset argument\n * 60 is larger than *BYTE* count for $string_mb\n */\nfor ($i = -30; $i <= 60; $i += 10) {\n    echo \"\\n**-- Offset is: $i --**\\n\";\n    echo \"-- ASCII String --\\n\";\n    try {\n        var_dump(iconv_strpos($string_ascii, $needle_ascii, $i));\n    } catch (ValueError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    echo \"--Multibyte String --\\n\";\n    try {\n        var_dump(iconv_strpos($string_mb, $needle_mb, $i, 'UTF-8'));\n    } catch (ValueError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
