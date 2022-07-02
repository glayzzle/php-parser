// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/006.phpt
  it("strncasecmp() tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(strncasecmp(\"\", \"\", -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(strncasecmp(\"aef\", \"dfsgbdf\", 0));\nvar_dump(strncasecmp(\"aef\", \"dfsgbdf\", 10));\nvar_dump(strncasecmp(\"qwe\", \"qwer\", 3));\nvar_dump(strncasecmp(\"qwerty\", \"QweRty\", 6));\nvar_dump(strncasecmp(\"qwErtY\", \"qwer\", 7));\nvar_dump(strncasecmp(\"q123\", \"Q123\", 3));\nvar_dump(strncasecmp(\"01\", \"01\", 1000));\n?>")).toMatchSnapshot();
  });
});
