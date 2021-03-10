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
});
