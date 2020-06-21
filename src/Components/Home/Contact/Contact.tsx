import React, { FC, useState } from 'react'
import classes from './Contact.module.css'
import { connect, ConnectedProps } from 'react-redux'
import { postMessage, messageContentType } from '../../../Redux/reducer'
import TextInfo from '../../Fregments/TextInfo/TextInfo'
import ContactBlockData from './ContactBlockData/ContactBlockData'
import { ReduxContactForm } from './ContactForm/ContactForm'

const Contact: FC<Props> = props => {
    const [title, setTitle] = useState('GET IN TOUCH')
    const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.ur adipis cing elit, sed do eiusmod tempor incididunt ut labore et. ur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.')
    const onSubmit = (formData: messageContentType) => {
        props.postMessage(formData)
    }
    return (
        <div>
            <div>
                <TextInfo title={title} text={text} />
            </div>
            <div>
                <ReduxContactForm onSubmit={onSubmit} />
            </div>
            <div>
                <ContactBlockData />
            </div>
        </div>
    )
}

const connector = connect(null, { postMessage })

export default connector(Contact)

type Props = ConnectedProps<typeof connector>