// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump13.phpt
  it("jump 10: goto with try blocks", function () {
    expect(parser.parseCode("<?php\ngoto a;\ne: return;\ntry {\n    a: print 1;\n    goto b;\n    try {\n        b: print 2;\n        goto c;\n    }\n    catch(Exception $e) {\n        c: print 3;\n        goto d;\n    }\n}\ncatch(Exception $e) {\n    d: print 4;\n    goto e;\n}\n?>")).toMatchSnapshot();
  });
});
