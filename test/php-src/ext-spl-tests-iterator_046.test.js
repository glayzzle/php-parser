// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_046.phpt
  it("SPL: CachingIterator and __toString using bypassed string keys", function () {
    expect(parser.parseCode("<?php\nclass MyFoo\n{\n    function __toString()\n    {\n        return 'foo';\n    }\n}\nclass MyCachingIterator extends CachingIterator\n{\n    function __construct(Iterator $it, $flags = 0)\n    {\n        parent::__construct($it, $flags);\n    }\n    function fill()\n    {\n        echo __METHOD__ . \"()\\n\";\n        foreach($this as $v) ;\n    }\n    function show()\n    {\n        echo __METHOD__ . \"()\\n\";\n        foreach($this as $v)\n        {\n            var_dump((string)$this);\n        }\n    }\n}\n$it = new MyCachingIterator(new ArrayIterator(array(0, 'foo'=>1, 'bar'=>2)), CachingIterator::TOSTRING_USE_KEY);\n$it->fill();\n$it->show();\n?>")).toMatchSnapshot();
  });
});
