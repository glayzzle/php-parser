// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug33136.phpt
  it("Bug #33136 (method offsetSet in class extended from ArrayObject crash PHP)", function () {
    expect(parser.parseCode("<?php\nclass Collection extends ArrayObject\n{\n    private $data;\n    function __construct()\n    {\n        $this->data = array();\n        parent::__construct($this->data);\n    }\n    function offsetGet($index): mixed\n    {\n        echo __METHOD__ . \"($index)\\n\";\n        return parent::offsetGet($index);\n    }\n    function offsetSet($index, $value): void\n    {\n        echo __METHOD__ . \"(\" . (is_null($index) ? \"NULL\" : $index) . \",$value)\\n\";\n        parent::offsetSet($index, $value);\n    }\n}\necho \"\\n\\nInitiate Obj\\n\";\n$arrayObj = new Collection();\necho \"Assign values\\n\";\n$arrayObj[] = \"foo\";\nvar_dump($arrayObj[0]);\n$arrayObj[] = \"bar\";\nvar_dump($arrayObj[0]);\nvar_dump($arrayObj[1]);\n$arrayObj[\"foo\"] = \"baz\";\nvar_dump($arrayObj[\"foo\"]);\nprint_r($arrayObj);\nvar_dump(count($arrayObj));\n?>")).toMatchSnapshot();
  });
});
