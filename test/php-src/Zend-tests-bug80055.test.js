// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80055.phpt
  it("Bug #80055: Abstract trait methods returning \"self\" cannot be fulfilled by traits", function () {
    expect(parser.parseCode("<?php\ntrait AbstractTrait {\n    abstract public function selfReturner(): self;\n}\ntrait ConcreteTrait {\n    public function selfReturner(): self {\n        return $this;\n    }\n}\nclass Test {\n    use AbstractTrait;\n    use ConcreteTrait;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
