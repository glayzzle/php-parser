// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_012.phpt
  it("Live range of ZEND_NEW must be assigned to correct variable", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static function test() {\n        self::$property = new self;\n    }\n}\ntry {\n    Foo::test();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
