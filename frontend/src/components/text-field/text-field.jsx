import React, { Component } from 'react'
import './text-field.css'
import styled, { withTheme } from 'styled-components'
import { rgba } from 'polished'

const TextfieldWrapper = styled.div`
    width: fit-content;
    .field-box:focus-within {
        box-shadow: 0 0 0 0.2rem ${(props) => rgba('#333333', 0.25)};
    }
`
class Textfield extends Component {
    state = {
        // textField: {
        //     id: interger/string,   e.g. 1,"any"                             //unique for rendering
        //     inputType: string,     e.g. "text", "password"
        //     state: string,         e.g. "normal" or "error" or "disable"
        //     name: string,          e.g. "field name"                       //used for validation purpose
        //     label: string,         e.g. "Field Name"                       //user for visual purpose
        //     placeholder: string,   e.g. "anything",
        //     helper: string,        e.g. "This is field helper.", //
        //     prefix: string,        e.g. "$"
        //     suffix: string,        e.g. "lbs"
        //     value: string,                                                //actual field value
        //     readOnly: bool
        //     imgBtn: string,        e.g. "icon.png"                        //used for toggle field value
        // },
    }

    // handler needed
    //      handleInputValueChange  //to handle input value change
    //      handleImgBtnClick       //to toggle the input text

    getFieldClasses = (fieldState) => {
        if (fieldState === 'error') {
            return 'field-box-error'
        } else if (fieldState === 'disable') {
            return 'field-box-disable'
        } else {
            return 'field-box'
        }
    }

    getHelperTextClasses = (fieldState) => {
        if (fieldState === 'error') {
            return 'helper-text-error'
        } else if (fieldState === 'disable') {
            return 'helper-text-disable'
        } else {
            return 'helper-text'
        }
    }

    getTipsbox = (tipsbox, fieldname) => {
        return (
            <div className="tips-box">
                <button
                    name={fieldname}
                    onMouseOver={this.props.toggleInputTipsbox}
                    onMouseOut={this.props.toggleInputTipsbox}
                    // onClick={this.props.toggleInputTipsbox}
                />
                {tipsbox.state ? (
                    <div className="content">
                        <div className="title">{tipsbox.title}</div>

                        <div className="description">
                            {tipsbox.type === 'checklist' ? (
                                <div className="checklist">
                                    {tipsbox.checklist.map((item) => (
                                        <div className="item" key={item.id}>
                                            <img
                                                src={item.state === null}
                                                alt={item.label}
                                            />
                                            {item.label}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-description">
                                    {tipsbox.description}
                                </div>
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }

    render() {
        let textfield = this.props.textfield

        return (
            <TextfieldWrapper>
                <div
                    style={{
                        width: this.props.maxWidth,
                    }}
                    className="text-field-container"
                    key={textfield.id}
                >
                    {textfield.label === undefined &&
                    textfield.label === '' ? null : (
                        <label
                            style={{
                                color: '#4F4F4F',
                            }}
                            className="field-name"
                            htmlFor={textfield.label}
                        >
                            <div>{textfield.label}</div>
                            {textfield.tipsbox
                                ? this.getTipsbox(
                                      textfield.tipsbox,
                                      textfield.name
                                  )
                                : null}
                        </label>
                    )}
                    <div
                        style={{
                            backgroundColor: this.props.noFill
                                ? null
                                : rgba('#BDBDBD', 0.25),
                            width: this.props.maxWidth,
                            height: this.props.height,
                        }}
                        className={this.getFieldClasses(textfield.state)}
                    >
                        {textfield.prefix === undefined ? null : (
                            <div className="prefix">{textfield.prefix}</div>
                        )}
                        <input
                            style={{
                                color: '#FFF',
                                fontSize: this.props.size,
                            }}
                            className="field"
                            type={textfield.inputType}
                            name={textfield.name}
                            value={textfield.value}
                            placeholder={textfield.placeholder}
                            onChange={this.props.handleInputValueChange}
                            onBlur={this.props.handleBlur}
                            readOnly={textfield.readOnly}
                            onKeyPress={this.props.handleKeyPress}
                            {...textfield.config}
                        />
                        {textfield.imgBtn === undefined ? null : (
                            <img
                                src={textfield.imgBtn}
                                alt=""
                                onClick={this.props.handleFieldBtnClick}
                            />
                        )}
                        {textfield.suffix === undefined ? null : (
                            <div className="suffix">{textfield.suffix}</div>
                        )}
                    </div>
                    {textfield.hint === undefined &&
                    textfield.hint === '' ? null : (
                        <div
                            className={this.getHelperTextClasses(
                                textfield.state
                            )}
                        >
                            {textfield.hint}
                        </div>
                    )}
                </div>
            </TextfieldWrapper>
        )
    }
}

export default withTheme(Textfield)
