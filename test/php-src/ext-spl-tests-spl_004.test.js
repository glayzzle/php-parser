// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_004.phpt
  it("SPL: iterator_apply()", function () {
    expect(parser.parseCode("<?php\nfunction my_error_handler($errno, $errstr, $errfile, $errline) {\n    echo \"Error: $errstr\\n\";\n}\nset_error_handler('my_error_handler');\nfunction test_arg($arg)\n{\n    if ($arg instanceof Iterator)\n    {\n        var_dump($arg->key());\n        var_dump($arg->current());\n    }\n    else\n    {\n        var_dump($arg);\n    }\n    return true;\n}\nfunction test()\n{\n    static $arg = 0;\n    var_dump($arg++);\n    return true;\n}\n$it = new RecursiveArrayIterator(array(1, array(21, 22), 3));\nvar_dump(iterator_apply($it, 'test', NULL));\necho \"===ARGS===\\n\";\nvar_dump(iterator_apply($it, 'test_arg', array($it)));\necho \"===RECURSIVE===\\n\";\n$it = new RecursiveIteratorIterator($it);\nvar_dump(iterator_apply($it, 'test'));\necho \"===ERRORS===\\n\";\ntry {\n    var_dump(iterator_apply($it, 'test', 1));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(iterator_apply($it, 'non_existing_function'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(iterator_apply($it, 'non_existing_function', NULL, 2));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
