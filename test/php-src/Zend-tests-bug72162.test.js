// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72162.phpt
  it("Bug #72162 (use-after-free - error_reporting)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$var11 = new StdClass();\ntry {\n    $var16 = error_reporting($var11);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
