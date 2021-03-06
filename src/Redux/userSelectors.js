import { createSelector } from "reselect"

const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => u)
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.IsFetching
}
export const getFollowingInProcess = (state) => {
    return state.usersPage.followingInProcess
}
