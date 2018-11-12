const parser = require('../main');

describe('Array without keys', () => {
  it('deference array', () => {
    expect(
      parser.parseEval(
        ['$a = [', '"a", "b"', ']($foo)[$foo->bar()[1]]->foo()'].join('\r'),
      ),
    ).toMatchSnapshot();
  });

  it('of strings', () => {
    expect(
      parser.parseEval('array("item1", "item2", "item3")'),
    ).toMatchSnapshot();
  });

  it('of numbers', () => {
    expect(parser.parseEval('array(1, 2.5, 0x1000)')).toMatchSnapshot();
  });

  it('of strings and numbers', () => {
    expect(parser.parseEval('array(1, "item2", 3, "item4")')).toMatchSnapshot();
  });

  it('of variables', () => {
    expect(parser.parseEval('array($obj1, $obj2, $obj3)')).toMatchSnapshot();
  });

  it('of objects', () => {
    expect(
      parser.parseEval('[new foo(), new stdClass(), new bar()]'),
    ).toMatchSnapshot();
  });

  it('of arrays', () => {
    expect(
      parser.parseEval(`
        array(
          array("item1", "item2"),
          array("item3", "item4"),
          array("item5", "item6")
        )`),
    ).toMatchSnapshot();
  });

  describe('mixed tests / coverage', function() {
    it('test empty array', function() {
      expect(parser.parseEval('$a = []; $b = array();')).toMatchSnapshot();
    });
    it('test short form / keys', function() {
      expect(
        parser.parseEval('[0 => &$foo, $bar => "foobar"];'),
      ).toMatchSnapshot();
    });
  });

  it("single and empty", () => {
    expect(parser.parseEval("array()")).toMatchSnapshot();
  });

  it("single and empty (short form)", () => {
    expect(parser.parseEval("[]")).toMatchSnapshot();
  });
});
