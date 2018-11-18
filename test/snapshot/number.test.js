const parser = require("../main");

describe("Test numbers", function() {
  it("test common cases", function() {
    expect(
      parser.parseEval(`
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
    `)
    ).toMatchSnapshot();
  });

  it("test edge cases", function() {
    expect(
      parser.parseEval(
        `
      $a = 0xx;
      $b = 0b2;
      $c = 01239;
      $d = 7E-a;
      $e = 7EX;
    `,
        {
          parser: {
            suppressErrors: true
          }
        }
      )
    ).toMatchSnapshot();
  });

  it("test common cases", function() {
    expect(parser.parseEval("1234;")).toMatchSnapshot();
  });
});
