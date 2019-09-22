// import React, { Component } from 'react';
// import ReactDataGrid from 'react-data-grid';


// const columns = [
//   { key: 'id', name: 'ID', dragable: true },
//   { key: 'title', name: 'Title', dragable: false },
//   { key: 'count', name: 'Count', dragable: true }];
// const rows = [{ id: 0, title: 'row1', count: 20 }, { id: 1, title: 'row1', count: 40 }, { id: 2, title: 'row1', count: 60 }, { id: 3, title: 'row1', count: 60 }];
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <ReactDataGrid
//           columns={columns}
//           rowGetter={i => rows[i]}
//           rowsCount={4}
//           minHeight={150}
//           cellNavigationMode='loopOverRow'
//           enableDragAndDrop={true} />
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';

import { fetchWhiskies } from './store/action';

import WhiskyGrid from './components/Wiskeygrid.jsx';

class App extends Component {
  render() {
    const {
      fetchWhiskies,
      isLoading,
      error,
      whiskies
    } = this.props;

    return (
      <div className="App">
        <button onClick={fetchWhiskies}>Fetch whiskies</button>
        {isLoading && <h1>Fetching data</h1>}
        {!isLoading && !error && <WhiskyGrid whiskies={whiskies} />}
        {error && <h1>{error}</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchWhiskies
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);