export const usePageCount = (limit, totalPage) => {
    return Math.ceil(totalPage / limit)
}