// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug43841.phpt
  it("Test mb_strrpos() function : mb_strrpos offset is byte count for negative values", function () {
    expect(parser.parseCode("<?php\n/*\n * Test that mb_strrpos offset is byte count for negative values (should be character count)\n */\n$offsets = array(-25, -24, -13, -12);\n// Japanese string in UTF-8\n$string_mb = \"日本語テキストです。01234５６７８９。\";\n$needle = \"。\";\nforeach ($offsets as $i) {\n    echo \"\\n-- Offset is $i --\\n\";\n    echo \"Multibyte String:\\n\";\n    try {\n        var_dump( mb_strrpos($string_mb, $needle, $i, 'UTF-8') );\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    echo \"ASCII String:\\n\";\n    echo \"mb_strrpos:\\n\";\n    try {\n        var_dump(mb_strrpos('This is na English ta', 'a', $i));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    echo \"strrpos:\\n\";\n    try {\n        var_dump(strrpos('This is na English ta', 'a', $i));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
