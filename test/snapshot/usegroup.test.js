const parser = require('../main');

describe('usegroup', () => {
  it('simple', () => {
    expect(parser.parseEval('use My\\Full\\Classname as Another;')).toMatchSnapshot();
  });
  it('multiple', () => {
    expect(parser.parseEval('use My\\Full\\Classname as Another, My\\Full\\NSname;')).toMatchSnapshot();
  });
  it('nested', () => {
    expect(parser.parseEval('use some\\my_namespace\\{ClassA, ClassB, ClassC as C};')).toMatchSnapshot();
  });
  it('nested 2', () => {
    expect(parser.parseEval('use function some\\my_namespace\\{fn_a, fn_b, fn_c};')).toMatchSnapshot();
  });
  it('nested 3', () => {
    expect(parser.parseEval('use const some\\my_namespace\\{ConstA, ConstB, ConstC};')).toMatchSnapshot();
  });
});
