// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/enum_exists.phpt
  it("enum_exists", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nclass Baz {}\nspl_autoload_register(function ($className) {\n    echo \"Triggered autoloader with class $className\\n\";\n    if ($className === 'Quux') {\n        enum Quux {}\n    }\n});\nvar_dump(enum_exists(Foo::class));\nvar_dump(enum_exists(Foo::Bar::class));\nvar_dump(enum_exists(Baz::class));\nvar_dump(enum_exists(Qux::class));\nvar_dump(enum_exists(Quux::class, false));\nvar_dump(enum_exists(Quux::class, true));\nvar_dump(enum_exists(Quuz::class, false));\nvar_dump(enum_exists(Quuz::class, true));\n?>")).toMatchSnapshot();
  });
});
