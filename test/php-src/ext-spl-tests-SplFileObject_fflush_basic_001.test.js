// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fflush_basic_001.phpt
  it("SplFileObject::fflush function - basic test", function () {
    expect(parser.parseCode("<?php\n/*\n * test a successful flush\n*/\n$obj = New SplFileObject(__DIR__.'/SplFileObject_testinput.csv');\nvar_dump($obj->fflush());\n/*\n * test a unsuccessful flush\n*/\n//create a basic stream class\nclass VariableStream {\n    var $position;\n    var $varname;\n    function stream_open($path, $mode, $options, &$opened_path)\n    {\n        return true;\n    }\n    function url_stat() {\n    }\n}\nstream_wrapper_register(\"SPLtest\", \"VariableStream\");\n$ftruncate_test = \"\";\n//end creating stream\n//open an SplFileObject using the above test stream\n$obj = New SplFileObject(\"SPLtest://ftruncate_test\");\nvar_dump($obj->fflush());\n?>")).toMatchSnapshot();
  });
});
