// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/userstreams_005.phpt
  it("User-space streams: stream_truncate()", function () {
    expect(parser.parseCode("<?php\nclass test_wrapper_base {\n    public $mode;\n    function stream_open($path, $mode, $openedpath) {\n        return true;\n    }\n    function stream_eof() {\n        return false;\n    }\n}\nclass test_wrapper extends test_wrapper_base {\n    function stream_truncate($new_size) {\n        echo \"truncation with new_size=$new_size\\n\";\n        return true;\n    }\n}\nclass test_wrapper_bad extends test_wrapper_base {\n    function stream_truncate($new_size) {\n        echo \"truncation with new_size=$new_size\\n\";\n        return \"kkk\";\n    }\n}\nfunction test($name, $fd, $dest_size) {\n    echo \"------ $name: -------\\n\";\n    var_dump(ftruncate($fd, $dest_size));\n}\nvar_dump(stream_wrapper_register('test', 'test_wrapper'));\nvar_dump(stream_wrapper_register('test2', 'test_wrapper_base'));\nvar_dump(stream_wrapper_register('test3', 'test_wrapper_bad'));\n$fd = fopen(\"test://foo\",\"r\");\n$fd2 = fopen(\"test2://foo\",\"r\");\n$fd3 = fopen(\"test3://foo\",\"r\");\ntest(\"stream_truncate not implemented\", $fd2, 0);\ntest(\"stream_truncate size 0\", $fd, 0);\ntest(\"stream_truncate size 10\", $fd, 10);\ntry {\n    test(\"stream_truncate negative size\", $fd, -1);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntest(\"stream_truncate bad return\", $fd3, 0);\n?>")).toMatchSnapshot();
  });
});
