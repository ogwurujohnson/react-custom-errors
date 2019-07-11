# React Custom Errors

> An Error Custom Display Component for React


## Install
```
npm install react-custom-errors || yarn add react-custom-errors

```
## How to use
```js
import React from 'react';
import ReactDOM from 'react-dom';
import ErrorPage from 'react-custom-errors';



const App = () => (
  <div>
    <ErrorPage />
  </div>
);

export default App;
```

## ErrorPage without props
```js
<div>
    <ErrorPage />
</div>
```
In this scenerio, the component would have no error code rendered, but a very beautiful page with an svg image, signlaing an problem happened

## ErrorPage with props
```js
<div>
    <ErrorPage code="404"/>
</div>
```
In this scenerio, the component would display to the user, a beautiful error page, with the status code supplied and meaning of the status code. 

If the developer wishes to customize the error message shown then, they can add an additonal prop to the `ErrorPage` component like this:

```js
<div>
    <ErrorPage code={404} customMessage="Gotcha... Page not found" link="/home" backgroundColor="brown" />
</div>
```



## Parameters

|    params    |   value  |             default value            |   description    |
|:------------:|:--------:|:------------------------------------:|:----------------:|
|    code      |  number  |               REQUIRED               |   The error code you want displayed on the ErrorPage component                                                                           |
| customMessage|  string  |               NOT REQUIRED           | If provided, the package would make use of it, if not the package would generate the error message itself accurately                          |
| link  | string | NOT REQUIRED | Provide this prop, which would be a route to where the user would be directed to, if they were to click on the button to go back to dashboard |
| backgroundColor |string | NOT REQUIRED | If you would love to add more feel and more color customization, to meet your sites theme, you can specify a background color as prop |



More details can be found in the official site:
 * Site is still worked on

## Dev Server
```
npm run start || yarn start

```
Default dev server runs at localost:3000 in browser.

## Run Tests
```
npm run test:watch

```

## Production Bundle
```
npm run build || yarn build
```


### Follow me on Twitter: [@devopsjay](https://twitter.com/devopsjay)
