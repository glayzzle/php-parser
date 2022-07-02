// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug29210.phpt
  it("Bug #29210 (Function is_callable does not support private and protected methods)", function () {
    expect(parser.parseCode("<?php\nclass test_class {\n   private function test_func1() {\n     echo \"test_func1\\n\";\n   }\n   protected function test_func2() {\n     echo \"test_func2\\n\";\n   }\n   static private function test_func3() {\n     echo \"test_func3\\n\";\n   }\n   static protected function test_func4() {\n     echo \"test_func4\\n\";\n   }\n   function test() {\n     if (is_callable(array($this,'test_func1'))) {\n         $this->test_func1();\n     } else {\n       echo \"test_func1 isn't callable from inside\\n\";\n     }\n     if (is_callable(array($this,'test_func2'))) {\n         $this->test_func2();\n     } else {\n       echo \"test_func2 isn't callable from inside\\n\";\n     }\n     if (is_callable(array('test_class','test_func3'))) {\n         test_class::test_func3();\n     } else {\n       echo \"test_func3 isn't callable from inside\\n\";\n     }\n     if (is_callable(array('test_class','test_func4'))) {\n         test_class::test_func4();\n     } else {\n       echo \"test_func4 isn't callable from inside\\n\";\n     }\n   }\n}\nclass foo extends test_class {\n   function test() {\n     if (is_callable(array($this,'test_func1'))) {\n         $this->test_func1();\n     } else {\n       echo \"test_func1 isn't callable from child\\n\";\n     }\n     if (is_callable(array($this,'test_func2'))) {\n         $this->test_func2();\n     } else {\n       echo \"test_func2 isn't callable from child\\n\";\n     }\n     if (is_callable(array('test_class','test_func3'))) {\n         test_class::test_func3();\n     } else {\n       echo \"test_func3 isn't callable from child\\n\";\n     }\n     if (is_callable(array('test_class','test_func4'))) {\n         test_class::test_func4();\n     } else {\n       echo \"test_func4 isn't callable from child\\n\";\n     }\n   }\n}\n$object = new test_class;\n$object->test();\nif (is_callable(array($object,'test_func1'))) {\n    $object->test_func1();\n} else {\n  echo \"test_func1 isn't callable from outside\\n\";\n}\nif (is_callable(array($object,'test_func2'))) {\n    $object->test_func2();\n} else {\n  echo \"test_func2 isn't callable from outside\\n\";\n}\nif (is_callable(array('test_class','test_func3'))) {\n  test_class::test_func3();\n} else {\n  echo \"test_func3 isn't callable from outside\\n\";\n}\nif (is_callable(array('test_class','test_func4'))) {\n  test_class::test_func4();\n} else {\n  echo \"test_func4 isn't callable from outside\\n\";\n}\n$object = new foo();\n$object->test();\n?>")).toMatchSnapshot();
  });
});
