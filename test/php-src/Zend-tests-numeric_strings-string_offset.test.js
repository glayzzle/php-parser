// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/numeric_strings/string_offset.phpt
  it("Using different sorts of numerical strings as a string offset", function () {
    expect(parser.parseCode("<?php\n$str = \"The world is fun\";\n$keys = [\n    \"7\",\n    \"7.5\",\n    \"  7\",\n    \"  7.5\",\n    \"  7  \",\n    \"  7.5  \",\n    \"7  \",\n    \"7.5  \",\n    \"7str\",\n    \"7.5str\",\n    \"  7str\",\n    \"  7.5str\",\n    \"  7  str\",\n    \"  7.5  str\",\n    \"7  str\",\n    \"7.5  str\",\n    \"0xC\",\n    \"0b10\",\n    \"07\",\n];\nforeach ($keys as $key) {\n    try {\n        var_dump($str[$key]);\n    } catch (\\TypeError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
