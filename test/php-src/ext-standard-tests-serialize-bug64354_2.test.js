// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug64354_2.phpt
  it("Bug #64354 (Unserialize array of objects whose class can't be autoloaded fail)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function __wakeup() {\n        throw new Exception(\"Failed\");\n    }\n}\nspl_autoload_register(\n    function($class) {\n        throw new Exception(\"Failed\");\n    }\n);\ntry {\n    var_dump(unserialize('a:2:{i:0;O:1:\"A\":0:{}i:1;O:1:\"B\":0:{}}'));\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
