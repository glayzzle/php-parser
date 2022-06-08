// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_027.phpt
  it("Closure 027: Testing Closure type-hint", function () {
    expect(parser.parseCode("<?php\nfunction test(Closure $a) {\n    var_dump($a());\n}\ntest(function() { return new stdclass; });\ntest(function() { });\n$a = function($x) use ($y) {};\ntry {\n    test($a);\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\ntest(new stdclass);\n?>")).toMatchSnapshot();
  });
});
