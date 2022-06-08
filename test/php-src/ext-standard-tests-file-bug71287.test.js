// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug71287.phpt
  it("Bug #71287 (Error message contains hexadecimal instead of decimal number)", function () {
    expect(parser.parseCode("<?php\nclass Stream {\n    public function stream_open($path, $mode, $options, $opened_path) {\n        return true;\n    }\n    public function stream_write($data) {\n        return strlen($data) - 2;\n    }\n}\nstream_wrapper_register('test', Stream::class);\nfile_put_contents('test://file.txt', 'foobarbaz');\n?>")).toMatchSnapshot();
  });
});
