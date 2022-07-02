// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug79984.phpt
  it("Bug #79984 (Stream filter is not called with closing arg)", function () {
    expect(parser.parseCode("<?php\nclass F extends php_user_filter\n{\n    public function onCreate(): bool\n    {\n        echo 'filter onCreate' . PHP_EOL;\n        return true;\n    }\n    public function onClose(): void\n    {\n        echo 'filter onClose' . PHP_EOL;\n    }\n    public function filter($in, $out, &$consumed, $closing): int\n    {\n        while ($bucket = stream_bucket_make_writeable($in)) {\n            $bucket->data = strtoupper($bucket->data);\n            $consumed     += $bucket->datalen;\n            stream_bucket_append($out, $bucket);\n        }\n        echo 'filtered ' . ($consumed ? $consumed : 0) . ' bytes';\n        if ($closing) {\n            echo ' and closing.';\n        } else {\n            echo '.';\n        }\n        if (feof($this->stream)) {\n            echo ' Stream has reached end-of-file.';\n        }\n        echo PHP_EOL;\n        return PSFS_PASS_ON;\n    }\n}\nstream_filter_register('f', 'F');\n$str = str_repeat('a', 8320);\n$f2 = fopen('php://temp', 'r+b');\nfwrite($f2, $str);\nfseek($f2, 0, SEEK_SET);\nstream_filter_append($f2, 'f', STREAM_FILTER_READ);\nvar_dump(strlen(stream_get_contents($f2)));\nfclose($f2);\n?>")).toMatchSnapshot();
  });
});
