// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/readline_callback_handler_install_001.phpt
  it("readline_callback_handler_install(): Basic test", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    readline_callback_handler_remove();\n}\nvar_dump(readline_callback_handler_install('testing: ', 'foo'));\ntry {\n    var_dump(readline_callback_handler_install('testing: ', 'foobar!'));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
