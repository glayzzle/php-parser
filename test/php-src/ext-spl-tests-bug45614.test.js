// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug45614.phpt
  it("SPL: Bug#45614 (ArrayIterator can show 1st private prop of wrapped object)", function () {
    expect(parser.parseCode("<?php\nclass C {\n    private $priv1 = 'secret1';\n    private $priv2 = 'secret2';\n    public $pub1 = 'public1';\n    public $pub2 = 'public2';\n    public $pub3 = 'public3';\n    public $pub4 = 'public4';\n}\nfunction showFirstTwoItems($it) {\n  echo str_replace(\"\\0\", '\\0', $it->key()) . \" => \" . $it->current() .\n\"\\n\";\n  $it->next();\n  echo str_replace(\"\\0\", '\\0', $it->key()) . \" => \" . $it->current() .\n\"\\n\";\n}\n$ao = new ArrayObject(new C);\n$ai = $ao->getIterator();\necho \"--> Show the first two items:\\n\";\nshowFirstTwoItems($ai);\necho \"\\n--> Rewind and show the first two items:\\n\";\n$ai->rewind();\nshowFirstTwoItems($ai);\necho \"\\n--> Invalidate current position and show the first two items:\\n\";\nunset($ai[$ai->key()]);\n$ai->current();\nshowFirstTwoItems($ai);\necho \"\\n--> Rewind, seek and show the first two items:\\n\";\n$ai->rewind();\n$ai->seek(0);\nshowFirstTwoItems($ai);\n?>")).toMatchSnapshot();
  });
});
