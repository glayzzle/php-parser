// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/004.phpt
  it("strncmp() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(strncmp(\"\", \"\", 100));\ntry {\n    var_dump(strncmp(\"aef\", \"dfsgbdf\", -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(strncmp(\"fghjkl\", \"qwer\", 0));\nvar_dump(strncmp(\"qwerty\", \"qwerty123\", 6));\nvar_dump(strncmp(\"qwerty\", \"qwerty123\", 7));\n?>")).toMatchSnapshot();
  });
});
