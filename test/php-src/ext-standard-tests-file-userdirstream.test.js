// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/userdirstream.phpt
  it("Directory Streams", function () {
    expect(parser.parseCode("<?php\nclass test {\n    public $idx = 0;\n    function dir_opendir($path, $options) {\n        print \"Opening\\n\";\n        $this->idx = 0;\n        return true;\n    }\n    function dir_readdir() {\n        $sample = array('first','second','third','fourth');\n        if ($this->idx >= count($sample)) return false;\n                                    else  return $sample[$this->idx++];\n    }\n    function dir_rewinddir() {\n        $this->idx = 0;\n        return true;\n    }\n    function dir_closedir() {\n        print \"Closing up!\\n\";\n        return true;\n    }\n}\nstream_wrapper_register('test', 'test');\nvar_dump(scandir('test://example.com/path/to/test'));\n?>")).toMatchSnapshot();
  });
});
