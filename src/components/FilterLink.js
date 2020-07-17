import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = function({ filter, children }) {
  return (
    <NavLink
      to={'/' + filter === 'all' ? '' : filter}
      activeStyle={{
        textDecoration: 'none',
        color: 'black',
      }}
    >
      {children}
    </NavLink>
  )
}

export default FilterLink

// import { connect } from "react-redux";
// import { setVisibilityFilter } from "../actions";
// import Link from "./Link";

// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter
// });

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick() {
//     dispatch(setVisibilityFilter(ownProps.filter));
//   }
// });

// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link);

// export default FilterLink;
