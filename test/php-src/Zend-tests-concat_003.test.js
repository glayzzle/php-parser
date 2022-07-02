// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/concat_003.phpt
  it("Concatenating many small strings should not slowdown allocations", function () {
    expect(parser.parseCode("<?php\n$time = microtime(TRUE);\n/* This might vary on Linux/Windows, so the worst case and also count in slow machines. */\n$t_max = 1.0;\n$datas = array_fill(0, 220000, [\n    '000.000.000.000',\n    '000.255.255.255',\n    '保留地址',\n    '保留地址',\n    '保留地址',\n    '保留地址',\n    '保留地址',\n    '保留地址',\n]);\n$time = microtime(TRUE);\n$texts = '';\nforeach ($datas AS $data)\n{\n    $texts .= implode(\"\\t\", $data) . \"\\r\\n\";\n}\n$t = microtime(TRUE) - $time;\nvar_dump($t < $t_max);\n?>\n+++DONE+++")).toMatchSnapshot();
  });
});
