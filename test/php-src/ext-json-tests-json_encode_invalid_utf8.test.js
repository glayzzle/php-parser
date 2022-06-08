// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_encode_invalid_utf8.phpt
  it("json_encode() invalid UTF8", function () {
    expect(parser.parseCode("<?php\nfunction json_encode_invalid_utf8($str) {\n    var_dump(json_encode($str));\n    var_dump(json_encode($str, JSON_INVALID_UTF8_IGNORE));\n    var_dump(json_encode($str, JSON_INVALID_UTF8_SUBSTITUTE));\n    var_dump(json_encode($str, JSON_UNESCAPED_UNICODE));\n    var_dump(bin2hex(json_encode($str, JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE)));\n}\njson_encode_invalid_utf8(\"\\x61\\xb0\\x62\");\njson_encode_invalid_utf8(\"\\x61\\xf0\\x80\\x80\\x41\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
