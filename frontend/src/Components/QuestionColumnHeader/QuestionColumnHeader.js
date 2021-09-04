import { connect } from 'react-redux'

import './QuestionHeader.scss'

const QuestionColumnHeader = ({ Questions }) => {
    return (
        <>
            <div className='row'>
                { Questions.map(category => {
                   return <div key={ category.category } className='col category-header'>
                      <h5>{ category.category }</h5>
                   </div>
                })}
            </div>
        </>
    )
}

const mapPropsToState = state => ({
    Questions: state.gameQuestions
})

export default connect(mapPropsToState)(QuestionColumnHeader)