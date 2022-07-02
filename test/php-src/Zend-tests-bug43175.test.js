// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43175.phpt
  it("Bug #43175 (__destruct() throwing an exception with __call() causes segfault)", function () {
    expect(parser.parseCode("<?php\nclass foobar {\n    public function __destruct() {\n        throw new Exception();\n    }\n    public function __call($m, $a) {\n        return $this;\n    }\n}\nfunction foobar() {\n    return new foobar();\n}\ntry {\n    foobar()->unknown();\n} catch (Exception $e) {\n    echo \"__call via traditional factory should be caught\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
