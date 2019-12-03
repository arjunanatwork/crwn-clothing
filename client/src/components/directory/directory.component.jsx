import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySelector } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
import './directory.styles.scss';

import MenuItem from "../menu-item/menu-item.component";

const Directory = ({sections}) => {

        return (
            <div className='directory-menu'>
                {sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
            )

}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySelector
})
export default connect(mapStateToProps)(Directory);