// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_error_002.phpt
  it("Test unserialize(): error is indistinguishable from deserialized boolean", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing unserialize() error/boolean distinction ***\\n\";\n$garbage = \"obvious non-serialized data\";\n$serialized_false = serialize(false);\nvar_dump($serialized_false);\n$deserialized_garbage = unserialize($garbage);\nvar_dump($deserialized_garbage);\n$deserialized_false = unserialize($serialized_false);\nvar_dump($deserialized_false);\necho \"unserialize error and deserialized false are identical? \" . (bool) ($deserialized_false == $deserialized_garbage) . \"\\n\";\n// candidate safe idiom for determining whether data is serialized\nfunction isSerialized($str) {\n    return ($str == serialize(false) || @unserialize($str) !== false);\n}\n// Test unserialize error idiom\nvar_dump(isSerialized($garbage));\nvar_dump(isSerialized($serialized_false));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
