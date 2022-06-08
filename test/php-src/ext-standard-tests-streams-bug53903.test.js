// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug53903.phpt
  it("Bug #53903 streamwrapper/stream_stat causes problems", function () {
    expect(parser.parseCode("<?php\nclass sw {\n    public function stream_open($path, $mode, $options, &$opened_path) {\n        return true;\n    }\n    public function stream_stat() {\n        return array(\n            'atime' => $this->undefined,\n        );\n    }\n}\nstream_wrapper_register('sx', 'sw') or die('failed');\nfstat(fopen('sx://test', 'r'));\n$s[] = 1; //  Cannot use a scalar value as an array\nprint_r($s);\n?>")).toMatchSnapshot();
  });
});
