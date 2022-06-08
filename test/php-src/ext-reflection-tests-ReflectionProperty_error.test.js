// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionProperty_error.phpt
  it("Test ReflectionProperty class errors.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public static $p;\n}\ntry {\n    new ReflectionProperty();\n} catch (TypeError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\ntry {\n    new ReflectionProperty('C::p');\n} catch (TypeError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\ntry {\n    new ReflectionProperty('C', 'p', 'x');\n} catch (TypeError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
