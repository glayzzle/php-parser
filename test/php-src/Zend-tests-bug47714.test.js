// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47714.phpt
  it("Testing lambda function in set_exception_handler()", function () {
    expect(parser.parseCode("<?php\nfunction au($class) {\n        eval('class handler {\n                  function handle($e) {\n                      echo $e->getMessage().\"\\n\";\n                  }\n              }');\n}\nspl_autoload_register('au');\nset_exception_handler(function($exception) {\n        $h = new handler();\n        $h->handle($exception);\n});\nthrow new Exception('exception');\n?>")).toMatchSnapshot();
  });
});
