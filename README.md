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
    <ErrorPage code="404" customMessage="Gotcha, User not found!"/>
</div>
```



## Parameters

|    params    |   value  |             default value            |   description    |
|:------------:|:--------:|:------------------------------------:|:----------------:|
|    code      |  string  |               REQUIRED               |   The error code you want displayed on the ErrorPage component                                                                           |
| customMessage|  string  |               NOT REQUIRED           | If provided, the package would make use of it, if not the package would generate the error message itself accurately                          |



More details can be found in the official site:
 * Site still worked on

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
