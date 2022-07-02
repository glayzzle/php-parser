// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_002.phpt
  it("Testing call_user_func() with autoload and passing invalid params", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class) {\n    var_dump($class);\n});\ntry {\n    call_user_func(array('foo', 'bar'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    call_user_func(array('', 'bar'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    call_user_func(array($foo, 'bar'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    call_user_func(array($foo, ''));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
