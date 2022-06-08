// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_009.phpt
  it("Preloading class using trait with undefined class constant access", function () {
    expect(parser.parseCode("<?php\nvar_dump(trait_exists('T'));\nvar_dump(class_exists('Foo'));\ntry {\n    new Foo();\n} catch (Throwable $ex) {\n    echo $ex->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
