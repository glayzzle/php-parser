// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug43840.phpt
  it("Test mb_strpos() function : mb_strpos bounds check is byte count rather than a character count", function () {
    expect(parser.parseCode("<?php\n/*\n * mb_strpos bounds check is byte count rather than a character count:\n * The multibyte string should be returning the same results as the ASCII string.\n * Multibyte string was not returning error message until offset was passed the\n * byte count of the string. Should return error message when passed character count.\n */\n$offsets = array(20, 21, 22, 53, 54);\n$string_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCMDEyMzTvvJXvvJbvvJfvvJjvvJnjgII=');\n$needle = base64_decode('44CC');\nforeach($offsets as $i) {\n    echo \"\\n-- Offset is $i --\\n\";\n    echo \"--Multibyte String:--\\n\";\n    try {\n        var_dump( mb_strpos($string_mb, $needle, $i, 'UTF-8') );\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    echo\"--ASCII String:--\\n\";\n    try {\n        var_dump(mb_strpos('This is na English ta', 'a', $i));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
