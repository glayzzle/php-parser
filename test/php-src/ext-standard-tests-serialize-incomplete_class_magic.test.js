// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/incomplete_class_magic.phpt
  it("(un)serializing __PHP_Incomplete_Class instance edge case", function () {
    expect(parser.parseCode("<?php\n$serialized = 'O:8:\"Missing_\":1:{s:33:\"__PHP_Incomplete_Class_Name' . \"\\0\" . 'other\";i:123;}';\nob_start();\n$o = unserialize($serialized);\nvar_dump($o);\n$reserialized = serialize($o);\nvar_dump(unserialize($reserialized));\n// Pretty print null bytes\necho str_replace(\"\\0\", \"\\\\0\", ob_get_clean());\n// The serialization should have a property count of 1 and a property set with 1 element.\nvar_export($reserialized);\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
