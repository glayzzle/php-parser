// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug67805.phpt
  it("Bug #67805 SplFileObject setMaxLineLength", function () {
    expect(parser.parseCode("<?php\n$splFileObject = new SplFileObject(__FILE__);\n$splFileObject->setMaxLineLen(3);\n$line = $splFileObject->getCurrentLine();\nvar_dump($line === '<?p');\nvar_dump(strlen($line) === 3);\n?>")).toMatchSnapshot();
  });
});
