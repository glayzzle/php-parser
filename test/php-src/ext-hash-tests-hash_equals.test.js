// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_equals.phpt
  it("Hash: hash_equals() test", function () {
    expect(parser.parseCode("<?php\nfunction trycatch_dump(...$tests) {\n    foreach ($tests as $test) {\n        try {\n            var_dump($test());\n        }\n        catch (\\Error $e) {\n            echo '[' . get_class($e) . '] ' . $e->getMessage() . \"\\n\";\n        }\n    }\n}\ntrycatch_dump(\n    fn() => hash_equals(\"same\", \"same\"),\n    fn() => hash_equals(\"not1same\", \"not2same\"),\n    fn() => hash_equals(\"short\", \"longer\"),\n    fn() => hash_equals(\"longer\", \"short\"),\n    fn() => hash_equals(\"\", \"notempty\"),\n    fn() => hash_equals(\"notempty\", \"\"),\n    fn() => hash_equals(\"\", \"\"),\n    fn() => hash_equals(123, \"NaN\"),\n    fn() => hash_equals(\"NaN\", 123),\n    fn() => hash_equals(123, 123),\n    fn() => hash_equals(null, \"\"),\n    fn() => hash_equals(null, 123),\n    fn() => hash_equals(null, null),\n);\n?>")).toMatchSnapshot();
  });
});
