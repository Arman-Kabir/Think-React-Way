/**#13
 * 
 * Higher Order Components (HOC):
 * 11M-- Without code repeat,a need  to share common functionalities inside components - here comes Higher Order Components concepts.
 * 
 * A higher order component is a function that takes a component as parameter and returns a new component. 
 * Ex: const newComponent = higherOrderComponent(OriginalComponent)
 * Ex:const SpiderMan = withComponent(PeterParker)
 * 
 * Higher Order components should start with 'with' -- naming convention
 * 
 * 
 */

/**#14
 * render props : avoids props drilling
 * PROP that defines Render Logic of a component
 * render prop is a function 
 */

/*#15
 We can pass props from parent to child.
 One way data flow.

 Deeply nested children - Target child component is far away from parent. --> props drilling.

 *We can avoid props drilling problems in 3 ways.
 1.HOC / Higher Order components
 2.Render Props pattern
 3. Context api 

 steps for Context API : 
 1.Create a context
 2.Wrap parent with Context Provider
 3.Provide a value of the context as prop
 4.Wrap child with Context COnsumer
 5.Consumer follows the render prop pattern. 
*/

/*#16-How to use React Context API 



*/