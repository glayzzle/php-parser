// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug73896.phpt
  it("Bug #73896 (spl_autoload() crashes when calls magic _call())", function () {
    expect(parser.parseCode("<?php\nclass Registrator {\n    public static function call($callable, array  $args) {\n        return call_user_func_array($callable, [$args]);\n    }\n}\nclass teLoader {\n    public function __construct() {\n        Registrator::call('spl_autoload_register', [$this, 'autoload']);\n    }\n    public function __call($method, $args) {\n        $this->doSomething();\n    }\n    protected function autoload($class) {\n        die(\"Protected autoload() called!\\n\");\n    }\n    public function doSomething() {\n        throw new teException();\n    }\n}\n$teLoader = new teLoader();\ntry {\n    new teChild();\n} catch (Throwable $e) {\n    echo \"Exception: \", $e->getMessage() , \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
