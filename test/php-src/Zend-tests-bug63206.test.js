// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63206.phpt
  it("Bug #63206 Fully support error_handler stacking, even inside the error_handler", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function() {\n    echo 'First handler' . PHP_EOL;\n});\nset_error_handler(function() {\n    echo 'Second handler' . PHP_EOL;\n    set_error_handler(function() {\n        echo 'Internal handler' . PHP_EOL;\n    });\n    $triggerInternalNotice++; // warnings while handling the error should go into internal handler\n    restore_error_handler();\n});\n$triggerNotice1++;\n$triggerNotice2++;\n?>")).toMatchSnapshot();
  });
});
