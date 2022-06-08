// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78340.phpt
  it("Bug #78340: Include of stream wrapper not reading whole file", function () {
    expect(parser.parseCode("<?php\nclass lib {\n  public static $files= [];\n  private $bytes, $pos;\n  function stream_open($path, $mode, $options, $opened_path) {\n    $this->bytes= self::$files[$path];\n    $this->pos= 0;\n    $this->ino= crc32($path);\n    return true;\n  }\n  function stream_read($count) {\n    $chunk= substr($this->bytes, $this->pos, $count);\n    $this->pos+= strlen($chunk);\n    return $chunk;\n  }\n  function stream_eof() {\n    return $this->pos >= strlen($this->bytes);\n  }\n  function stream_close() {\n    $this->bytes= null;\n  }\n  function stream_stat() {\n    return [\n      'dev'   => 3632233996,\n      'size'  => strlen($this->bytes),\n      'ino'   => $this->ino\n    ];\n  }\n  function stream_set_option($option, $arg1, $arg2) {\n    return false;\n  }\n}\n$fill = str_repeat('.', 8192);\nlib::$files['lib://test.php']= '<?php /* '.$fill.' */ function test() { echo \"Works!\\n\"; }';\nstream_wrapper_register('lib', lib::class);\ninclude('lib://test.php');\ntest();\n?>")).toMatchSnapshot();
  });
});
