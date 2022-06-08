// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_count_values_variation.phpt
  it("Test array_count_values() function : Test all normal parameter variations", function () {
    expect(parser.parseCode("<?php\n/*\n * Test behaviour with parameter variations\n */\necho \"*** Testing array_count_values() : parameter variations ***\\n\";\nclass A {\n    static function hello() {\n      echo \"Hello\\n\";\n    }\n}\n$ob = new A();\n$fp = fopen(\"array_count_file\", \"w+\");\n$arrays = array (\"bobk\" => \"bobv\", \"val\", 6 => \"val6\",  $fp, $ob);\nvar_dump (@array_count_values ($arrays));\necho \"\\n\";\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
