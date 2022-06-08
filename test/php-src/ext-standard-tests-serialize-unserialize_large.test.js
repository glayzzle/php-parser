// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/unserialize_large.phpt
  it("Unserializing payload with unrealistically large element counts", function () {
    expect(parser.parseCode("<?php\nvar_dump(unserialize(\"a:1000000000:{}\"));\nvar_dump(unserialize(\"O:1000000000:\\\"\\\":0:{}\"));\nvar_dump(unserialize(\"O:1:\\\"X\\\":1000000000:{}\"));\nvar_dump(unserialize(\"C:1:\\\"X\\\":1000000000:{}\"));\n?>")).toMatchSnapshot();
  });
});
