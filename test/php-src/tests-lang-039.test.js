// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/039.phpt
  it("Catch Interfaces", function () {
    expect(parser.parseCode("<?php\ninterface Catchable\n{\n}\nclass MyException extends Exception implements Catchable\n{\n    function __construct($errstr, $errno, $errfile, $errline)\n    {\n        parent::__construct($errstr, $errno);\n        $this->file = $errfile;\n        $this->line = $errline;\n    }\n}\nfunction Error2Exception($errno, $errstr, $errfile, $errline)\n{\n    throw new MyException($errstr, $errno, $errfile, $errline);\n}\n$err_msg = 'no exception';\nset_error_handler('Error2Exception');\ntry\n{\n    $con = fopen('/tmp/a_file_that_does_not_exist','r');\n}\ncatch (Catchable $e)\n{\n    echo \"Catchable\\n\";\n}\ncatch (Exception $e)\n{\n    echo \"Exception\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
