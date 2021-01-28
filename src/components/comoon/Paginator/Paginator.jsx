import React, {useState} from 'react'
import s from "./Paginator.module.css";

let Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.paginator}>
            <div className={s.content}>
                {portionNumber > 1 &&
                <button className={s.pageBtn} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV
                </button>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                            return (
                                <button
                                    key={p}
                                    className={currentPage === p ? s.selectedPage : s.pageBtn}
                                    onClick={(e) => {
                                        onPageChanged(p);
                                    }
                                    }>{p}
                                </button>
                            )
                        }
                    )}
                {portionCount > portionNumber && <button className={s.pageBtn} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}

            </div>
        </div>

    )
}
export default Paginator;