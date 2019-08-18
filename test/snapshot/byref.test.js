const parser = require('../main');

describe('byref', () => {
  it('variable', () => {
    expect(parser.parseEval('&$foo;')).toMatchSnapshot();
  });
  it('static lookup', () => {
    expect(parser.parseEval('&foo::$bar;')).toMatchSnapshot();
  });
  it('offset lookup', () => {
    expect(parser.parseEval('$foo[&$bar];')).toMatchSnapshot();
  });
  it('new class', () => {

    expect(
        parser.parseEval('$a =& new foo();', {
            parser: {
                php7: false
            }
        }
    )).toMatchSnapshot();
    expect(() => {
        parser.parseEval('$a =& new foo();');
    }).toThrow('Parse Error : syntax error, unexpected \'new\' (T_NEW) on line 1');
  });
  it('call result', () => {
    expect(parser.parseEval('$a =& foo( &$b );')).toMatchSnapshot();
  });
  it('return statement', () => {
    expect(parser.parseEval('return &$foo;')).toMatchSnapshot();
  });
  it('function definition', () => {
    expect(parser.parseEval('function &foo( &$bar ) { }')).toMatchSnapshot();
  });  
});
