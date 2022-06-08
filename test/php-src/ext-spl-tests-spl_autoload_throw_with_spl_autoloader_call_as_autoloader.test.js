// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_throw_with_spl_autoloader_call_as_autoloader.phpt
  it("spl_autoload_register() function - warn when using spl_autoload_call() as the autoloading function", function () {
    expect(parser.parseCode("<?php\ntry {\n    spl_autoload_register('spl_autoload_call');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
