// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_004.phpt
  it("Preloading class with undefined class constant access", function () {
    expect(parser.parseCode("<?php\nvar_dump(class_exists('Foo'));\ntry {\n   new Foo();\n} catch (Throwable $ex) {\n\techo $ex->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
