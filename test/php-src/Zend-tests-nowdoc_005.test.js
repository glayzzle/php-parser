// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nowdoc_005.phpt
  it("unbraced complex variable replacement test (nowdoc)", function () {
    expect(parser.parseCode("<?php\nrequire_once 'nowdoc.inc';\nprint <<<'ENDOFNOWDOC'\nThis is nowdoc test #s $a, $b, $c['c'], and $d->d.\nENDOFNOWDOC;\n$x = <<<'ENDOFNOWDOC'\nThis is nowdoc test #s $a, $b, $c['c'], and $d->d.\nENDOFNOWDOC;\nprint \"{$x}\";\n?>")).toMatchSnapshot();
  });
});
