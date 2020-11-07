import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

function ContentPage(props) {
    return (
        <div>
            <Header />

            <div>{props.children}</div>

            <Footer />
        </div>
    );
}

export default ContentPage;
