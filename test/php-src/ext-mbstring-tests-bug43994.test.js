// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug43994.phpt
  it("Test mb_ereg() function : mb_ereg 'successfully' matching incorrectly", function () {
    expect(parser.parseCode("<?php\n/*\n * mb_ereg 'successfully' matching incorrectly:\n * Bug now seems to be fixed - error message is now generated when an 'empty'\n * pattern is supplied to mb_ereg. Similar error message to ereg().\n */\n$inputs = array(false, FALSE, \"\", '');\n$iterator = 1;\nforeach($inputs as $input) {\n    if(@is_array($mb_regs)){\n        $mb_regs = '';\n    }\n    echo \"\\n-- Iteration $iterator --\\n\";\n    echo \"Without \\$regs arg:\\n\";\n    try {\n        var_dump( mb_ereg($input, 'hello, world') );\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    echo \"With \\$regs arg:\\n\";\n    try {\n        var_dump(mb_ereg($input, 'hello, world', $mb_regs));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    var_dump($mb_regs);\n    $iterator++;\n};\n?>")).toMatchSnapshot();
  });
});
