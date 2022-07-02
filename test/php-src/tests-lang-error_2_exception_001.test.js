// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/error_2_exception_001.phpt
  it("ZE2 errors caught as exceptions", function () {
    expect(parser.parseCode("<?php\nclass MyException extends Exception {\n    function __construct($_errno, $_errmsg) {\n        $this->errno = $_errno;\n        $this->errmsg = $_errmsg;\n    }\n    function getErrno() {\n        return $this->errno;\n    }\n    function getErrmsg() {\n        return $this->errmsg;\n    }\n}\nfunction ErrorsToExceptions($errno, $errmsg) {\n    throw new MyException($errno, $errmsg);\n}\nset_error_handler(\"ErrorsToExceptions\");\n// make sure it isn't catching exceptions that weren't\n// thrown...\ntry {\n} catch (MyException $exception) {\n    echo \"There was an exception: \" . $exception->getErrno() . \", '\" . $exception->getErrmsg() . \"'\\n\";\n}\ntry {\n    trigger_error(\"I will become an exception\", E_USER_ERROR);\n} catch (MyException $exception) {\n    echo \"There was an exception: \" . $exception->getErrno() . \", '\" . $exception->getErrmsg() . \"'\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
