// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/user-stream-error.phpt
  it("E_ERROR during UserStream Open", function () {
    expect(parser.parseCode("<?php\nclass FailStream {\n  public function stream_open($path, $mode, $options, &$opened_path) {\n    _some_undefined_function();\n  }\n}\nstream_wrapper_register('mystream', 'FailStream');\nfopen('mystream://foo', 'r');\necho 'Done';\n?>")).toMatchSnapshot();
  });
});
