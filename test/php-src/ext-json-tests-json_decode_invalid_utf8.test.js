// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_decode_invalid_utf8.phpt
  it("json_decode() invalid UTF8", function () {
    expect(parser.parseCode("<?php\nfunction json_decode_invalid_utf8($str) {\n    var_dump(json_decode($str));\n    var_dump(json_decode($str, true, 512, JSON_INVALID_UTF8_IGNORE));\n    $json = json_decode($str, true, 512, JSON_INVALID_UTF8_SUBSTITUTE);\n    if (is_array($json)) {\n        var_dump(array_map(function($item) { return bin2hex($item); }, $json));\n    } else {\n        var_dump(bin2hex($json));\n    }\n}\njson_decode_invalid_utf8(\"\\\"a\\xb0b\\\"\");\njson_decode_invalid_utf8(\"\\\"a\\xd0\\xf2b\\\"\");\njson_decode_invalid_utf8(\"\\\"\\x61\\xf0\\x80\\x80\\x41\\\"\");\njson_decode_invalid_utf8(\"[\\\"\\xc1\\xc1\\\",\\\"a\\\"]\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
