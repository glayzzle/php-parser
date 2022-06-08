// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug78506.phpt
  it("Bug #78506: Error in a php_user_filter::filter() is not reported", function () {
    expect(parser.parseCode("<?php\nclass MyFilter extends php_user_filter {\n    public function filter($in, $out, &$consumed, $closing): int\n    {\n        stream_bucket_make_writeable($in);\n        return PSFS_ERR_FATAL;\n    }\n}\nstream_filter_register('filtername', MyFilter::class);\n$source_resource = fopen('php://memory', 'rb+');\nfwrite($source_resource, 'Test data');\nrewind($source_resource);\nstream_filter_prepend($source_resource,'filtername',STREAM_FILTER_READ);\nvar_dump(stream_copy_to_stream($source_resource, fopen('php://memory', 'wb')));\n?>")).toMatchSnapshot();
  });
});
