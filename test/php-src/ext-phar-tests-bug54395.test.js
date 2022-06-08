// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug54395.phpt
  it("Bug #54395 (Phar::mount() crashes when calling with wrong parameters)", function () {
    expect(parser.parseCode("<?php\ntry {\n    phar::mount(1,1);\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
