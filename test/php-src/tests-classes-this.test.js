// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/this.phpt
  it("ZE2 $this cannot be exchanged", function () {
    expect(parser.parseCode("<?php\n/* please don't shorten this test. It shows what would happen if\n * the fatal error would have been a warning.\n */\nclass Foo\n{\n    function replace($other)\n    {\n        echo __METHOD__ . \"\\n\";\n        $this = $other;\n        print $this->prop;\n        print $other->prop;\n    }\n    function indirect($other)\n    {\n        echo __METHOD__ . \"\\n\";\n        $this = $other;\n        $result = $this = $other;\n        print $result->prop;\n        print $this->prop;\n    }\n    function retrieve(&$other)\n    {\n        echo __METHOD__ . \"\\n\";\n        $other = $this;\n    }\n}\n$object = new Foo;\n$object->prop = \"Hello\\n\";\n$other  = new Foo;\n$other->prop = \"World\\n\";\n$object->replace($other);\n$object->indirect($other);\nprint $object->prop; // still shows 'Hello'\n$object->retrieve($other);\nprint $other->prop;  // shows 'Hello'\n?>\n===DONE===")).toMatchSnapshot();
  });
});
