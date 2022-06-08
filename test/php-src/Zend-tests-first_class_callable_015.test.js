// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_015.phpt
  it("First class callables and strict types", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nfunction test(int $i) {\n    var_dump($i);\n}\nrequire __DIR__ . '/first_class_callable_015_weak.inc';\nrequire __DIR__ . '/first_class_callable_015_strict.inc';\n$fn = test(...);\ndo_weak_call($fn);\ntry {\n    do_strict_call($fn);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
