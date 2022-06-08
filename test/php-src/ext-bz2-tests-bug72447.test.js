// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/bug72447.phpt
  it("Bug #72447: Type Confusion in php_bz2_filter_create()", function () {
    expect(parser.parseCode("<?php\n$input = \"AAAAAAAA\";\n$param = array('blocks' => $input);\n$fp = fopen('testfile', 'w');\nstream_filter_append($fp, 'bzip2.compress', STREAM_FILTER_WRITE, $param);\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
