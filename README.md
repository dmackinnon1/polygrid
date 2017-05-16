# polygrid
A JavaScript learning project.

The polygrid repo provides a page and infrastructure for generating examples of "polynomial division using the grid method." Polynomial division is usually introduced in high school advanced functions or pre-calculus classes, or in college first-year calculus classes. 

Please see the live example here: [dmackinnon1.github.io/polygrid/](https://dmackinnon1.github.io/polygrid/).

Students generally learn a method that closely resembles traditional integer "long division", and sometimes use a different notation known as "synthetic division." Grid division offers an alternative to these. The intention was to provide examples of this method, which is becoming more frequently used but is still generally neglected by textbooks.

For each example, two single variable polynomials (the dividend and the divisor) are generated with some constraints on the degree and coefficients. The grid division algorithm is carried out, returning the quotient and remainder, with intermediate steps available for display.

I have been playing around with polynomial grid division for a while. Please see these posts:
* [Dividing Polynomials - The Grid Method](http://www.mathrecreation.com/2009/03/dividing-polynomials-grid-method.html)
* [More Polynomial Grid Division](http://www.mathrecreation.com/2015/09/more-polynomial-grid-division.html)
* [Generic Rectangles](http://www.mathrecreation.com/2012/09/generic-rectanges.html)

The current polygid infra does not handle the 'backwards' style of polynomial grid division, which you can read about here:
* [dividing polynomials: the backwards reverse tabular method](http://www.mathrecreation.com/2016/03/dividing-polynomials-backwards-reverse.html)
