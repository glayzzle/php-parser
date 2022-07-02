// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30161.phpt
  it("Bug #30161 (Segmentation fault with exceptions)", function () {
    expect(parser.parseCode("<?php\nclass FIIFO {\n        public function __construct() {\n                throw new Exception;\n        }\n}\nclass hariCow extends FIIFO {\n        public function __construct() {\n                try {\n                        parent::__construct();\n                } catch(Exception $e) {\n                }\n        }\n        public function __toString() {\n                return \"ok\\n\";\n        }\n}\n$db = new hariCow;\necho $db;\n?>")).toMatchSnapshot();
  });
});
