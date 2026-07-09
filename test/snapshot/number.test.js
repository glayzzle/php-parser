const parser = require("../main");

describe("Test numbers", function () {
  it("test common cases", function () {
    expect(
      parser.parseEval(`
      1234;
      $a = -1.5;
      $b = 1234;
      $c = 9223372036854775807;
      $c = 9223372036854775808;
      $d = 0x1A;
      $d = 0xFF;
      $e = 0b1011;
      $f = 0123;
      $g = 1.2e3;
      $h = 7E-10;
    `),
    ).toMatchSnapshot();
  });

  it("test underscore separators in hex/binary/octal", function () {
    expect(
      parser.parseEval(`
      $a = 0x1_A2_B3;
      $b = 0b1010_0101;
      $c = 0o7_6_5;
    `),
    ).toMatchSnapshot();
  });

  it.each([
    ["hexa without hex", "$a = 0xx;"],
    ["binary with 2", "$b = 0b2;"],
    ["multiple points", "$b = 1.0.5;"],
    // @fixme : PHP Parse error:  Invalid numeric literal in %s
    // ["octal with 9", "$c = 01239;"],
    ["exponent with letter", "$d = 7E-a;"],
    ["variant (for coverage)", "$d = 7e+a;"],
    ["exponent empty", "$e = 7EX;"],
    ["underscore #1", "$e = 7__0;"],
    ["underscore #2", "$e = 7._0;"],
    ["underscore #3", "$e = 7_.0;"],
    ["underscore #4", "$e = 7e_0;"],
    ["underscore #5", "$e = 7_e0;"],
    ["hex consecutive underscores", "$e = 0x1__2;"],
    ["hex trailing underscore", "$e = 0x1_ + 1;"],
    ["binary consecutive underscores", "$e = 0b1__0;"],
    ["binary trailing underscore", "$e = 0b1_ + 1;"],
    ["octal consecutive underscores", "$e = 0o7__1;"],
    ["octal trailing underscore", "$e = 0o7_ + 1;"],
  ])("%s", function (_, code) {
    const ast = parser.parseEval(code, {
      parser: {
        suppressErrors: true,
      },
    });
    // expect to fail
    expect(ast.errors.length).toBeGreaterThan(0);
    // check structure
    expect(ast).toMatchSnapshot();
  });
});
