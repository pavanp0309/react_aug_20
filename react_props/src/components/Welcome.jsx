import PropTypes from 'prop-types'; // ES6

function Welcome({username="guest"}){ //default props
    console.log(username)
    return(
    <>
    <h1>welcome {username}</h1>
    </>
    )
}

export default Welcome




Welcome.propTypes={
    username:PropTypes.string
}

// before react 19
// Welcome.defaultProps={
//     username:"ravi"
// }