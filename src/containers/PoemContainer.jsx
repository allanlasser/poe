import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Poem from '../components/poetry/Poem';
import { fetchPoemIfNeeded } from '../actions';

class PoemContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, title } = this.props;
    dispatch(fetchPoemIfNeeded(title));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.title != this.props.title) {
      const { dispatch, title } = this.props;
      dispatch(fetchPoemIfNeeded(title));
    }
  }

  render() {
    const { title, poem } = this.props;
    if (!poem || poem.isFetching) {
      return <p>Loading…</p>;
    } else if (!poem.isFetching && !poem.poem) {
      return <p>No poem found with that title.</p>;
    } else {
      return <Poem poem={poem.poem} />;
    }
  }
}

PoemContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  title: PropTypes.string,
  poem: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  poem: state.poems[ownProps.params.title],
  title: ownProps.params.title,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(PoemContainer);
