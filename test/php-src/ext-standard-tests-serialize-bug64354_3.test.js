// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug64354_3.phpt
  it("Bug #64354 (Unserialize array of objects whose class can't be autoloaded fail)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function __sleep() {\n        throw new Exception(\"Failed\");\n    }\n}\nclass B implements Serializable {\n    public function serialize() {\n        return NULL;\n    }\n    public function unserialize($data) {\n    }\n}\n$data = array(new A, new B);\ntry {\n    serialize($data);\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
