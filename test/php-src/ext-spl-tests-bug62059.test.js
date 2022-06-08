// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug62059.phpt
  it("Bug #62059: ArrayObject and isset are not friends", function () {
    expect(parser.parseCode("<?php\nclass MyArrayObject1 extends ArrayObject {\n    public function offsetGet($name): mixed {\n        echo \"offsetGet($name)\\n\";\n        return parent::offsetGet($name);\n    }\n    public function offsetExists($name): bool {\n        echo \"offsetExists($name)\\n\";\n        return parent::offsetExists($name);\n    }\n}\nclass MyArrayObject2 extends ArrayObject {\n    public function offsetGet($name): mixed {\n        echo \"offsetGet($name)\\n\";\n        return parent::offsetGet($name);\n    }\n}\nclass MyArrayObject3 extends ArrayObject {\n    public function offsetExists($name): bool {\n        echo \"offsetExists($name)\\n\";\n        return parent::offsetExists($name);\n    }\n}\n$arr = [1 => [1 => 42]];\n$ao = new ArrayObject($arr);\nvar_dump(isset($ao[0][1]));\nvar_dump(isset($ao[1][0]));\nvar_dump(isset($ao[1][1]));\n$ao = new MyArrayObject1($arr);\nvar_dump(isset($ao[0][1]));\nvar_dump(isset($ao[1][0]));\nvar_dump(isset($ao[1][1]));\n$ao = new MyArrayObject2($arr);\nvar_dump(isset($ao[0][1]));\nvar_dump(isset($ao[1][0]));\nvar_dump(isset($ao[1][1]));\n$ao = new MyArrayObject3($arr);\nvar_dump(isset($ao[0][1]));\nvar_dump(isset($ao[1][0]));\nvar_dump(isset($ao[1][1]));\n?>")).toMatchSnapshot();
  });
});
