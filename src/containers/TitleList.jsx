import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Title from '../components/poetry/Title';
import { fetchTitlesIfNeeded } from '../actions';

class TitleList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTitlesIfNeeded());
  }

  render() {
    const { titles, isFetching } = this.props;
    if (isFetching) {
      return <p>Loading…</p>;
    } else {
      return (
        <ul className="list pl0">
          { titles.map((title, i) => (
            <li key={'title-' + i} className="pb3 mb3 bb b--black-30">
              <Link to={'/poem/' + title.title} className="black-90 hover-green link">
                <Title title={title.title} author={title.author} />
              </Link>
            </li>
          ))}
        </ul>
      );
    }
  }
}

TitleList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  titles: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  titles: state.titles.titles,
  isFetching: state.titles.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleList);
