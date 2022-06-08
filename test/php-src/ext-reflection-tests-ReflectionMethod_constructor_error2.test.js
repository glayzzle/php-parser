// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_constructor_error2.phpt
  it("ReflectionMethod constructor errors", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    public function foo() {\n    }\n}\ntry {\n    echo \"Too few arguments:\\n\";\n    $methodInfo = new ReflectionMethod();\n} catch (ArgumentCountError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\ntry {\n    echo \"\\nToo many arguments:\\n\";\n    $methodInfo = new ReflectionMethod(\"TestClass\", \"foo\", true);\n} catch (ArgumentCountError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\ntry {\n    //invalid class\n    $methodInfo = new ReflectionMethod(\"InvalidClassName\", \"foo\");\n} catch (ReflectionException $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\ntry {\n    //invalid 1st param\n    $methodInfo = new ReflectionMethod([], \"foo\");\n} catch (TypeError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\ntry{\n    //invalid 2nd param\n    $methodInfo = new ReflectionMethod(\"TestClass\", []);\n} catch (TypeError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
