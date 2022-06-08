// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/038.phpt
  it("Convert warnings to exceptions", function () {
    expect(parser.parseCode("<?php\nclass MyException extends Exception\n{\n    function __construct($errstr, $errno=0, $errfile='', $errline=0)\n    {\n        parent::__construct($errstr, $errno);\n        $this->file = $errfile;\n        $this->line = $errline;\n    }\n}\nfunction Error2Exception($errno, $errstr, $errfile, $errline)\n{\n    throw new MyException($errstr, $errno);//, $errfile, $errline);\n}\n$err_msg = 'no exception';\nset_error_handler('Error2Exception');\ntry\n{\n    $con = fopen(\"/tmp/a_file_that_does_not_exist\",'r');\n}\ncatch (Exception $e)\n{\n    $trace = $e->getTrace();\n    var_dump($trace[0]['function']);\n    var_dump($trace[1]['function']);\n}\n?>")).toMatchSnapshot();
  });
});
