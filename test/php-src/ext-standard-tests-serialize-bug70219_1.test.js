// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug70219_1.phpt
  it("Bug #70219 Use after free vulnerability in session deserializer", function () {
    expect(parser.parseCode("<?php\nini_set('session.serialize_handler', 'php_serialize');\nsession_start();\nclass obj implements Serializable {\n    var $data;\n    function serialize() {\n        return serialize($this->data);\n    }\n    function unserialize($data) {\n        session_decode($data);\n    }\n}\n$inner = 'r:2;';\n$exploit = 'a:2:{i:0;C:3:\"obj\":'.strlen($inner).':{'.$inner.'}i:1;C:3:\"obj\":'.strlen($inner).':{'.$inner.'}}';\n$data = unserialize($exploit);\nfor ($i = 0; $i < 5; $i++) {\n    $v[$i] = 'hi'.$i;\n}\nvar_dump($data);\nvar_dump($_SESSION);\n?>")).toMatchSnapshot();
  });
});
