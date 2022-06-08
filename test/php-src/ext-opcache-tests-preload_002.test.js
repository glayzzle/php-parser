// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_002.phpt
  it("Preloading prototypes", function () {
    expect(parser.parseCode("<?php\nvar_dump((new ReflectionMethod('x', 'foo'))->getPrototype()->class);\nvar_dump((new ReflectionMethod('x', 'bar'))->getPrototype()->class);\n?>\nOK")).toMatchSnapshot();
  });
});
