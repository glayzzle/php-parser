// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61782.phpt
  it("Bug #61782 (__clone/__destruct do not match other methods when checking access controls)", function () {
    expect(parser.parseCode("<?php\n abstract class BaseClass {\n        abstract protected function __clone();\n    }\n    class MommasBoy extends BaseClass {\n        protected function __clone() {\n            echo __METHOD__, \"\\n\";\n        }\n    }\n    class LatchkeyKid extends BaseClass {\n        public function __construct() {\n            echo 'In ', __CLASS__, \":\\n\";\n            $kid = new MommasBoy();\n            $kid = clone $kid;\n        }\n        public function __clone() {}\n    }\n    $obj = new LatchkeyKid();\necho \"DONE\\n\";\n?>")).toMatchSnapshot();
  });
});
