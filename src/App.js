import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { PostsList } from './features/posts/postsList'
import { AddPostForm } from './features/posts/addPostForm'
import { SinglePostPage } from './features/posts/singlePostPage'
import { EditPostForm } from './features/posts/editPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
             
                <React.Fragment>
                <h2>Welcome to the Redux Essentials example app!</h2>
                <AddPostForm/>
                <PostsList/>
                </React.Fragment>
            
            )}
          />
          <Route exact path = '/posts/:postId'  component = {SinglePostPage}/>
          <Route exact path = '/editPosts/:postId'  component = {EditPostForm}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
