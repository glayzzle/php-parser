// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/warning_replay.phpt
  it("Opcache should replay compilation warnings if opcache.record_warnings=1", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/warning_replay.inc';\nrequire __DIR__ . '/warning_replay.inc';\n?>")).toMatchSnapshot();
  });
});
