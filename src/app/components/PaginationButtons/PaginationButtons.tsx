import "./PaginationButtons.scss";

export default function PaginationButtons({pageNumber=1, setPageNumber}) {
  function nextPageHadle(page: number){
    page < 15 && setPageNumber(page + 1);
  }
  function prevPageHadle(page: number){
    page > 1 && setPageNumber(page - 1);
  }
  
  return (
    <div className={`pagination-btns`} >
      <button onClick={()=>prevPageHadle(pageNumber)} className="prev-btn"></button>
      <span className="prev-btn-text">PREV</span>
      <button onClick={()=>nextPageHadle(pageNumber)} className="next-btn"></button>
      <span className="next-btn-text">NEXT</span>
    </div>
  )
}
