import React from 'react'
import s from "./Paginator.module.css";

let Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= 86/*pagesCount*/; i++) {
        pages.push(i);
    }
    return (

        <div>
            {pages.map(p => {
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
        </div>

    )
}
export default Paginator;