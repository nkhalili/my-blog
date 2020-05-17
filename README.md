# Full Stack blog implementation

## React Router

```powershell
    npm install react-router-dom --save
```

### Some Components

1. BrowserRouter: to add browser router capability
2. Route: to add route component for each route
3. Switch: to give hierarchy to routes

```javascript
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route path="/article/:name" component={ArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
```

## Send request to Backend

fetch() is a built-in function. It is supported by most of the browsers.

```javascript
  fetch(URL, { method: 'POST', body: ...});
```

If you want to add Internet Explorer or other browsers support, run this

```powershell
  npm install whatwg-fetch --save
```

## Using React Hooks

To manage state in our application we use React Hooks. State is a temporary place to save our information, e.g. information we have loaded from the server.

**New way to add state** in the application is to use *React Hooks* (React 16.0.8+). React Hooks are functions which abstract the away state management for our components. In this way, we can use them in components which are not directly extending *React.Component* class.

1. Add useState to map our states

   ```javascript
     import { useState } from 'react';
     ...
     const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
   ```

2. To load data into our stats from backend server

   ```javascript
    import {useEffect} from 'react';
    ...
    useEffect(() => {
      setArticleInfo({ upvotes: 3 });
    }, [name]);
   ```
  
   - To prevent useEffect to constantly update, pass empty array to its second parameter
   - To let useEffect updates on URL changes, add the parameter name to that empty array

3. To show our states

   ```javascript
     <p>This post has been upvoted {articleInfo.upvotes} times</p>
   ```
