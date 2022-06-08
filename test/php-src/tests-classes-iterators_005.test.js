// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/iterators_005.phpt
  it("ZE2 iterators cannot implement Traversable alone", function () {
    expect(parser.parseCode("<?php\nclass test implements Traversable {\n}\n$obj = new test;\nforeach($obj as $v);\nprint \"Done\\n\";\n/* the error doesn't show the filename but 'Unknown' */\n?>")).toMatchSnapshot();
  });
});
