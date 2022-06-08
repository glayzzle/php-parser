// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78406.phpt
  it("Bug #78406: Broken file includes with user-defined stream filters", function () {
    expect(parser.parseCode("<?php\necho \"bug\\n\"; // Should be transformed by filter on second include\nif (!class_exists(SampleFilter::class)) {\n    class SampleFilter extends php_user_filter\n    {\n        private $data = '';\n        public function filter($in, $out, &$consumed, $closing): int\n        {\n            while ($bucket = stream_bucket_make_writeable($in))\n            {\n                $this->data .= $bucket->data;\n            }\n            if ($closing || feof($this->stream))\n            {\n                $consumed = strlen($this->data);\n                $this->data = str_replace('bug', 'feature', $this->data);\n                $bucket = stream_bucket_new($this->stream, $this->data);\n                stream_bucket_append($out, $bucket);\n                return PSFS_PASS_ON;\n            }\n            return PSFS_FEED_ME;\n        }\n    }\n    stream_filter_register('sample.filter', SampleFilter::class);\n    $uri = 'php://filter/read=sample.filter/resource='. __FILE__;\n    include $uri; // We expect one more \"feature\" output at line 3\n}\n?>")).toMatchSnapshot();
  });
});
