// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_encode_pretty_print.phpt
  it("json_encode() with JSON_PRETTY_PRINT", function () {
    expect(parser.parseCode("<?php\nfunction encode_decode($json) {\n    $struct = json_decode($json);\n    $pretty = json_encode($struct, JSON_PRETTY_PRINT);\n    echo \"$pretty\\n\";\n    $pretty = json_decode($pretty);\n    printf(\"Match: %d\\n\", $pretty == $struct);\n}\nencode_decode('[1,2,3,[1,2,3]]');\nencode_decode('{\"a\":1,\"b\":[1,2],\"c\":{\"d\":42}}');\n?>")).toMatchSnapshot();
  });
});
