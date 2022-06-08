// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_ftruncate_error_001.phpt
  it("SplFileObject::ftruncate function - truncating with stream that does not support truncation", function () {
    expect(parser.parseCode("<?php\n//create a basic stream class\nclass VariableStream {\n    var $position;\n    var $varname;\n    function stream_open($path, $mode, $options, &$opened_path)\n    {\n        return true;\n    }\n    function url_stat() {\n    }\n}\nstream_wrapper_register(\"SPLtest\", \"VariableStream\");\n$ftruncate_test = \"\";\n//end creating stream\n//open an SplFileObject using the above test stream\n$obj = New SplFileObject(\"SPLtest://ftruncate_test\");\ntry {\n    $obj->ftruncate(1);\n} catch (LogicException $e) {\n    echo($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
