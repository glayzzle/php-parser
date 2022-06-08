// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/catch.phpt
  it("catch shouldn't call autoloader", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n    echo(\"AUTOLOAD '$name'\\n\");\n    eval(\"class $name {}\");\n});\ntry {\n} catch (A $e) {\n}\ntry {\n  throw new Exception();\n} catch (B $e) {\n} catch (Exception $e) {\n    echo \"ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
