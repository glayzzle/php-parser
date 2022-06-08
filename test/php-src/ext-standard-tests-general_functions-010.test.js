// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/010.phpt
  it("register_shutdown_function() & __call", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function _foo() {\n        throw new Exception('test');\n    }\n    function __call($name=null, $args=null) {\n        return test::_foo();\n    }\n}\ntry {\n    var_dump(register_shutdown_function(array(\"test\",\"__call\")));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
