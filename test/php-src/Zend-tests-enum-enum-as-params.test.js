// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/enum-as-params.phpt
  it("Enum types as parameters", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nenum Baz {\n    case Qux;\n}\nfunction takesFoo(Foo $foo) {}\nfunction takesBaz(Baz $baz) {}\ntakesFoo(Foo::Bar);\ntakesBaz(Baz::Qux);\ntry {\n    takesBaz(Foo::Bar);\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    takesFoo(Baz::Qux);\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
