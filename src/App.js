import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
    constructor() {
        super();
        // Initial state of the class
        this.state = {
            monsters: [],
            searchField: ''
        };
    }
    // life cycle method to re-render to the DOM when state mount
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json()) // change response in json file for js readable
            .then((users) => this.setState({ monsters: users }));
    }

    // Arrow function to bind 'this'
    handleChange = (event) => {
        this.setState({ searchField: event.target.value });
    };

    render() {
        // search a robot each time typed in the search bar react re-render the DOM
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        // return begining
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder="search monsters"
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
