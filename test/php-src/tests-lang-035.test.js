// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/035.phpt
  it("ZE2: set_exception_handler()", function () {
    expect(parser.parseCode("<?php\nclass MyException extends Exception {\n    function __construct($_error) {\n        $this->error = $_error;\n    }\n    function getException()\n    {\n        return $this->error;\n    }\n}\nfunction ThrowException()\n{\n    throw new MyException(\"'This is an exception!'\");\n}\ntry {\n} catch (MyException $exception) {\n    print \"There shouldn't be an exception: \" . $exception->getException();\n    print \"\\n\";\n}\ntry {\n    ThrowException();\n} catch (MyException $exception) {\n    print \"There was an exception: \" . $exception->getException();\n    print \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
