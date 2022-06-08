// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/implode.phpt
  it("implode() function", function () {
    expect(parser.parseCode("<?php\necho implode(array()).\"\\n\";\necho implode('nothing', array()).\"\\n\";\necho implode(array('foo', 'bar', 'baz')).\"\\n\";\necho implode(':', array('foo', 'bar', 'baz')).\"\\n\";\necho implode(':', array('foo', array('bar', 'baz'), 'burp')).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
