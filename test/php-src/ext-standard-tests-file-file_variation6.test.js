// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_variation6.phpt
  it("file() with a range of integer flag values", function () {
    expect(parser.parseCode("<?php\n$filepath = __FILE__ . \".tmp\";\n$fd = fopen($filepath, \"w+\");\nfwrite($fd, \"Line 1\\nLine 2\\nLine 3\");\nfclose($fd);\nfor ($flags = 0; $flags <= 32; $flags++) {\n    try {\n        var_dump(file($filepath, $flags));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\nunlink($filepath);\n?>")).toMatchSnapshot();
  });
});
