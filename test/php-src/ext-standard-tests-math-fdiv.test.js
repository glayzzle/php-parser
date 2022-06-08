// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/fdiv.phpt
  it("fdiv() function", function () {
    expect(parser.parseCode("<?php\nvar_dump(fdiv(10, 3));\nvar_dump(fdiv(10., 3.));\nvar_dump(fdiv(-10., 2.5));\nvar_dump(fdiv(10., -2.5));\necho \"\\n\";\nvar_dump(fdiv(10., 0.));\nvar_dump(fdiv(10., -0.));\nvar_dump(fdiv(-10., 0.));\nvar_dump(fdiv(-10., -0.));\necho \"\\n\";\nvar_dump(fdiv(INF, 0.));\nvar_dump(fdiv(INF, -0.));\nvar_dump(fdiv(-INF, 0.));\nvar_dump(fdiv(-INF, -0.));\necho \"\\n\";\nvar_dump(fdiv(0., 0.));\nvar_dump(fdiv(0., -0.));\nvar_dump(fdiv(-0., 0.));\nvar_dump(fdiv(-0., -0.));\necho \"\\n\";\nvar_dump(fdiv(INF, INF));\nvar_dump(fdiv(INF, -INF));\nvar_dump(fdiv(-INF, INF));\nvar_dump(fdiv(-INF, -INF));\necho \"\\n\";\nvar_dump(fdiv(0., INF));\nvar_dump(fdiv(0., -INF));\nvar_dump(fdiv(-0., INF));\nvar_dump(fdiv(-0., -INF));\necho \"\\n\";\nvar_dump(fdiv(NAN, NAN));\nvar_dump(fdiv(INF, NAN));\nvar_dump(fdiv(0., NAN));\nvar_dump(fdiv(NAN, INF));\nvar_dump(fdiv(NAN, 0.));\n?>")).toMatchSnapshot();
  });
});
