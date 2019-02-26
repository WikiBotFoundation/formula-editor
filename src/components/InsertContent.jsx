/* 
    Formula-editor component to create scientific formulas.   

    Copyright (C) 2019  ChemAxon Kft.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.*/
import React, { Fragment } from 'react';
import { shape, arrayOf, string } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {popperBorderColor} from './colors';
import Paper from '@material-ui/core/Paper';
import SquareButton from './SquareButton';

const styles = {
    root: {
        width: 295,
        border: `1px solid ${popperBorderColor}`,
        padding: 24
    }
};

const InsertContent = ({characterList, classes}) => (
    <Paper className = {classes.root}>
        {characterList.map(block => <ContentBlock block = {block} key = {block.title}/>)}
    </Paper>
);

const ContentBlock = ({block}) => (
    <Fragment>
        <Typography>{block.title}</Typography>
        {block.characters.map(character => <SquareButton onMouseDown = {() => console.log(character.code)} icon = {<div dangerouslySetInnerHTML = {{__html: character.code}}/>}/>)}
    </Fragment>
);

InsertContent.propTypes = {
    characterList: arrayOf(
        shape({
            title: string.isRequired,
            characters: arrayOf(
                shape({
                    name: string.isRequired,
                    code: string.isRequired
                })
            )
        })
    )
};

export default withStyles(styles)(InsertContent);
