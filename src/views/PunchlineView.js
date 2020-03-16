import React from 'react';
import { useSelector } from 'react-redux';

// Components
import { Header } from 'semantic-ui-react';

const style = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 'auto'
    },
    text: {
        textAlign: 'center',
        paddingTop: 10
    },
    jokeStyles: {
        paddingTop: 20,
        width: '70%',
        margin: 'auto',
        textAlign: 'center'
    }
};

const PunchlineView = () => {
    const joke = useSelector(state => state.joke.value)
    const {container, jokeStyles, text} = style
    return (
        <div style={container} >
            {
                joke?
                <div >
                    <Header.Subheader as="h3" style={jokeStyles} >{joke}</Header.Subheader>
                    <p style={text} >
                        In stitches yet (Pun intended)? Get Hit with another one. 
                    </p>
                </div>
                :
                null
                
            }
        </div>
    );
};

export default PunchlineView;