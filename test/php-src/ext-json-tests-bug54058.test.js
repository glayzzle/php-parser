// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug54058.phpt
  it("Bug #54058 (json_last_error() invalid UTF-8 produces wrong error)", function () {
    expect(parser.parseCode("<?php\n$bad_utf8 = quoted_printable_decode('=B0');\njson_encode($bad_utf8);\nvar_dump(json_last_error(), json_last_error_msg());\n$a = new stdclass;\n$a->foo = quoted_printable_decode('=B0');\njson_encode($a);\nvar_dump(json_last_error(), json_last_error_msg());\n$b = new stdclass;\n$b->foo = $bad_utf8;\n$b->bar = 1;\njson_encode($b);\nvar_dump(json_last_error(), json_last_error_msg());\n$c = array(\n    'foo' => $bad_utf8,\n    'bar' => 1\n);\njson_encode($c);\nvar_dump(json_last_error(), json_last_error_msg());\n?>")).toMatchSnapshot();
  });
});
