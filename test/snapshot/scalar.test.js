const parser = require('../main');

describe("Test scalar statements", function() {
  it("test constants", function() {
    expect(parser.parseEval('$a = foo::ref[-5];')).toMatchSnapshot();
  });

  it("test dereferencable", function() {
    expect(parser.parseEval(`
      $a = foo::bar()[5]->test;
      $b = (new test())->foo();
      $c = (foo())[5];
      $d = (function($a) { return $a * 2; })(5);
    `)).toMatchSnapshot();
  });
});
