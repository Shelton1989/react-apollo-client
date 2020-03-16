import React, { useEffect, useState } from 'react';

import { connect, useSelector } from 'react-redux';

// Actions
import { fetchCategories } from '../actions/category';
import { fetchJokeByCategory } from '../actions/joke';

// Component imports
import { Form, Radio, Header, Button, Dimmer, Loader } from 'semantic-ui-react';

// Styles
const style = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 'auto'
    },
    text: {
        textAlign: 'center'
    }
};

const CategorySelectView = ({fetchCategories, fetchJokeByCategory}) => {

    useEffect(() => fetchCategories(), [fetchCategories]);

    const [category, setCategory] = useState("Select a category");

    const [buttonText, setButtonText] = useState("HIT ME (NOT LITERALLY)");

    const categories = useSelector(state => state.category.categories);

    const loading = useSelector(state => state.category.loading);

    const loadingJoke = useSelector(state => state.joke.loading)

    const error = useSelector(state => state.category.categoryStatus);

    const {container, text} = style;

    if (loading) {
        return (
            <Dimmer active inverted >
                <Loader size="large">Getting Categories</Loader>
            </Dimmer>
        );
    } else {
        return (
            <div style={container} >
                <p style={text} >Select a category then click the HIT ME button if you're brave enough.</p>
                {
                    categories && categories.length > 0?
                    <Form style={container}>
                        {categories.map((cat, i) => (
                            <Form.Field key={i} >
                                <Radio 
                                    label={cat.name}
                                    checked={category===cat.name}
                                    value={cat.name}
                                    onChange={(e, { value }) => setCategory(value)}
                                />
                            </Form.Field>
                        ))}
                        <Form.Field>
                            <Header.Subheader as="h3">
                                {category}
                            </Header.Subheader>
                        </Form.Field>
                        <Button 
                            disabled={category==="Select a category"}
                            onClick={() => {fetchJokeByCategory(category); setButtonText("ROUNDHOUSE KICK ME")}}
                            loading={loadingJoke}
                            content={buttonText}
                            color="orange"
                            basic
                        />
                    </Form>
                    :
                    error
                }
            </div>
        );
    };
};

const mapActionsToProps = {
    fetchCategories: fetchCategories,
    fetchJokeByCategory: fetchJokeByCategory
};

export default connect(null, mapActionsToProps)(CategorySelectView);
