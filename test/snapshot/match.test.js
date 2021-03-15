const parser = require("../main");

describe("match", () => {
  it("can be parsed", () => {
    const ast = parser.parseEval(`
    $test = match($a) {
      true => 'yes',
      false => 'no',
      default => null,
    };
    `);
    expect(ast).toMatchSnapshot();
  });

  it("can have lhs, functions", () => {
    const ast = parser.parseEval(`
    $test = match(true) {
      test($a), abc($b) => 'yes',
      default => null,
    };
    `);
    expect(ast).toMatchSnapshot();
  });

  it("can have multiple values", () => {
    const ast = parser.parseEval(`
    $test = match(trye) {
      0,1,2,3 => run(),
      default => null,
    };
    `);
    expect(ast).toMatchSnapshot();
  });
});
