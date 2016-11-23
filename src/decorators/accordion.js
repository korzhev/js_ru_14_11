import React from 'react'

export default (Component) => class AccordeonedComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            //не привязывайся к названиям сущностей в декораторах, вся их суть в том, чтобы использовать с разными компонентами и данными. Сделай openItemId
            openArticleId: null
        }
    }

    render() {
        return <Component {...this.props} {...this.state} openArticle = {this.openArticle}/>
    }

    openArticle = id => ev => {

        this.setState({
            openArticleId: this.state.openArticleId == id ? null : id
        })
    }

}
