// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_wrappers.phpt
  it("array stream_get_wrappers ( void );", function () {
    expect(parser.parseCode("<?php\nprint((is_array(stream_get_wrappers())) ? (\"yes\") : (\"Test 'array stream_get_wrappers ( void );' has failed\"));\necho \"\\n\";\nclass Foo { }\nstream_wrapper_register(\"foo\", \"Foo\");\nvar_dump(in_array(\"foo\", stream_get_wrappers()));\n?>")).toMatchSnapshot();
  });
});
