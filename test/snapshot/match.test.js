const parser = require("../main");

describe("match", () => {
  it("can be parsed", () => {
    const ast = parser.parseEval(`
    $test = match($a) {
      true => 'yes',
      false => 'no',
      default => null
    };
    `);
    expect(ast).toMatchSnapshot();
  });

  it("can have lhs, functions", () => {
    const ast = parser.parseEval(`
    $test = match(true) {
      test($a), abc($b) => 'yes',
      default => null
    };
    `);
    expect(ast).toMatchSnapshot();
  });

  it("can have multiple values", () => {
    const ast = parser.parseEval(`
    $test = match(trye) {
      0,1,2,3 => run(),
      default => null
    };
    `);
    expect(ast).toMatchSnapshot();
  });
  it("can have hanging comma", () => {
    const ast = parser.parseEval(`
    $test = match($test) {
      true, => 'ok',
      false => throw new Exception('Nope'),
    };
    `);
    expect(ast).toMatchSnapshot();
  });
  it("does not support older php than 8", () => {
    expect(() => {
      new parser({ parser: { version: 704 } }).parseEval(`
        $test = match($test) {
          true => 'ok',
          false => 'Nope!',
        };
    `);
    }).toThrow(SyntaxError);
  });
  it("can be nested", () => {
    const ast = parser.parseEval(`
      $v = match(callMe(1,2,3)) {
        null => match($err) { 1 => 'Connect', 2 => 'Auth'},
        match($a) {true => 0, false => -1} => 'Ok'
      };
    `);
    expect(ast).toMatchSnapshot();
  });
});
