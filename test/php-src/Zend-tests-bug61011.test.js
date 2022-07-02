// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61011.phpt
  it("Bug #61011 (Crash when an exception is thrown by autoloader accessing a static property)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n    throw new Exception($name);\n});\ntry {\n    echo AAA::$a; //zend_fetch_var_address_helper\n} catch (Exception $e) {\n    try {\n        echo AAA::XXX; //ZEND_FETCH_CONSTANT\n    } catch (Exception $e) {\n        try {\n            echo AAA::foo(); //ZEND_INIT_STATIC_METHOD_CALL\n        } catch (Exception $e) {\n            try  {\n                unset(AAA::$a); // ZEND_UNSET_VAR\n            } catch (Exception $e){\n                try {\n                    isset(AAAA::$a); // ZEND_ISSET_ISEMPTY_VAR\n                } catch (Exception $e) {\n                    try  {\n                        $a = array(\"AAA\", \"foo\");\n                        $a(); //ZEND_INIT_FCALL_BY_NAME\n                    } catch (Exception $e) {\n                    }\n                }\n            }\n        }\n    }\n}\necho 'okey';")).toMatchSnapshot();
  });
});
