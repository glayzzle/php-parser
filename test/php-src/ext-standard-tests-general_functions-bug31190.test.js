// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug31190.phpt
  it("Bug #31190 (exception in call_user_func_array())", function () {
    expect(parser.parseCode("<?php\nclass test {\n     function throwException() { throw new Exception(\"Hello World!\\n\");\n} }\n$array = array(new test(), 'throwException');\ntry {\n     call_user_func($array, 1, 2);\n} catch (Exception $e) {\n     echo $e->getMessage();\n}\ntry {\n     call_user_func_array($array, array(1, 2));\n} catch (Exception $e) {\n     echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
