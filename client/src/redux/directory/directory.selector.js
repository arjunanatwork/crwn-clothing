import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySelector = createSelector(
    [selectDirectory],
    directory => directory.sections
)