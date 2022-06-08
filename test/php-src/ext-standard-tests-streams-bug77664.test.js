// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug77664.phpt
  it("BUG #77664 (Segmentation fault when using undefined constant in custom wrapper)", function () {
    expect(parser.parseCode("<?php\nclass ErrorWrapper {\n    public $context;\n    public $var = self::INVALID;\n}\nstream_wrapper_register('error',ErrorWrapper::class);\nfile_get_contents('error://test');\n?>")).toMatchSnapshot();
  });
});
