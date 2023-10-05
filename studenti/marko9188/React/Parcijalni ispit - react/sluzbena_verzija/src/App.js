import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';

import { UserForm } from './components';

class App extends React.Component {

  state= {user: null, repos: []};

  render () {

      const {user, repos} = this.state;
      if (!user) {
        return (
        <div className='App'>
            <UserForm />
        </div>
        )
        
      }

      return(
        <div className='App'>
          <p>UserForm</p>
          <p>Githubuser</p>
          <p>GithubRepos</p>
          <Button>Reset</Button>

        </div>
      )
  }
}

export default App;
