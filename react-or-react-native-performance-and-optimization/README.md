# React / React Native Performance and Optimization

## If you were working on an application that was rendering a page/screen very slowly, how would you go about investigating and fixing the issue?
One of the reason page or screen very slowly because of there are unnecessary re-ender method.
Page and screen will be re-render every time there are some changes on the state.
So I will try to investigate which state I can move, and put it as close as it needed.
