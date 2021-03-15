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
    console.log(ast.children[0].expression.right.body);
    // expect (ast).toMatchSnapshot();
  });

  it("can have lhs, functions", () => {
    const ast = parser.parseEval(`
    $test = match(true) {
      test($a), abc($b) => 'yes',
      default => null,
    };
    `);
    console.log(ast.children[0].expression.right.body);
    // expect (ast).toMatchSnapshot();
  });

  it("can have multiple values", () => {
    const ast = parser.parseEval(`
    $test = match(trye) {
      0,1,2,3 => run(),
      default => null,
    };
    `);
    console.log(ast.children[0].expression.right.body);
    // expect (ast).toMatchSnapshot();
  });
});
