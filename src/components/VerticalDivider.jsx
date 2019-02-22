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
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { main } from './colors';

const styles = {
    root: {
        width: 1,
        height: 32,
        borderLeft: '1px solid',
        borderColor: main
    }
};

const VerticalDivider = ({classes}) => (
    <div className = {classes.root}/>
);

export default withStyles(styles)(VerticalDivider);
