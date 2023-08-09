const useDate = (createdAt:string) => {
    var date = createdAt.slice(0, 9).replaceAll('-','.');
    var time = createdAt.slice(11, 16);
    return {date, time};
}
   
export default useDate;