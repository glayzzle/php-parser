// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug52879.phpt
  it("Bug #52879 (Objects unreferenced in __get, __set, __isset or __unset can be freed too early)", function () {
    expect(parser.parseCode("<?php\nclass MyClass {\n    public $myRef;\n    public function __set($property,$value) {\n        $this->myRef = $value;\n    }\n}\n$myGlobal=new MyClass();\n$myGlobal->myRef=&$myGlobal;\n$myGlobal->myNonExistentProperty=\"ok\\n\";\necho $myGlobal;\n?>")).toMatchSnapshot();
  });
});
