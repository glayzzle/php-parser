// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug54292.phpt
  it("Bug #54292 (Wrong parameter causes crash in SplFileObject::__construct())", function () {
    expect(parser.parseCode("<?php\ntry {\n    new SplFileObject('foo', array());\n} catch (TypeError $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
