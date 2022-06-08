// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug50224.phpt
  it("bug #50224 (json_encode() does not always encode a float as a float)", function () {
    expect(parser.parseCode("<?php\necho \"* Testing JSON output\\n\\n\";\nvar_dump(json_encode(12.3, JSON_PRESERVE_ZERO_FRACTION));\nvar_dump(json_encode(12, JSON_PRESERVE_ZERO_FRACTION));\nvar_dump(json_encode(12.0, JSON_PRESERVE_ZERO_FRACTION));\nvar_dump(json_encode(0.0, JSON_PRESERVE_ZERO_FRACTION));\nvar_dump(json_encode(array(12, 12.0, 12.3), JSON_PRESERVE_ZERO_FRACTION));\nvar_dump(json_encode((object)array('float' => 12.0, 'integer' => 12), JSON_PRESERVE_ZERO_FRACTION));\necho \"\\n* Testing encode/decode symmetry\\n\\n\";\nvar_dump(json_decode(json_encode(12.3, JSON_PRESERVE_ZERO_FRACTION)));\nvar_dump(json_decode(json_encode(12, JSON_PRESERVE_ZERO_FRACTION)));\nvar_dump(json_decode(json_encode(12.0, JSON_PRESERVE_ZERO_FRACTION)));\nvar_dump(json_decode(json_encode(0.0, JSON_PRESERVE_ZERO_FRACTION)));\nvar_dump(json_decode(json_encode(array(12, 12.0, 12.3), JSON_PRESERVE_ZERO_FRACTION)));\nvar_dump(json_decode(json_encode((object)array('float' => 12.0, 'integer' => 12), JSON_PRESERVE_ZERO_FRACTION)));\nvar_dump(json_decode(json_encode((object)array('float' => 12.0, 'integer' => 12), JSON_PRESERVE_ZERO_FRACTION), true));\n?>")).toMatchSnapshot();
  });
});
