// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug75049.phpt
  it("Bug #75049 (spl_autoload_unregister can't handle spl_autoload_functions results)", function () {
    expect(parser.parseCode("<?php\nclass Auto { public static function loader() {}}\n$autoloader = '\\Auto::loader';\necho (int)spl_autoload_register($autoloader);\necho (int)spl_autoload_unregister($autoloader);\necho (int)spl_autoload_register($autoloader);\nforeach (spl_autoload_functions() as $loader) {\n    echo (int)spl_autoload_unregister($loader);\n}\necho (int)count(spl_autoload_functions());\n?>")).toMatchSnapshot();
  });
});
