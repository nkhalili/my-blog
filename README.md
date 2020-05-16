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
