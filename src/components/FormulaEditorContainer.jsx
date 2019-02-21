import React from 'react';
import { func, string, bool } from 'prop-types';
import {connect} from 'react-redux';
import {identity} from 'ramda';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import FormulaEditorButtonbar from './FormulaEditorButtonbar';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import {changeFocusAction, getStyleAction, changeButtonStateAction } from '../duck/formulaEditorActionCreators';
import FormulaEditorInput from './FormulaEditorInput';
import { inactiveBorder, main, error } from './colors';

const styles = {
    root: {
        borderRadius: 3,
        fontFamily: 'Roboto'
    },
    inactive: {
        border: `1px solid ${inactiveBorder}`,
        '&:hover': {
            border: `1px solid ${main}`
        }   
    },
    focused: {
        border: `2px solid ${main}`
    },
    error: {
        border: `1px solid ${error}`
    },
    errorFocused: {
        border: `2px solid ${error}`
    }
};

const FormulaEditor = ({editorValue, placeholder, focused, error, isItalic, isSubscript, isSuperscript, onChange, onFocus = identity, onBlur = identity, changeFocus, getStyle, changeButtonState, classes}) => {
    const onFocusWrapped = () => { changeFocus(true); onFocus(); }; 
    const onBlurWrapped = () => { changeFocus(false); onBlur(); };

    return (
        <div onFocus = {onFocusWrapped } onBlur = {onBlurWrapped} className = {classNames(classes.root, error && focused ? classes.errorFocused : error ? classes.error : focused ? classes.focused : classes.inactive)}> 
            <FormulaEditorInput
                editorValue = {editorValue}
                onChange = {onChange}
                placeholder = {placeholder}
                focused = {focused}
                error = {error}
                onMouseUp = {getStyle}
                onKeyUp = {getStyle}
            />
            <Collapse in = {focused} >
                <FormulaEditorButtonbar
                    changeButtonState = {changeButtonState}
                    isItalic = {isItalic}
                    isSubscript = {isSubscript}
                    isSuperscript = {isSuperscript}
                />
            </Collapse>
        </div>
    );
};

FormulaEditor.propTypes = {
    editorValue: string.isRequired,
    placeholder: string,
    focused: bool,
    error: bool,
    isItalic: bool,
    isSubscript: bool,
    isSuperscript: bool,
    isFormula: bool,
    changeFocus: func.isRequired,
    changeButtonState: func.isRequired,
    onChange: func.isRequired,
    onFocus: func,
    onBlur: func
};

const mapStateToProps = state => ({
    focused: state.formulaEditor.focused,
    isItalic: state.formulaEditor.isItalic,
    isSubscript: state.formulaEditor.isSubscript,
    isSuperscript: state.formulaEditor.isSuperscript
});

const mapDispatchToProps = dispatch => ({
    changeFocus: bindActionCreators(changeFocusAction, dispatch),
    getStyle: bindActionCreators(getStyleAction, dispatch),
    changeButtonState: bindActionCreators(changeButtonStateAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FormulaEditor));