# Namaste React Episode 3

--npx parcel index.html means executing npm file parcel and giving it a source file index.html

-- After wriiten script on package.json we don't need to write npx parcel index.html to exctute our app we just need to write npm run start or npm start when we do npm start it will run npm run start and this npm run start behind the scence its calling parcel index.html . 

# JSX

- JSX is javascript syntax which is easier to create ReactElement.
- JSX is not part of react.
- JSX is not html inside Javascript, it is different than HTML.
- JSX is html like syntax.

- JSX => ReactElement => Object => HTMLelement(render)
- JSX is undersand by JS Engine with the help of parcel. Babel convert JSX code into a code which can be understand by React or JS Engine.

- If we write JSX in single line then it is perfect JSX but if we write JSX in multiple line than we need to put all line inside the () because babel needs to know where JSX started and whwere it ended.

- In JSX inside {} we can write any javascript expression.

# React Components

- Everything is a component in React.
- There are two type of React Component :- 
1. Class Based Component - It is a older way of writting code.
2. Functional Component - It is a new way.

# Functional Component

- Functional Component is a normal javascript function which return some JSX or return a react element.
- Functional Component name startes which a capital latter.

- Component inside a component is known as component composition.
- {} anything inside this JSX will not execute it blindly.

- We can render Functional Component in differnt ways :-
lets the name of component is Title than
1. <Title/>
2. <Title><Title/>
3. {Title()}
