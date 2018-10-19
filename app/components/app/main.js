import React from 'react';

import styles from './main.scss';

import Header from '../header/main.js';
import LoadingComponent from '../loadingComponent/main.js';
import ErrorComponent from '../errorComponent/main.js';
import BookCard from '../bookCard/main.js';

import data from '../../data/testData.json';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: [],
      fetchDataRequestStatus: undefined,
    }

    this.handleRequestPending = this.handleRequestPending.bind(this);
    this.handleRequestSuccess = this.handleRequestSuccess.bind(this);
    this.handleRequestFail = this.handleRequestFail.bind(this);
  }


    componentDidMount() {
      this.handleRequestPending();
      this.fetchData();
    }

    fetchData() {
      const promise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
          resolve(data);
        }, 800);
      });

      promise
        .then(this.handleRequestSuccess)
        .catch(this.handleRequestFail)
    }

    handleRequestSuccess(data) {
      this.setState({
        fetchDataRequestStatus: 'success',
        response: data,
      });
    }

    handleRequestPending() {
      this.setState({
        fetchDataRequestStatus: 'pending',
      });
    }

    handleRequestFail() {
      this.setState({
        fetchDataRequestStatus: 'fail',
      });
    }

    render() {
    const { response, fetchDataRequestStatus } = this.state;

    return (
      <div className={styles['app']}>
        <div className={styles['app__header']}>
          <Header title={response.title} />
        </div>
        <div className={styles['app__body']}>
          {fetchDataRequestStatus === 'pending' &&
          <div className={styles['app__body__pending']}>
            <LoadingComponent />
          </div>
          }
          {fetchDataRequestStatus === 'fail' &&
          <div className={styles['app__body__fail']}>
            <ErrorComponent />
          </div>
          }
          {fetchDataRequestStatus === 'success' &&
            <div className={styles['app__body__success']}>
            {Object.keys(response.books).map((key, index) => {
                return (
                  <BookCard
                    key={index}
                    description={response.books[key].description}
                    title={response.books[key].title}
                    img={response.books[key].img}
                  />
                )
              })
            }
            </div>
          }
        </div>
      </div>
    )
  }
}


export default App;

App.displayName = 'App';
