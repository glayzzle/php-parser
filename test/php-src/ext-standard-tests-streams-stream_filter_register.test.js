// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_filter_register.phpt
  it("testing the behavior of stream_filter_register", function () {
    expect(parser.parseCode("<?php\nclass foo extends php_user_filter {\n  function filter($in, $out, &$consumed, $closing): int {\n  }\n}\nclass bar extends php_user_filter {\n  function filter($in, $out, &$consumed, $closing): int {\n  }\n}\nvar_dump(stream_filter_register(\"myfilter\",\"foo\"));\nvar_dump(stream_filter_register(\"myfilter\",\"bar\"));\nvar_dump(stream_filter_register(\"foo\",\"foo\"));\n?>")).toMatchSnapshot();
  });
});
