// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFixedArray_setSize_destruct.phpt
  it("SplFixedArray::setSize in offsetSet destructor (#81429)", function () {
    expect(parser.parseCode("<?php\n$values = new SplFixedArray(1);\n$values->offsetSet(0, new HasDestructor());\n$values->offsetSet(0, false);\necho \"Done\\n\";\nclass HasDestructor {\n    public function __destruct() {\n        global $values;\n        var_dump($values);\n        $values->setSize($values->getSize() - 1);\n        var_dump($values);\n    }\n}\n$values->setSize(5);\n$values->offsetSet(4, new HasDestructor());\necho \"Done\\n\";")).toMatchSnapshot();
  });
});
