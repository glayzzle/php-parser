const parser = require("../main");

describe("block", () => {
  it.each([
    ["single", "{ $var = 1; }"],
    ["empty function block", "function foo() { /* 1 */ }"],
    ["empty class block", "class foo { /* 1 */ }"],
    ["empty method block", "class foo { function bar()  { /* 1 */ } }"],
    ["empty namespace block", "namespace foo { /* 1 */ }"],
    ["empty declare block", "declare(tick=1) { /* 1 */ }"]
  ])("%s", function(_, code) {
    expect(
      parser.parseEval(code, {
        parser: {
          extractDoc: true
        }
      })
    ).toMatchSnapshot();
  });
});
