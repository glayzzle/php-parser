const parser = require("../main");

describe("byref", () => {
  it("variable", () => {
    expect(parser.parseEval("$var = &$foo;")).toMatchSnapshot();
  });
  it("static lookup", () => {
    expect(parser.parseEval("$var = &foo::$bar;")).toMatchSnapshot();
  });
  it("offset lookup", () => {
    expect(parser.parseEval("$foo[&$bar];")).toMatchSnapshot();
  });
  it("new class", () => {
    expect(
      parser.parseEval("$a =& new foo();", {
        parser: {
          version: "5.6",
        },
      })
    ).toMatchSnapshot();
    expect(() => {
      parser.parseEval("$a =& new foo();");
    }).toThrow(
      "Parse Error : syntax error, unexpected 'new' (T_NEW) on line 1"
    );
  });
  it("call result", () => {
    expect(parser.parseEval("$a =& foo( &$b );")).toMatchSnapshot();
  });
  it("return statement", () => {
    expect(parser.parseEval("return &$foo;")).toMatchSnapshot();
  });
  it("function definition", () => {
    expect(parser.parseEval("function &foo( &$bar ) { }")).toMatchSnapshot();
  });
  it("variadic", () => {
    expect(parser.parseEval("function test(&...$var) { }")).toMatchSnapshot();
  });
  it("foreach", () => {
    expect(parser.parseEval("foreach ($arr as &$value) { }")).toMatchSnapshot();
  });
  it("foreach (key/value)", () => {
    expect(
      parser.parseEval("foreach ($arr as $key => &$val) { }")
    ).toMatchSnapshot();
  });
  it("closure", () => {
    expect(
      parser.parseEval("$var = function () use (&$message) { };")
    ).toMatchSnapshot();
  });
  // https://github.com/php/php-src/blob/php-7.4.0beta4/Zend/zend_language_parser.y#L1165
  it("callable variable", () => {
    expect(parser.parseEval("$var = &$var;")).toMatchSnapshot();
  });
  it("callable variable #2", () => {
    expect(parser.parseEval("$var = &${$var};")).toMatchSnapshot();
  });
  it("callable variable #3", () => {
    expect(parser.parseEval("$var = &$$$var;")).toMatchSnapshot();
  });
  it("callable variable #4", () => {
    expect(parser.parseEval("$var = &$var[$var];")).toMatchSnapshot();
  });
  it("callable variable #5", () => {
    expect(parser.parseEval("$var = &CONSTANT[$var];")).toMatchSnapshot();
  });
  it("callable variable #6", () => {
    expect(parser.parseEval("$var = &$var{$var}[$var];")).toMatchSnapshot();
  });
  it("callable variable #7", () => {
    expect(parser.parseEval("$var = &$var->test();")).toMatchSnapshot();
  });
  it("callable variable #8", () => {
    expect(parser.parseEval("$var = &call();")).toMatchSnapshot();
  });
  // https://github.com/php/php-src/blob/php-7.4.0beta4/Zend/zend_language_parser.y#L1167
  it("staticlookup", () => {
    expect(parser.parseEval("$var = &Foo::$test;")).toMatchSnapshot();
  });
  it("staticlookup #2", () => {
    expect(parser.parseEval("$var = &Foo::${$test};")).toMatchSnapshot();
  });
  it("staticlookup #3", () => {
    expect(parser.parseEval("$var = &Foo::$$$test;")).toMatchSnapshot();
  });
  it("staticlookup #4", () => {
    expect(parser.parseEval("$var = &$var::$test;")).toMatchSnapshot();
  });
  it("staticlookup #5", () => {
    expect(parser.parseEval("$var = &$var::${$test};")).toMatchSnapshot();
  });
  it("staticlookup #6", () => {
    expect(parser.parseEval("$var = &$var::$$$test;")).toMatchSnapshot();
  });
  it("staticlookup #7", () => {
    expect(
      parser.parseEval("$var = &parent::getElementByPath();")
    ).toMatchSnapshot();
  });
  it("staticlookup #8", () => {
    expect(
      parser.parseEval(" $var = &self::getElementByPath();")
    ).toMatchSnapshot();
  });
  // https://github.com/php/php-src/blob/php-7.4.0beta4/Zend/zend_language_parser.y#L1169
  it("propertylookup", () => {
    expect(parser.parseEval("$var = &$var->test;")).toMatchSnapshot();
  });
  it.skip("propertylookup #2", () => {
    expect(parser.parseEval("$var = &($var)->test;")).toMatchSnapshot();
  });
  it("with bin", () => {
    expect(parser.parseEval("$foo = &$bar || $bar;")).toMatchSnapshot();
  });
  it("with bin #2", () => {
    expect(parser.parseEval("$foo = &$bar + 1;")).toMatchSnapshot();
  });
});
