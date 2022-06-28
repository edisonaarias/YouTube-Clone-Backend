import { link } from 'react-router-dom';

function SearchBar() {
    return (
        <nav>
            <ul>
                <link to='/'>
                    <li>Home</li>
                </link>
                <link to='/about'>
                    <li>About</li>
                </link>
                <link to='/list'>
                <li>List</li>
                </link>
            </ul>
        </nav>
    )
}

export default SearchBar;