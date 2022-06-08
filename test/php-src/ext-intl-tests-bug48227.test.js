// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug48227.phpt
  it("Bug #48227 (NumberFormatter::format leaks memory)", function () {
    expect(parser.parseCode("<?php\n$x = new NumberFormatter('en_US', NumberFormatter::DECIMAL);\nforeach (['', 1, NULL, $x] as $value) {\n    try {\n        var_dump($x->format($value));\n    } catch (TypeError $ex) {\n        echo $ex->getMessage(), PHP_EOL;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
