// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_012.phpt
  it("No autoloading during constant resolution", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n}\nvar_dump(class_exists('Test'));\ntry {\n    new Test();\n} catch (Throwable $ex) {\n    echo $ex->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
