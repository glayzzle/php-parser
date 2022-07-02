// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/029_reflect_internal_symbols.phpt
  it("Reflect attributes on different kinds of internal symbols", function () {
    expect(parser.parseCode("<?php\n$rf = new ReflectionFunction('unserialize');\nvar_dump($rf->getAttributes());\n$rc = new ReflectionClass('DateTime');\nvar_dump($rc->getAttributes());\n$rm = $rc->getMethod('__construct');\nvar_dump($rm->getAttributes());\n$rcc = $rc->getReflectionConstant('ATOM');\nvar_dump($rcc->getAttributes());\n$rp = new ReflectionProperty('Exception', 'message');\nvar_dump($rp->getAttributes());\n?>")).toMatchSnapshot();
  });
});
