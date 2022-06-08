// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug72221.phpt
  it("Bug #72221 (Segmentation fault in stream_get_line / zend_memnstr_ex)", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(\"php://memory\", \"r+\");\nfwrite($fp, str_repeat(\"baad\", 1024*1024));\nrewind($fp);\nstream_get_line($fp, 1024*1024*2, \"aaaa\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
