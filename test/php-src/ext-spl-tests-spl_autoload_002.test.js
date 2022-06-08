// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_002.phpt
  it("SPL: spl_autoload_functions()", function () {
    expect(parser.parseCode("<?php\nfunction SplAutoloadTest1($name) {}\nfunction SplAutoloadTest2($name) {}\nvar_dump(spl_autoload_functions());\nspl_autoload_register();\nvar_dump(spl_autoload_functions());\nspl_autoload_register('SplAutoloadTest1');\nspl_autoload_register('SplAutoloadTest2');\nspl_autoload_register('SplAutoloadTest1');\nvar_dump(spl_autoload_functions());\nspl_autoload_unregister('SplAutoloadTest1');\nvar_dump(spl_autoload_functions());\nspl_autoload_unregister('spl_autoload_call');\nvar_dump(spl_autoload_functions());\nspl_autoload_register();\nvar_dump(spl_autoload_functions());\nspl_autoload_unregister('spl_autoload');\nvar_dump(spl_autoload_functions());\n?>")).toMatchSnapshot();
  });
});
