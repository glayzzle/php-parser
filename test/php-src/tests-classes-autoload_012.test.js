// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_012.phpt
  it("Ensure callback methods in unknown classes trigger autoload.", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n    echo \"In autoload: \";\n    var_dump($name);\n});\ntry {\n    call_user_func(\"UndefC::test\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
