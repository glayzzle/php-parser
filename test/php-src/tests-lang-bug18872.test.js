// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug18872.phpt
  it("Bug #18872 (class constant used as default parameter)", function () {
    expect(parser.parseCode("<?php\nclass FooBar {\n    const BIFF = 3;\n}\nfunction foo($biff = FooBar::BIFF) {\n    echo $biff . \"\\n\";\n}\nfoo();\nfoo();\n?>")).toMatchSnapshot();
  });
});
