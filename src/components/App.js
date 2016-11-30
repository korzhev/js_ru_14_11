import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'
import { filterArticle } from '../AC/filters'

class App extends Component {

    state = {
        selected: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <Chart />
                <DateRange />
                <ArticleList />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi = {true}/>
            </div>
        )
    }

    handleChange = selected => {
        this.props.filterArticle(selected.map(o => o.value))
        //убери этот стейт, 2 источника правды - большое зло
        this.setState({ selected })
    }
}

export default connect(state => ({
    articles: state.articles
}), {
    filterArticle
})(App)
