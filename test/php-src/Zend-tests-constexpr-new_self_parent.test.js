// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constexpr/new_self_parent.phpt
  it("new self / new parent in constant expression", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static function invalid($x = new parent) {\n    }\n}\nclass B extends A {\n    public static function method($x = new self, $y = new parent) {\n        var_dump($x, $y);\n    }\n}\nfunction invalid($x = new self) {}\nB::method();\ntry {\n    invalid();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    B::invalid();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
