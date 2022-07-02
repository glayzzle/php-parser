// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/bug76359.phpt
  it("Bug #76359 (open_basedir bypass through adding \"..\")", function () {
    expect(parser.parseCode("<?php\nini_set('open_basedir', __DIR__);\nmkdir(__DIR__ . \"/bug76359\");\nchdir(__DIR__ . \"/bug76359\");\nvar_dump(ini_set('open_basedir', ini_get('open_basedir') . PATH_SEPARATOR . \"..\"));\nchdir(\"..\");\nchdir(\"..\");\n?>")).toMatchSnapshot();
  });
});
