// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug45923.phpt
  it("Bug #45923 (mb_st[r]ripos() offset not handled correctly)", function () {
    expect(parser.parseCode("<?php\nfunction section($func, $haystack, $needle)\n{\n    echo \"\\n------- $func -----------\\n\\n\";\n    foreach([0, 3, 6, 9, 11, 12, -1, -3, -6, -20] as $offset) {\n        echo \"> Offset: $offset\\n\";\n        try {\n            var_dump($func($haystack, $needle, $offset));\n        } catch (\\ValueError $e) {\n            echo $e->getMessage() . \\PHP_EOL;\n        }\n    }\n}\nsection('strpos'     , \"abc abc abc\"  , \"abc\");\nsection('mb_strpos'  , \"●○◆ ●○◆ ●○◆\", \"●○◆\");\nsection('stripos'    , \"abc abc abc\"  , \"abc\");\nsection('mb_stripos' , \"●○◆ ●○◆ ●○◆\", \"●○◆\");\nsection('strrpos'    , \"abc abc abc\"  , \"abc\");\nsection('mb_strrpos' , \"●○◆ ●○◆ ●○◆\", \"●○◆\");\nsection('strripos'   , \"abc abc abc\"  , \"abc\");\nsection('mb_strripos', \"●○◆ ●○◆ ●○◆\", \"●○◆\");\n?>")).toMatchSnapshot();
  });
});
