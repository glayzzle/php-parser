const parser = require("../main");

describe("Test scalar statements", function () {
  it.each([
    ["test constants", "$a = foo::ref[-5];"],
    ["test constants #2", "$a = Foo;"],
    ["test constants #3", "$a = $var::foo;"],
    [
      "test dereferencable",
      `
      $a = foo::bar()[5]->test;
      $b = (new test())->foo();
      $c = (foo())[5];
      $d = (function($a) { return $a * 2; })(5);
    `,
    ],
    ["test dereferencable_scalar", "$var = array(1);"],
    ["test dereferencable_scalar #2", "$var = [1];"],
    ["test dereferencable_scalar #3", '$var = "test";'],
  ])("%s", function (_, code) {
    expect(parser.parseEval(code)).toMatchSnapshot();
  });
});
