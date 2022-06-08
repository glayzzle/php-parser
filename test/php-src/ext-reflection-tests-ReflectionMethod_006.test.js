// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_006.phpt
  it("ReflectionMethod methods - wrong num args", function () {
    expect(parser.parseCode("<?php\ntry {\n    new ReflectionMethod();\n} catch (ArgumentCountError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\ntry {\n    new ReflectionMethod('a', 'b', 'c');\n} catch (ArgumentCountError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
