import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

function filterByDate(from, to) {
    const now = Date.now();
    return (new Date(from).getTime() <= now) &&  (new Date(to).getTime() >= now)
}

function filterById(filterId, id) {
    return !filterId || !filterId.length || filterId.includes(id)
}

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        isOpen: PropTypes.func.isRequired,
        toggleOpenItem: PropTypes.func.isRequired
    }

    componentWillMount() {
        //console.log('---', 'mounting')
    }

    componentDidMount() {
        //console.log('---', 'mounted', this.containerRef)
        //console.log('---', this.refs)
    }

    componentWillReceiveProps(nexProps) {
        //console.log('isEqual', Object.keys(nexProps).every(key => nexProps[key] == this.props[key]))
        //console.log('---', 'AL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'AL will update')
    }

    getContainerRef = ref => {
        this.containerRef = ref
    }


    render() {
        const { articles, isOpen, toggleOpenItem, filters } = this.props
        const isDateFilter = !filters.from || !filters.to
        const dateFilter = filterByDate(filters.from, filters.to);

        const articleItems = articles
            .filter(article => (
                filterById(filters.id, article.id)
                && (isDateFilter || dateFilter)
            )).map(article => (
                <li key = {article.id}>
                    <Article
                        article = {article}
                        isOpen = {isOpen(article.id)}
                        toggleOpen = {toggleOpenItem(article.id)}
                    />
                </li>
            ))

        return (
            <ul ref = {this.getContainerRef}>
                {articleItems}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    filters: state.filters
}))(accordion(ArticleList))