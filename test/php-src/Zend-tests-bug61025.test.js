// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61025.phpt
  it("Bug #61025 (__invoke() visibility not honored)", function () {
    expect(parser.parseCode("<?php\nclass Bar {\n    private function __invoke() {\n        return __CLASS__;\n    }\n}\n$b = new Bar;\necho $b();\necho $b->__invoke();\n?>")).toMatchSnapshot();
  });
});
