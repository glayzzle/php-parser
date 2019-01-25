const parser = require('../main');

describe('property', () => {
  it('var', () => {
    expect(parser.parseEval('class Foo { var $property; }')).toMatchSnapshot();
  });
  it('var with value', () => {
    expect(parser.parseEval('class Foo { var $property = 10; }')).toMatchSnapshot();
  });
  it('public', () => {
    expect(parser.parseEval('class Foo { public $property; }')).toMatchSnapshot();
  });
  it('public with value', () => {
    expect(parser.parseEval('class Foo { public $property = 10; }')).toMatchSnapshot();
  });
  it('protected', () => {
    expect(parser.parseEval('class Foo { protected $property; }')).toMatchSnapshot();
  });
  it('protected with value', () => {
    expect(parser.parseEval('class Foo { protected $property = 10; }')).toMatchSnapshot();
  });
  it('private', () => {
    expect(parser.parseEval('class Foo { private $property; }')).toMatchSnapshot();
  });
  it('private with value', () => {
    expect(parser.parseEval('class Foo { private $property = 10; }')).toMatchSnapshot();
  });
  it('public static', () => {
    expect(parser.parseEval('class Foo { public static $property; }')).toMatchSnapshot();
  });
  it('public static with value', () => {
    expect(parser.parseEval('class Foo { public static $property = 10; }')).toMatchSnapshot();
  });
  it('without value', () => {
    expect(parser.parseEval('class Foo { public $property; }')).toMatchSnapshot();
  });
  it('with string number value', () => {
    expect(parser.parseEval('class Foo { public $property = 10; }')).toMatchSnapshot();
  });
  it('with single quotes string value', () => {
    expect(parser.parseEval('class Foo { public $property = \'string\'; }')).toMatchSnapshot();
  });
  it('with double quotes string value', () => {
    expect(parser.parseEval('class Foo { public $property = "string"; }')).toMatchSnapshot();
  });
  it('with boolean value', () => {
    expect(parser.parseEval('class Foo { public $property = true; }')).toMatchSnapshot();
  });
  it('with bin value', () => {
    expect(parser.parseEval('class Foo { public $property = \'hello \' . \'world\'; }')).toMatchSnapshot();
  });
  it('with bin value 2', () => {
    expect(parser.parseEval('class Foo { public $property = 1 + 2; }')).toMatchSnapshot();
  });
  it('with heredoc value', () => {
    expect(parser.parseEval(`
class Foo { 
  public $property = <<<EOD
hello world
EOD;
}
    `)).toMatchSnapshot();
  });
  it('with nowdoc value', () => {
    expect(parser.parseEval(`
class Foo { 
  public $property = <<<'EOD'
hello world
EOD;
}
    `)).toMatchSnapshot();
  });
  it('with constant value', () => {
    expect(parser.parseEval('class Foo { public $property = CONSTANT; }')).toMatchSnapshot();
  });
  it('with array value', () => {
    expect(parser.parseEval('class Foo { public $property = array(true, false); }')).toMatchSnapshot();
  });
  it('with short array value', () => {
    expect(parser.parseEval('class Foo { public $property = [true, false]; }')).toMatchSnapshot();
  });
});
