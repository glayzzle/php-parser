// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug72663_2.phpt
  it("Bug #72663 (2): Don't allow references into failed unserialize", function () {
    expect(parser.parseCode("<?php\nclass obj implements Serializable {\n    public $data;\n    function serialize() {\n        return serialize($this->data);\n    }\n    function unserialize($data) {\n        $this->data = unserialize($data);\n    }\n}\n$inner = 'a:1:{i:0;O:9:\"Exception\":2:{s:7:\"'.\"\\0\".'*'.\"\\0\".'file\";s:0:\"\";}';\n$exploit = 'a:2:{i:0;C:3:\"obj\":'.strlen($inner).':{'.$inner.'}i:1;R:4;}';\nvar_dump(unserialize($exploit));\n?>")).toMatchSnapshot();
  });
});
