const parser = require("../main");

describe("traitprecedence", () => {
  it("simple", () => {
    expect(
      parser.parseEval(
        `
class MyHelloWorld extends Base {
    use A, B {
        B::smallTalk insteadof A;
        A::bigTalk insteadof B;
    }
}
        `
      )
    ).toMatchSnapshot();
  });
});
