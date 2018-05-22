import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import Lang from '../../components/lang/Lang';
import Accounts from '../../components/accounts';

const Index = () => (
    <div className="wrapper">
        <div className="index">
            <Helmet>
                <title>Index</title>
                <meta name="description" content="This is homepage. Just Helmet SSR demo" />
                <meta property="og:title" content="This is homepage. Just Helmet SSR demo for OG" />
            </Helmet>
            <Lang />
            <Accounts />
            <Header />
            <Menu />
        </div>
    </div>
);

Index.propTypes = {};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    dispatchCallAddTodo: () => dispatch(() => {})
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
