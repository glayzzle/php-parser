// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/add-and-stripcslashes.phpt
  it("addcslashes() and stripcslashes() function", function () {
    expect(parser.parseCode("<?php\necho addcslashes(\"\", \"\").\"\\n\";\necho addcslashes(\"\", \"burp\").\"\\n\";\necho addcslashes(\"kaboemkara!\", \"\").\"\\n\";\necho addcslashes(\"foobarbaz\", 'bar').\"\\n\";\necho addcslashes('foo[ ]', 'A..z').\"\\n\";\necho @addcslashes(\"zoo['.']\", 'z..A').\"\\n\";\necho addcslashes('abcdefghijklmnopqrstuvwxyz', \"a\\145..\\160z\").\"\\n\";\necho \"\\n\\r\" == stripcslashes('\\n\\r'),\"\\n\";\necho stripcslashes('\\065\\x64').\"\\n\";\necho stripcslashes('').\"\\n\";\n?>")).toMatchSnapshot();
  });
});
