// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/001.phpt
  it("serialize()/unserialize()/var_dump()", function () {
    expect(parser.parseCode("<?php\nclass t\n{\n    function __construct()\n    {\n        $this->a = \"hallo\";\n    }\n}\nclass s\n{\n    public $a;\n    public $b;\n    public $c;\n    function __construct()\n    {\n        $this->a = \"hallo\";\n        $this->b = \"php\";\n        $this->c = \"world\";\n        $this->d = \"!\";\n    }\n    function __sleep()\n    {\n        echo \"__sleep called\\n\";\n        return array(\"a\",\"c\");\n    }\n    function __wakeup()\n    {\n        echo \"__wakeup called\\n\";\n    }\n}\necho serialize(NULL).\"\\n\";\necho serialize((bool) true).\"\\n\";\necho serialize((bool) false).\"\\n\";\necho serialize(1).\"\\n\";\necho serialize(0).\"\\n\";\necho serialize(-1).\"\\n\";\necho serialize(2147483647).\"\\n\";\necho serialize(-2147483647).\"\\n\";\necho serialize(1.123456789).\"\\n\";\necho serialize(1.0).\"\\n\";\necho serialize(0.0).\"\\n\";\necho serialize(-1.0).\"\\n\";\necho serialize(-1.123456789).\"\\n\";\necho serialize(\"hallo\").\"\\n\";\necho serialize(array(1,1.1,\"hallo\",NULL,true,array())).\"\\n\";\n$t = new t();\n$data = serialize($t);\necho \"$data\\n\";\n$t = unserialize($data);\nvar_dump($t);\n$t = new s();\n$data = serialize($t);\necho \"$data\\n\";\n$t = unserialize($data);\nvar_dump($t);\n$a = array(\"a\" => \"test\");\n$a[ \"b\" ] = &$a[ \"a\" ];\nvar_dump($a);\n$data = serialize($a);\necho \"$data\\n\";\n$a = unserialize($data);\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
