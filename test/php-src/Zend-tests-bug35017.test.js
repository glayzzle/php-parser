// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug35017.phpt
  it("Bug #35017 (Exception thrown in error handler may cause unexpected behavior)", function () {
    expect(parser.parseCode("<?php\nset_error_handler('errorHandler');\ntry {\n    if ($a) {\n        echo \"1\\n\";\n    } else {\n        echo \"0\\n\";\n    }\n    echo \"?\\n\";\n} catch(Exception $e) {\n  echo \"This Exception should be caught\\n\";\n}\nfunction errorHandler($errno, $errstr, $errfile, $errline) {\n    throw new Exception('Some Exception');\n}\n?>")).toMatchSnapshot();
  });
});
