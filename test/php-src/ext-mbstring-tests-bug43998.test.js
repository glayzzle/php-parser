// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug43998.phpt
  it("Test mb_strtolower() function : Two error messages returned for incorrect encoding for mb_strto[upper|lower]", function () {
    expect(parser.parseCode("<?php\n/*\n * Two error messages returned for incorrect encoding for mb_strto[upper|lower]\n * Bug now appears to be fixed\n */\n$sourcestring = 'Hello, World';\n$inputs = array(12345, 12.3456789000E-10, true, false, \"\");\n$iterator = 1;\nforeach($inputs as $input) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n        try {\n            var_dump( mb_strtolower($sourcestring, $input) );\n        } catch (\\ValueError $e) {\n            echo $e->getMessage() . \\PHP_EOL;\n        }\n        try {\n            var_dump( mb_strtoupper($sourcestring, $input) );\n        } catch (\\ValueError $e) {\n            echo $e->getMessage() . \\PHP_EOL;\n        }\n  $iterator++;\n}\n?>")).toMatchSnapshot();
  });
});
